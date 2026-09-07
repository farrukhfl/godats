export const DERPS_LOGIN_URL = 'https://derps.gotmsolutions.com/'
export const WHATSAPP_URL = 'https://wa.me/8886960939'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/dolphin-advanced-technology-services'
export const PHONE = '888-696-0939'
export const PHONE_TEL = 'tel:+18886960939'
export const EMAIL_INFO = 'info@godats.com'
export const EMAIL_SALES = 'sales@godats.com'
export const ADDRESS = '850 Lee Street, Elk Grove Village, IL 60007'

export const headerNav = [
  { label: 'Home', to: '/' },
  { label: 'Domain', to: '/domain-search' },
  {
    label: 'Hosting',
    items: [
      { label: 'Web Hosting', to: '/web-hosting', desc: 'Fast, reliable hosting for any site' },
      { label: 'Cloud Hosting', to: '/cloud-hosting', desc: 'Scalable infrastructure, zero hassle' },
      { label: 'Reseller Hosting', to: '/reseller-hosting', desc: 'White-label hosting for your clients' },
    ],
  },
  {
    label: 'Services',
    items: [
      { label: 'Web Development', to: '/make-a-website', desc: 'Custom-built, code-first websites' },
      { label: 'Web Design', to: '/web-design', desc: 'Interfaces that convert visitors' },
      { label: 'App Development', to: '/app-development', desc: 'Mobile & web apps built to scale' },
      { label: 'E-commerce Store Design', to: '/ecommerce-store-design', desc: 'Launch a branded online store' },
    ],
    groupLabel: 'Consulting',
    groupItems: [
      { label: 'ERP Consulting', to: '/erp-consulting', desc: 'Align your systems and strategy' },
      { label: 'AI Consulting', to: '/ai-consulting', desc: 'Put your data to work' },
      { label: 'Email Services', to: '/email', desc: 'Professional, branded email' },
    ],
  },
  {
    label: 'Support',
    items: [
      { label: 'Live Support', to: '/contact', desc: 'Talk to a real human, fast' },
      { label: 'Contact Us', to: '/contact', desc: 'Get in touch with our team' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { label: 'About Us', to: '/about', desc: 'Our story, mission, and culture' },
      { label: 'Careers', to: '/careers', desc: 'Join the team' },
      { label: 'Blog', to: '/', desc: 'Coming soon' },
    ],
  },
]

export const footerColumns = [
  {
    heading: 'Domain',
    links: [
      { label: 'Domain Search', to: '/domain-search' },
      { label: 'Free Domain', to: '/domain-search' },
      { label: 'Domain Transfer', to: '/domain-search' },
      { label: 'Whois Lookup', to: '/domain-search' },
      { label: 'Domain Extension', to: '/domain-search' },
    ],
  },
  {
    heading: 'Hosting',
    links: [
      { label: 'Web Hosting', to: '/web-hosting' },
      { label: 'WordPress Hosting', to: '/web-hosting' },
      { label: 'Cloud Hosting', to: '/cloud-hosting' },
      { label: 'Reseller Hosting', to: '/reseller-hosting' },
      { label: 'Hosting for WooCommerce', to: '/web-hosting' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Development', to: '/make-a-website' },
      { label: 'Web Design', to: '/web-design' },
      { label: 'App Development', to: '/app-development' },
      { label: 'E-commerce Store Design', to: '/ecommerce-store-design' },
    ],
  },
  {
    heading: 'Consulting',
    links: [
      { label: 'ERP Consulting', to: '/erp-consulting' },
      { label: 'AI Consulting', to: '/ai-consulting' },
      { label: 'Email Services', to: '/email' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Partner Program', to: '/partner-program' },
      { label: 'Careers', to: '/careers' },
      { label: 'Job Openings', to: '/job-openings' },
    ],
  },
]
