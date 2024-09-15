import shop2Img from '@/assets/images/shop/02.png'
import shop1Img from '@/assets/images/shop/01.png'
import type { ProductType } from '@/types'

type ProductsType = {
  image: string
  stockStatus: string
  gender: string
  color?: string
  size: string
} & ProductType

export const productItems: ProductsType[] = [
  {
    image: shop2Img,
    name: 'Round neck cotton t-shirt',
    stockStatus: 'In Stock',
    gender: 'Male',
    color: 'Midblue',
    size: 'XL, L, M, S',
    price: 103
  },
  {
    image: shop1Img,
    name: 'Woman skincare drops',
    stockStatus: 'Available in 5 days',
    gender: 'Female',
    size: '100ml',
    price: 98
  }
]
