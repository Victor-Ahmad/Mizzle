import type { MegaMenuType, MenuItemType, ResourceMenuType } from '@/helpers/menu'
import {
  BIconBasket,
  BIconBell,
  BIconBlockquoteRight,
  BIconBoxes,
  BIconBriefcase,
  BIconBullseye,
  BIconCalendar3Week,
  BIconChatLeft,
  BIconEmojiSunglasses,
  BIconEnvelope,
  BIconFileEarmarkText,
  BIconFileText,
  BIconHeart,
  BIconLock,
  BIconMask,
  BIconPerson,
  BIconQuestionCircle,
  BIconRocket,
  BIconShieldLock,
  BIconStar,
  BIconStickies,
  BIconTrash,
  BIconWallet
} from 'bootstrap-icons-vue'

import slackImg from '@/assets/images/elements/slack.svg'
import webflowImg from '@/assets/images/elements/webflow.svg'
import mailchimpImg from '@/assets/images/elements/mailchimp.svg'
import redditImg from '@/assets/images/elements/reddit.svg'
import blogImg2 from '@/assets/images/blog/4by4/02.jpg'
import blogImg1 from '@/assets/images/blog/4by4/01.jpg'
import blogImg3 from '@/assets/images/blog/4by4/03.jpg'
import blog2 from '@/assets/images/blog/02.jpg'

