import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TrainEase User Manual",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/overview' },
      { text: 'FAQ', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/overview' }
        ],
        
      },
      {
        text: 'User Manual',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Making a Booking', link: '/booking-process' },
          { text: 'Viewing and Cancelling Bookings', link: '/booking-cancellation' },
          { text: 'Updating Profile', link: '/update-profile' },

        ],
        
      }
    ],

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
