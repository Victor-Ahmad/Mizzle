import type { ComponentOptionsBase, CreateComponentPublicInstance } from 'vue'
import type { RouteParamsRaw } from 'vue-router'

export type IconType = BSIconType | string

export type BSIconType = ComponentOptionsBase<{}, any, any, any, any, any, any, any, string, any> &
  ThisType<CreateComponentPublicInstance<{}, any, any, any, any, any, any, any, Readonly<{}>>>

export type RouteType = {
  name: string
  params?: RouteParamsRaw
}

export type DateType = {
  date?: number
  month?: string | number
  year?: number
  hour?: number
  minute?: number
}

export type IdType = string | number

export type CompanyType = {
  icon?: string
  image?: string
  name?: string
  externalLink?: string
  route?: RouteType
}

export type ClientType = CompanyType

export type UserType = {
  id?: IdType
  avatar?: string
  email?: string
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  role?: string
  token?: string
  company?: CompanyType
}

export type TestimonialType = {
  id?: IdType
  userId?: UserType['id']
  user: UserType
  title?: string
  comment: string
  rating?: number
}

export type ServiceType = {
  icon?: IconType
  image?: string
  title: string
  description?: string
  route?: RouteType
}

export type FeatureType = ServiceType

export type SocialMediaType = {
  icon?: IconType
  image?: string
  name?: string
  externalLink?: string
  route?: RouteType
}

export type ProjectType = {
  image: string
  name: string
  description?: string
  category?: string
  tags?: string[]
  route?: RouteType
  createdBy?: {
    user?: UserType
    team?: UserType[]
  }
  createdAt?: DateType
  status?: 'published' | 'private'
}

export type PortfolioType = {
  title: string
  image: string
  category?: string
  company?: CompanyType
  route?: RouteType
  badge?: string
}

export type ArticleType = {
  image?: string
  title?: string
  description?: string
  category?: string
  tags?: string[]
  route?: RouteType
  publishedBy?: UserType
  publishedAt?: DateType
}
export type NewsType = ArticleType

export type BlogType = ArticleType

export type MemberType = {
  avatar: string
  firstName: string
  lastName: string
  role?: string
  socialLinks?: SocialMediaType[]
}

export type PricingPlanType = {
  icon?: IconType
  badge?: string
  title?: string
  isPopular?: boolean
  description?: string
  price?: number
  features?: FeatureType[]
  route?: RouteType
}

export type PricingType = {
  duration: 'week' | 'month' | 'year'
  plans: PricingPlanType[]
}

export type CategoryType = {
  id: IdType
  name: string
  image?: string
  icon?: IconType
  route?: RouteType
}

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type SaleType = {
  endsOn?: Date
} & (
  | {
      type: 'percent'
      discount: NumberRange<1, 101>
    }
  | {
      type: 'amount'
      discount: number
    }
)

export type ReviewType = {
  count: number
  stars: number
}

type ColorType = {
  name: string
  code?: string
}

export type ProductAttributesType = {
  colors?: ColorType[]
  weights?: string[]
  material?: string
  composition?: string
  gender?: 'Male' | 'Female'
  size?: string
}

export type ProductType = {
  id?: IdType
  categoryId?: CategoryType['id']
  category?: CategoryType
  images?: string[]
  name?: string
  description?: string
  price: number
  tag?: string
  attributes?: ProductAttributesType
  sale?: SaleType
  isPopular?: boolean
  isNew?: boolean
  stock?: number
  review?: ReviewType
  route?: RouteType
}

export type CartType = {
  id: IdType
  productId?: IdType
  product: ProductType
  quantity: number
}

export type WishlistType = ProductType

export type StatisticType = {
  title: string
  description?: string
  number: number
  prefix?: string
  suffix?: string
}

export type ToolType = {
  icon?: IconType
  image?: string
  name?: string
  description?: string
  route?: RouteType
  externalLink?: string
}

export type FAQType = {
  question: string
  answer: string
  route?: RouteType
}

export type StepType = {
  stepNumber?: number
  icon?: IconType
  title: string
  description?: string
}

export type CounterType = {
  title: string
  state: number
  prefix?: string
  suffix?: string
  description?: string
}

export type CalculatedOrder = {
  total: number
  totalDiscount: number
  tax: number
  orderTotal: number
}

export type ShoppingState = {
  cartItems: CartType[]
  wishlists: WishlistType[]
  toggleToWishlist: (product: ProductType) => void
  isInWishlist: (product: ProductType) => boolean
  isInCart: (product: ProductType) => boolean
  updateQuantity: (product: ProductType, quantity: number) => void
  getCalculatedOrder: () => CalculatedOrder
  getCartItemById: (productId: ProductType) => CartType | undefined
}
