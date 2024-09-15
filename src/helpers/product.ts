import type { ProductType } from '@/types'

export const calculateDiscount = (product: ProductType): number => {
  return product.sale?.type == 'amount'
    ? product.sale.discount
    : product.sale?.type == 'percent'
      ? (product.price / 100) * product.sale.discount
      : 0
}

export const calculatedPrice = (product: ProductType): number => {
  return getPreciseCurrency(product.price - calculateDiscount(product))
}

export const getPreciseCurrency = (price: number) => {
  return parseFloat(price.toFixed(2))
}

type DiscountType = 'percent' | 'amount'

export const discountedPrice = (
  originalPrice: number,
  discount: number,
  discountType: DiscountType = 'percent'
) => {
  if (discountType === 'percent') {
    const discountPrice = (originalPrice * discount) / 100
    return originalPrice - discountPrice
  }

  if (discountType === 'amount') {
    return originalPrice - discount
  }
}
