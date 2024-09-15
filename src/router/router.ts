const setTitle = (pageName?: string) => {
  return pageName
    ? `${pageName} | Mizzle Vue - Multipurpose Bootstrap Template`
    : 'Mizzle Vue | Multipurpose Bootstrap Template'
}

const demoRoutes = [
  {
    path: '/',
    redirect: { name: 'demos.classic' },
    name: 'index'
  },
  {
    path: '/demos/classic',
    name: 'demos.classic',
    meta: {
      title: setTitle()
    },
    component: () => import('@/views/demos/Index/index.vue')
  },
  {
    path: '/demos/agency/creative',
    name: 'demos.agency.creative',
    meta: {
      title: setTitle('Creative Agency')
    },
    component: () => import('@/views/demos/CreativeAgency/index.vue')
  },
  {
    path: '/demos/agency/digital',
    name: 'demos.agency.digital',
    meta: {
      title: setTitle('Digital Agency')
    },
    component: () => import('@/views/demos/DigitalAgency/index.vue')
  },
  {
    path: '/demos/agency/design',
    name: 'demos.agency.design',
    meta: {
      title: setTitle('Design Agency')
    },
    component: () => import('@/views/demos/DesignAgency/index.vue')
  },
  {
    path: '/demos/agency/seo',
    name: 'demos.agency.seo',
    meta: {
      title: setTitle('Seo Agency')
    },
    component: () => import('@/views/demos/SeoAgency/index.vue')
  },
  {
    path: '/demos/product-landing',
    name: 'demos.product-landing',
    meta: {
      title: setTitle('Product')
    },
    component: () => import('@/views/demos/Product/index.vue')
  },
  {
    path: '/demos/mobile-app',
    name: 'demos.mobile-app',
    meta: {
      title: setTitle('Mobile App Showcase')
    },
    component: () => import('@/views/demos/MobileShowcase/index.vue')
  },
  {
    path: '/saas/v1',
    name: 'saas.v1',
    meta: {
      title: setTitle('Saas 1')
    },
    component: () => import('@/views/demos/Saas1/index.vue')
  },
  {
    path: '/saas/v2',
    name: 'saas.v2',
    meta: {
      title: setTitle('Saas 2')
    },
    component: () => import('@/views/demos/Saas2/index.vue')
  },
  {
    path: '/saas/v3',
    name: 'saas.v3',
    meta: {
      title: setTitle('Saas 3')
    },
    component: () => import('@/views/demos/Saas3/index.vue')
  },
  {
    path: '/saas/v4',
    name: 'saas.v4',
    meta: {
      title: setTitle('Saas 4')
    },
    component: () => import('@/views/demos/Saas4/index.vue')
  },
  {
    path: '/saas/v5',
    name: 'saas.v5',
    meta: {
      title: setTitle('Saas 5')
    },
    component: () => import('@/views/demos/Saas5/index.vue')
  },
  {
    path: '/demos/finance-consulting',
    name: 'demos.finance-consulting',
    meta: {
      title: setTitle('Finance Consulting')
    },
    component: () => import('@/views/demos/Finance/index.vue')
  },
  {
    path: '/shop/index',
    name: 'shop.index',
    meta: {
      title: setTitle('Shop')
    },
    component: () => import('@/views/demos/Shop/index.vue')
  }
]