export const ACCOUNT_VERTICAL_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'account-profile',
    label: 'My Profile',
    route: { name: 'account.profile' },
    parentKey: 'pages-account',
    icon: BIconPerson
  },
  {
    key: 'account-security',
    label: 'Security',
    route: { name: 'account.security' },
    parentKey: 'pages-account',
    icon: BIconShieldLock
  },
  {
    key: 'account-notifications',
    label: 'Notifications',
    route: { name: 'account.notifications' },
    parentKey: 'pages-account',
    icon: BIconBell
  },
  {
    key: 'account-projects',
    label: 'Projects',
    route: { name: 'account.projects' },
    parentKey: 'pages-account',
    icon: BIconBriefcase
  },
  {
    key: 'account-payment-details',
    label: 'Payment Details',
    route: { name: 'account.payment-details' },
    parentKey: 'pages-account',
    icon: BIconWallet
  },
  {
    key: 'account-order-history',
    label: 'Order History',
    route: { name: 'account.order-history' },
    parentKey: 'pages-account',
    icon: BIconBasket
  },
  {
    key: 'account-wishlist',
    label: 'Wishlist',
    route: { name: 'account.wishlist' },
    parentKey: 'pages-account',
    icon: BIconHeart
  },
  {
    key: 'account-delete-profile',
    label: 'Delete Profile',
    route: { name: 'account.delete-profile' },
    parentKey: 'pages-account',
    icon: BIconTrash
  }
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'demos',
    label: 'Demos',
    children: [
      {
        key: 'demo-classic-default',
        label: 'Classic Default',
        route: { name: 'demos.classic' },
        parentKey: 'demos'
      },
      {
        key: 'demo-creative-agency',
        label: 'Creative Agency',
        route: { name: 'demos.agency.creative' },
        parentKey: 'demos'
      },
      {
        key: 'demo-digital-agency',
        label: 'Digital Agency',
        route: { name: 'demos.agency.digital' },
        parentKey: 'demos',
        badge: 'New'
      },
      {
        key: 'demo-design-agency',
        label: 'Design Agency',
        route: { name: 'demos.agency.design' },
        parentKey: 'demos',
        badge: 'New'
      },
      {
        key: 'demo-seo-agency',
        label: 'SEO Agency',
        route: { name: 'demos.agency.seo' },
        parentKey: 'demos',
        badge: 'New'
      },
      {
        key: 'demo-product-landing',
        label: 'Product Landing',
        route: { name: 'demos.product-landing' },
        parentKey: 'demos'
      },
      {
        key: 'demo-mobile-app',
        label: 'Mobile App Showcase',
        route: { name: 'demos.mobile-app' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v1',
        label: 'SaaS v.1',
        route: { name: 'saas.v1' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v2',
        label: 'SaaS v.2',
        route: { name: 'saas.v2' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v3',
        label: 'SaaS v.3',
        route: { name: 'saas.v3' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v4',
        label: 'SaaS v.4',
        route: { name: 'saas.v4' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v5',
        label: 'SaaS v.5',
        route: { name: 'saas.v5' },
        parentKey: 'demos'
      },
      {
        key: 'demo-finance-consulting',
        label: 'Finance Consulting',
        route: { name: 'demos.finance-consulting' },
        parentKey: 'demos',
        badge: 'New'
      },
      {
        key: 'demo-shop-index',
        label: 'Index Shop',
        route: { name: 'shop.index' },
        parentKey: 'demos'
      }
    ]
  },
  {
    key: 'pages',
    label: 'Pages',
    children: [
      {
        key: 'pages-about',
        label: 'About',
        parentKey: 'pages',
        children: [
          {
            key: 'about-v1',
            label: 'About v.1',
            route: { name: 'about.v1' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-v2',
            label: 'About v.2',
            route: { name: 'about.v2' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-v3',
            label: 'About v.3',
            route: { name: 'about.v3' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-team',
            label: 'Team',
            route: { name: 'pages.team' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-services-v1',
            label: 'Services v.1',
            route: { name: 'services.v1' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-services-v2',
            label: 'Services v.2',
            route: { name: 'services.v2' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-services-single',
            label: 'Service Single',
            route: { name: 'services.single' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-customer-stories',
            label: 'Customer Stories',
            route: { name: 'customer.stories' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-customer-story-single',
            label: 'Customer Story Single',
            route: { name: 'customer.story-single' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-career',
            label: 'Career',
            route: { name: 'career' },
            parentKey: 'pages-about',
            badge: '2 Jobs'
          },
          {
            key: 'about-career-single',
            label: 'Career Single',
            route: { name: 'career.single' },
            parentKey: 'pages-about'
          }
        ]
      },
      {
        key: 'pages-contact-1',
        label: 'Contact v.1',
        route: { name: 'contact.v1' },
        parentKey: 'pages'
      },
      {
        key: 'pages-contact-2',
        label: 'Contact v.2',
        route: { name: 'contact.v2' },
        parentKey: 'pages'
      },
      {
        key: 'pages-saas',
        label: 'SaaS Pages',
        parentKey: 'pages',
        children: [
          {
            key: 'saas-features',
            label: 'Features',
            route: { name: 'saas.feature' },
            parentKey: 'pages-saas'
          },
          {
            key: 'saas-feature-single',
            label: 'Feature Single',
            route: { name: 'saas.feature-single' },
            parentKey: 'pages-saas'
          },
          {
            key: 'saas-integrations',
            label: 'Integrations',
            route: { name: 'saas.integrations' },
            parentKey: 'pages-saas'
          },
          {
            key: 'saas-integration-single',
            label: 'Integration Single',
            route: { name: 'saas.integration-single' },
            parentKey: 'pages-saas'
          }
        ]
      },
      {
        key: 'pages-shop',
        label: 'Shop',
        parentKey: 'pages',
        children: [
          {
            key: 'shop-grid',
            label: 'Shop Grid',
            route: { name: 'shop.grid' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-single',
            label: 'Shop Single',
            route: { name: 'shop.single', params: { id: '1001' } },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-cart',
            label: 'Shop Cart',
            route: { name: 'shop.cart' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-empty-cart',
            label: 'Shop Empty Cart',
            route: { name: 'shop.empty-cart' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-checkout',
            label: 'Shop Checkout',
            route: { name: 'shop.checkout' },
            parentKey: 'pages-shop'
          }
        ]
      },
      {
        key: 'pages-blog',
        label: 'Blog',
        parentKey: 'pages',
        children: [
          {
            key: 'blog-grid',
            label: 'Blog Grid',
            route: { name: 'blog.grid' },
            parentKey: 'pages-blog'
          },
          {
            key: 'blog-list-sidebar',
            label: 'Blog List Sidebar',
            route: { name: 'blog.list-sidebar' },
            parentKey: 'pages-blog'
          },
          {
            key: 'blog-single-v1',
            label: 'Blog Single v.1',
            route: { name: 'blog.single.v1' },
            parentKey: 'pages-blog'
          },
          {
            key: 'blog-single-v2',
            label: 'Blog Single v.2',
            route: { name: 'blog.single.v2' },
            parentKey: 'pages-blog'
          }
        ]
      },
      {
        key: 'pages-specialty',
        label: 'Specialty Pages',
        parentKey: 'pages',
        children: [
          {
            key: 'specialty-help-center',
            label: 'Help Center',
            route: { name: 'help.center' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-help-detail',
            label: 'Help Center Detail',
            route: { name: 'help.detail' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-pricing',
            label: 'Pricing',
            route: { name: 'pricing' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-faq',
            label: 'Faqs',
            route: { name: 'faqs' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-error-404',
            label: 'Error 404',
            route: { name: 'not-found' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-coming-soon',
            label: 'Coming Soon',
            route: { name: 'coming-soon' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-terms-&-conditions',
            label: 'Terms & Conditions',
            route: { name: 'terms-conditions' },
            parentKey: 'pages-specialty'
          }
        ]
      },
      {
        key: 'pages-auth',
        label: 'Authentication',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-sign-up',
            label: 'Sign Up',
            route: { name: 'auth.sign-up' },
            parentKey: 'pages-auth'
          },
          {
            key: 'auth-sign-in',
            label: 'Sign In',
            route: { name: 'auth.sign-in' },
            parentKey: 'pages-auth'
          },
          {
            key: 'auth-forgot-pass',
            label: 'Forgot Password',
            route: { name: 'auth.forgot-password' },
            parentKey: 'pages-auth'
          }
        ]
      },
      {
        key: 'pages-account',
        label: 'Account',
        parentKey: 'pages',
        children: ACCOUNT_VERTICAL_MENU_ITEMS
      }
    ]
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    children: [
      {
        key: 'portfolio-masonry',
        label: 'Portfolio Masonry',
        route: { name: 'portfolio.masonry' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-showcase',
        label: 'Portfolio Showcase',
        route: { name: 'portfolio.showcase' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-list',
        label: 'Portfolio List',
        route: { name: 'portfolio.list' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-case-study-v1',
        label: 'Portfolio Case Study v.1',
        route: { name: 'portfolio.case-study.v1' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-case-study-v2',
        label: 'Portfolio Case Study v.2',
        route: { name: 'portfolio.case-study.v2' },
        parentKey: 'portfolio'
      }
    ]
  }
]

export const MEGA_MENU_ITEMS: MegaMenuType = {
  usefulLinks: [
    'Market Research',
    'Advertising',
    'Consumer behavior',
    'Digital marketing',
    'Marketing ethics',
    'Social media marketing'
  ],
  company: [
    {
      icon: BIconBoxes,
      title: 'About us',
      description: 'Learn about our story, our mission statement and roadmap.'
    },
    {
      icon: BIconRocket,
      title: 'Career',
      badge: '3 Jobs',
      description: "We're always looking for talented people. Join our team!"
    },
    {
      icon: BIconEmojiSunglasses,
      title: 'Customer stories',
      description: 'Learn how our customer are making big changes to their tech stack'
    }
  ],
  integration: [
    {
      logo: slackImg,
      name: 'Slack'
    },
    {
      logo: webflowImg,
      name: 'Webflow'
    },
    {
      logo: mailchimpImg,
      name: 'Mailchimp'
    },
    {
      logo: redditImg,
      name: 'Reddit'
    }
  ],
  recentBlogs: [
    {
      image: blogImg2,
      title: '10 things you need to know about Mizzle',
      link: '/blog/single/v1'
    },
    {
      image: blogImg1,
      title: 'The Power of Gratitude: Cultivating Joy and Abundance',
      link: '/blog/single/v2'
    },
    {
      image: blogImg3,
      title: 'Effortless Web Development with Mizzle',
      link: '/blog/single/v1'
    }
  ]
}

export const RESOURCES_MENU_ITEMS: ResourceMenuType = {
  usefulLinks: [
    { icon: BIconFileText, name: 'Guides' },
    { icon: BIconChatLeft, name: 'Supports' },
    { icon: BIconCalendar3Week, name: 'Community & events' },
    { icon: BIconBlockquoteRight, name: 'Blogs' },
    { icon: BIconLock, name: 'Security' },
    { icon: BIconStar, name: 'Tutorials' },
    { icon: BIconQuestionCircle, name: 'Help center' },
    { icon: BIconEnvelope, name: 'Developer newsletter' }
  ],
  keyFeatures: [
    {
      title: 'Documentation',
      description: 'Using documentation you can easily develop projects',
      icon: BIconFileEarmarkText
    },
    {
      title: 'Snippets',
      description: 'Development guides for building projects with Mizzle',
      icon: BIconStickies
    },
    {
      title: 'Changelog',
      description: 'Recent feature release and announcement. See how changes are made.',
      icon: BIconBullseye
    },
    {
      title: 'Playwright tips',
      description: 'Tips and In-depth guide for headless browser automation',
      icon: BIconMask
    }
  ],
  featureResource: {
    title: 'Featured title here',
    description: 'Departure defective arranging rapturous did believe him all had supported.',
    image: blog2
  }
}
