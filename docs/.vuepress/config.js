module.exports = {
  title: 'Enupal Documentation',
  description: 'We love developing high quality and fully integrated plugins for Craft CMS.',
  //theme: 'craftdocs',
  base: '/docs/',
  ga: '',
  plugins: [
    [
      '@vuepress/google-analytics', {
        ga: ''
      }
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.content__default img',
        delay: 1000,
        options: {
          bgColor: '#fbfcfd',
          zIndex: 10000,
        },
      },
    ],
    ['@vuepress/last-updated'],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: (_, $site) => $site.metadata && $site.metadata.siteName || $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        image: ($page, $site) => $page.frontmatter.image && (($site.metadata && $site.metadata.siteUrl || '') + $page.frontmatter.image) || $site.metadata && $site.metadata.image,
        url: (_, $site, path) => ($site.metadata && $site.metadata.siteUrl || '') + path,
        type: _ => 'article',
        twitterCard: _ => 'summary',
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        customMeta: (add, context) => {
          const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            siteTitle, title, description, author,
            twitterCard, type, url, image, publishedAt, modifiedAt,
          } = context;

          add('twitter:creator', $site.metadata && $site.metadata.twitterHandle);
          add('twitter:site', $site.metadata && $site.metadata.twitterHandle);

          let canonical = $page.frontmatter.canonical || url;
          add('canonical', canonical);
        },
      }
    ],
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://enupal.com/docs',
        changefreq: 'weekly',
        exclude: [
          '/404.html'
        ]
      }
    ],
  ],
  markdown: {
    anchor: {level: [2, 3]},
    extendMarkdown: md => {
      md.use(require('./markdown/code'));
    }
  },
  metadata: {
    siteName: 'Enupal Plugin Documentation',
    siteUrl: 'https://enupal.com/docs',
    image: 'https://enupal.com/images/intense/enupal-icono.png',
    twitterHandle: '@enupal',
  },
  themeConfig: {
    logo: "/icons/enupal-icono.png",
    docsRepo: 'enupal/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    codeLanguages: {
      twig: 'Twig',
      php: 'PHP',
      js: 'Javascript',
      plaintext: 'Plaintext'
    },
    algolia: {
      apiKey: '',
      indexName: ''
    },
    nav: [
      {
        text: '🛒 Buy License',
        items: [
          {text: 'Stripe Payments', link: 'https://enupal.com/craft-plugins/stripe-payments/pricing'},
          {text: 'Socializer', link: 'https://enupal.com/craft-plugins/socializer/pricing'},
          {text: 'Enupal Backup', link: 'https://enupal.com/craft-plugins/enupal-backup/pricing'},
          {text: 'Enupal Translate', link: 'https://enupal.com/craft-plugins/translate/pricing'},
          {text: 'Enupal Snapshot', link: 'https://enupal.com/craft-plugins/enupal-snapshot/pricing'},
          {text: 'Enupal Slider', link: 'https://enupal.com/craft-plugins/enupal-slider/pricing'},
          {text: 'PayPal Buttons', link: 'https://enupal.com/craft-plugins/paypal/pricing'},
        ]
      },
      {text: 'Back to Enupal →', link: 'https://enupal.com/'},
    ],
    sidebar: {
      '/stripe-payments/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            'getting-started/installation-setup',
            'getting-started/requirements',
            'getting-started/saving-your-stripe-api-keys',
            'getting-started/sca'
          ]
        },
        {
          title: 'Stripe Payments',
          collapsable: false,
          children: [
            'stripe-payment-forms/payment-methods',
            'stripe-payment-forms/one-time-payment-form',
            'stripe-payment-forms/one-time-custom-amount',
            'stripe-payment-forms/single-subscription',
            'stripe-payment-forms/multiple-subscription-options',
            'stripe-payment-forms/form-builder-metadata-fields',
            'stripe-payment-forms/billing-and-shipping-address',
            'stripe-payment-forms/taxes',
            'stripe-payment-forms/webhook',
            'stripe-payment-forms/metered-billing-plan',
            'stripe-payment-forms/subscription-grants'
          ]
        },
        {
          title: 'Templating',
          collapsable: false,
          children: [
            'templating/paymentform',
            'templating/payment-forms',
            'templating/getallorders',
            'templating/getorderbynumber',
            'templating/orders-display-form-fields-values-metadata',
            'templating/orders-display-address',
            'templating/get-subscription',
            'templating/cancel-subscriptions',
            'templating/display-errors',
            'templating/update-card-info',
            'templating/update-subscription-plan',
            'templating/get-all-paid-invoices-from-subscription'
          ]
        },
        {
          title: 'Coupons',
          collapsable: false,
          children: [
            'coupons/overview',
            'coupons/create-coupon'
          ]
        },
        {
          title: 'Orders',
          collapsable: false,
          children: [
            'orders/sync-orders',
            'orders/order-pdf'
          ]
        },
        {
          title: 'Field type',
          collapsable: false,
          children: [
            'field-type/display-button'
          ]
        },
        {
          title: 'Notifications',
          collapsable: false,
          children: [
            'notifications/customer',
            'notifications/admin'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            'plugin-development/events',
            'plugin-development/template-overrides',
            'plugin-development/update-form-field-values'
          ]
        }
      ],
      // Socializer
      '/socializer/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            'getting-started/installation-setup',
            'getting-started/requirements'
          ]
        },
        {
          title: 'Providers',
          collapsable: false,
          children: [
            'providers/available-providers',
            'providers/create-provider',
            'providers/user-field-mapping',
            'providers/display-login-url'
          ]
        },
        {
          title: 'Tokens',
          collapsable: false,
          children: [
            'tokens/retrieve-tokens'
          ]
        },
      ],
      // More plugins here
      // fallback
      '/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '/',
          ]
        },
        {
          title: 'Craft CMS Plugins',
          collapsable: false,
          children: [
            ['stripe-payments/', 'Stripe Payments'],
            ['socializer/', 'Socializer']
          ]
        }
        // Add more to the main menu
      ]
    }
  }
};