const pagesRoutes = [
  {
    path: '/help/detail',
    name: 'help.detail',
    meta: {
      title: setTitle('Help Details')
    },
    component: () => import('@/views/pages/speciality/HelpDetails/index.vue')
  },
  {
    path: '/help/center',
    name: 'help.center',
    meta: {
      title: setTitle('Help Center')
    },
    component: () => import('@/views/pages/speciality/HelpCenter/index.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',
    meta: {
      title: setTitle('Pricing')
    },
    component: () => import('@/views/pages/speciality/Pricing/index.vue')
  },
  {
    path: '/faqs',
    name: 'faqs',
    meta: {
      title: setTitle('Faq')
    },
    component: () => import('@/views/pages/speciality/Faq/index.vue')
  },
  {
    path: '/not-found',
    name: 'not-found',
    meta: {
      title: setTitle('Error 404')
    },
    component: () => import('@/views/pages/speciality/Error404/index.vue')
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    meta: {
      title: setTitle('Coming Soon')
    },
    component: () => import('@/views/pages/speciality/ComingSoon/index.vue')
  },
  {
    path: '/terms-conditions',
    name: 'terms-conditions',
    meta: {
      title: setTitle('Terms & Conditions')
    },
    component: () => import('@/views/pages/speciality/Terms&Conditions/index.vue')
  },
  {
    path: '/about/v1',
    name: 'about.v1',
    meta: {
      title: setTitle('About-V1')
    },
    component: () => import('@/views/pages/about/AboutV1/index.vue')
  },
  {
    path: '/about/v2',
    name: 'about.v2',
    meta: {
      title: setTitle('About-V2')
    },
    component: () => import('@/views/pages/about/AboutV2/index.vue')
  },
  {
    path: '/about/v3',
    name: 'about.v3',
    meta: {
      title: setTitle('About-V3')
    },
    component: () => import('@/views/pages/about/AboutV3/index.vue')
  },
  {
    path: '/pages/team',
    name: 'pages.team',
    meta: {
      title: setTitle('Team')
    },
    component: () => import('@/views/pages/about/Team/index.vue')
  },
  {
    path: '/services/v1',
    name: 'services.v1',
    meta: {
      title: setTitle('Services-V1')
    },
    component: () => import('@/views/pages/about/ServicesV1/index.vue')
  },
  {
    path: '/services/v2',
    name: 'services.v2',
    meta: {
      title: setTitle('Services-V2')
    },
    component: () => import('@/views/pages/about/ServiceV2/index.vue')
  },
  {
    path: '/services/single',
    name: 'services.single',
    meta: {
      title: setTitle('Services Single')
    },
    component: () => import('@/views/pages/about/ServiceSingle/index.vue')
  },
  {
    path: '/customer/stories',
    name: 'customer.stories',
    meta: {
      title: setTitle('Customer Stories')
    },
    component: () => import('@/views/pages/about/CustomerStory/index.vue')
  },
  {
    path: '/customer/story-single',
    name: 'customer.story-single',
    meta: {
      title: setTitle('Customer Stories Single')
    },
    component: () => import('@/views/pages/about/StorieSingle/index.vue')
  },
  {
    path: '/career',
    name: 'career',
    meta: {
      title: setTitle('Career')
    },
    component: () => import('@/views/pages/about/Career/index.vue')
  },
  {
    path: '/career/single',
    name: 'career.single',
    meta: {
      title: setTitle('Career Single')
    },
    component: () => import('@/views/pages/about/CareerSingle/index.vue')
  },
  {
    path: '/contact/v1',
    name: 'contact.v1',
    meta: {
      title: setTitle('ContactV1')
    },
    component: () => import('@/views/pages/contact/ContactV1/index.vue')
  },
  {
    path: '/contact/v2',
    name: 'contact.v2',
    meta: {
      title: setTitle('ContactV2')
    },
    component: () => import('@/views/pages/contact/ContactV2/index.vue')
  }
]

const saasRoutes = [
  {
    path: '/saas/features',
    name: 'saas.feature',
    meta: {
      title: setTitle('Feature')
    },
    component: () => import('@/views/pages/saas/Feature/index.vue')
  },
  {
    path: '/saas/feature-single',
    name: 'saas.feature-single',
    meta: {
      title: setTitle('Feature Single')
    },
    component: () => import('@/views/pages/saas/FeatureSingle/index.vue')
  },
  {
    path: '/saas/integrations',
    name: 'saas.integrations',
    meta: {
      title: setTitle('Integrations')
    },
    component: () => import('@/views/pages/saas/Integrations/index.vue')
  },
  {
    path: '/saas/integration-single',
    name: 'saas.integration-single',
    meta: {
      title: setTitle('Integrations')
    },
    component: () => import('@/views/pages/saas/IntegrationSingle/index.vue')
  }
]

const shopRoutes = [
  {
    path: '/shop/grid',
    name: 'shop.grid',
    meta: {
      title: setTitle('Shop Grid')
    },
    component: () => import('@/views/Shop/Grid/index.vue')
  },
  {
    path: '/shop/single/:id?',
    name: 'shop.single',
    params: { id: '1001' },
    meta: {
      title: setTitle('Shop Single')
    },
    component: () => import('@/views/Shop/Single/index.vue')
  },
  {
    path: '/shop/cart',
    name: 'shop.cart',
    meta: {
      title: setTitle('Shop Cart'),
      authRequired: true
    },
    component: () => import('@/views/Shop/Cart/index.vue')
  },
  {
    path: '/shop/empty-cart',
    name: 'shop.empty-cart',
    meta: {
      title: setTitle('Shop Empty Cart'),
      authRequired: true
    },
    component: () => import('@/views/Shop/EmptyCart/index.vue')
  },
  {
    path: '/shop/checkout',
    name: 'shop.checkout',
    meta: {
      title: setTitle('Shop Checkout'),
      authRequired: true
    },
    component: () => import('@/views/Shop/Checkout/index.vue')
  }
]

const blogRoutes = [
  {
    path: '/blog/grid',
    name: 'blog.grid',
    meta: {
      title: setTitle('Blog Grid')
    },
    component: () => import('@/views/Blog/Grid/index.vue')
  },
  {
    path: '/blog/list-sidebar',
    name: 'blog.list-sidebar',
    meta: {
      title: setTitle('Blog List Sidebar')
    },
    component: () => import('@/views/Blog/ListSidebar/index.vue')
  },
  {
    path: '/blog/single/v1',
    name: 'blog.single.v1',
    meta: {
      title: setTitle('Blog Single v.1')
    },
    component: () => import('@/views/Blog/SingleV1/index.vue')
  },
  {
    path: '/blog/single/v2',
    name: 'blog.single.v2',
    meta: {
      title: setTitle('Blog Single v.2')
    },
    component: () => import('@/views/Blog/SingleV2/index.vue')
  }
]

const portfolioRoutes = [
  {
    path: '/portfolio/masonry',
    name: 'portfolio.masonry',
    meta: {
      title: setTitle('Portfolio Masonry')
    },
    component: () => import('@/views/portfolio/Masonry/index.vue')
  },
  {
    path: '/portfolio/showcase',
    name: 'portfolio.showcase',
    meta: {
      title: setTitle('Portfolio Showcase')
    },
    component: () => import('@/views/portfolio/Showcase/index.vue')
  },
  {
    path: '/portfolio/list',
    name: 'portfolio.list',
    meta: {
      title: setTitle('Portfolio list')
    },
    component: () => import('@/views/portfolio/List/index.vue')
  },
  {
    path: '/portfolio/case-study/v1',
    name: 'portfolio.case-study.v1',
    meta: {
      title: setTitle('Portfolio Case Study v.1')
    },
    component: () => import('@/views/portfolio/CaseStudyV1/index.vue')
  },
  {
    path: '/portfolio/case-study/v2',
    name: 'portfolio.case-study.v2',
    meta: {
      title: setTitle('Portfolio Case Study v.2')
    },
    component: () => import('@/views/portfolio/CaseStudyV2/index.vue')
  }
]

const authRoutes = [
  {
    path: '/auth/sign-in',
    name: 'auth.sign-in',
    meta: {
      title: setTitle('SignIn')
    },
    component: () => import('@/views/pages/auth/SignIn/index.vue')
  },
  {
    path: '/auth/sign-up',
    name: 'auth.sign-up',
    meta: {
      title: setTitle('SignUp')
    },
    component: () => import('@/views/pages/auth/SignUp/index.vue')
  },
  {
    path: '/auth/forgot-password',
    name: 'auth.forgot-password',
    meta: {
      title: setTitle('Forgot Password')
    },
    component: () => import('@/views/pages/auth/ForgotPassword/index.vue')
  }
]

const accountsRoutes = [
  {
    path: '/account/profile',
    name: 'account.profile',
    meta: {
      title: setTitle('Account Details'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/Details/index.vue')
  },
  {
    path: '/account/security',
    name: 'account.security',
    meta: {
      title: setTitle('Account Security'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/Security/index.vue')
  },
  {
    path: '/account/notifications',
    name: 'account.notifications',
    meta: {
      title: setTitle('Notification'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/Notification/index.vue')
  },
  {
    path: '/account/projects',
    name: 'account.projects',
    meta: {
      title: setTitle('Account Project'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/Project/index.vue')
  },
  {
    path: '/account/payment-details',
    name: 'account.payment-details',
    meta: {
      title: setTitle('Payment Detail'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/PaymentDetail/index.vue')
  },
  {
    path: '/account/order-history',
    name: 'account.order-history',
    meta: {
      title: setTitle('Order History'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/Order/index.vue')
  },
  {
    path: '/account/wishlist',
    name: 'account.wishlist',
    meta: {
      title: setTitle('Wishlist'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/Wishlist/index.vue')
  },
  {
    path: '/account/delete-profile',
    name: 'account.delete-profile',
    meta: {
      title: setTitle('Delete Profile'),
      authRequired: true
    },
    component: () => import('@/views/pages/accounts/Delete/index.vue')
  }
]

export const allRoutes = [
  ...demoRoutes,
  ...pagesRoutes,
  ...authRoutes,
  ...accountsRoutes,
  ...portfolioRoutes,
  ...shopRoutes,
  ...blogRoutes,
  ...saasRoutes
]
