import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { CartType, ProductType, ShoppingState, WishlistType } from '@/types'
import { calculateDiscount } from '@/helpers/product'
import { cartItems } from '@/assets/data/cart-items'
import { useToast } from 'vue-toastification'

const toast = useToast()

const INIT_STATE: ShoppingState = {
  cartItems: cartItems,
  wishlists: [],
  toggleToWishlist: () => {},
  isInWishlist: () => false,
  isInCart: () => false,
  updateQuantity: () => {},
  getCalculatedOrder: () => {
    return {
      orderTotal: 0,
      tax: 0,
      total: 0,
      totalDiscount: 0
    }
  },
  getCartItemById: () => undefined
}

export const useShoppingStore = defineStore('context_store', () => {
  const state = useLocalStorage<ShoppingState>('__MIZZLE_VUE__', INIT_STATE)

  const getCalculatedOrder = () => {
    let cartTotal = 0,
      cartDiscount = 0

    state.value.cartItems.forEach((cart) => {
      cartDiscount += calculateDiscount(cart.product!) * cart.quantity
      cartTotal += cart.product!.price * cart.quantity
    })

    const cartAmount = cartTotal - cartDiscount
    const tax = 0

    return {
      total: cartTotal,
      totalDiscount: cartDiscount,
      tax: tax,
      orderTotal: cartAmount + tax
    }
  }

  const updateState = (changes: Partial<ShoppingState>): void => {
    state.value = { ...state.value, ...changes }
  }

  const updateQuantity = (product: ProductType, qty: number): void => {
    let cartItems = []
    if (qty < 0) return
    if (qty == 0) {
      cartItems = state.value.cartItems.filter((cart: CartType) => cart.productId != product.id)
    } else {
      if (isInCart(product)) {
        cartItems = state.value.cartItems.map((cart: CartType) => {
          if (cart.productId == product.id) {
            return {
              ...cart,
              quantity: qty
            }
          }
          return cart
        })
      } else {
        cartItems = state.value.cartItems
        cartItems.push({
          id: (state.value.cartItems.length + 1).toString(),
          product: product,
          quantity: qty,
          productId: product.id
        })

        toast.success(`${product.name} added to your cart`, {
          timeout: 3000
        })
      }
    }
    updateState({ cartItems })
  }

  const isInCart = (product: ProductType): boolean => {
    return (
      state.value.cartItems.find((cartItem: CartType) => cartItem?.productId == product?.id) != null
    )
  }

  const isInWishlist = (product: ProductType): boolean => {
    return (
      state.value.wishlists.find((wishlistDish: WishlistType) => wishlistDish?.id == product?.id) !=
      null
    )
  }

  const getCartItemById = (product: ProductType): CartType | undefined => {
    return state.value.cartItems.find((item: CartType) => item.productId == product.id)
  }

  const toggleToWishlist = (product: ProductType): void => {
    let wishlists = state.value.wishlists
    if (isInWishlist(product)) {
      wishlists = wishlists.filter((p: WishlistType) => p.id != product.id)
    } else {
      wishlists.push(product)
    }
    updateState({ wishlists })
  }

  return {
    state,
    isInCart,
    updateQuantity,
    isInWishlist,
    getCartItemById,
    toggleToWishlist,
    getCalculatedOrder
  }
})
