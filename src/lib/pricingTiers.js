const essentialFeatures = [
  'Free SSL', 'Free Email', 'Free Email Migrator', 'Unlimited Databases', 'Free CDN', 'Daily Backup',
  'Enhanced Security', 'Out-of-The-Box Caching', '100% Renewable Energy Match', '30-Days Money-Back', 'Add Collaborators',
]
const wpFeatures = [
  'Free WP Auto-Install', 'Free WP Auto-Migrator', 'WordPress Autoupdates', 'Speed Optimizer WP Plugin',
  'WooCommerce Enabled', 'WP-CLI and SSH',
]
const goGeekExtras = ['White-Label Clients', 'Free Private DNS', 'Highest Tier of Resources', 'Priority Support']

/**
 * The StartUp / GrowBig / GoGeek hosting tiers, shared verbatim (prices, specs,
 * feature checklists) across Web Hosting, Web Design, and E-commerce Store Design.
 * Pass per-page taglines since that's the only field that differs between pages.
 */
export function getStandardTiers({ startUp, growBig, goGeek }) {
  return [
    {
      name: 'StartUp',
      tagline: startUp,
      badge: 'Save 77%',
      price: '$3.99',
      was: '$17.99/mo',
      priceNote: '*',
      specs: [
        { label: 'Websites', value: '1 Website' },
        { label: 'Web Space', value: '10 GB' },
        { label: 'Monthly Visits', value: '~10,000' },
        { label: 'Traffic', value: 'Unmetered' },
      ],
      featureGroups: [
        { heading: 'Essentials', items: essentialFeatures },
        { heading: 'Managed WordPress', items: wpFeatures },
      ],
    },
    {
      name: 'GrowBig',
      tagline: growBig,
      badge: 'Save 77%',
      price: '$6.69',
      was: '$29.99/mo',
      priceNote: '*',
      popular: true,
      specs: [
        { label: 'Websites', value: 'Unlimited Websites' },
        { label: 'Web Space', value: '20 GB' },
        { label: 'Monthly Visits', value: '~100,000' },
        { label: 'Traffic', value: 'Unmetered' },
      ],
      featureGroups: [
        { heading: 'Essentials', items: essentialFeatures },
        { heading: 'Managed WordPress', items: wpFeatures },
        { heading: 'Exclusive', items: ['On-demand Backup Copies', '30% faster PHP', 'Staging'] },
      ],
    },
    {
      name: 'GoGeek',
      tagline: goGeek,
      badge: 'Save 76%',
      price: '$10.69',
      was: '$44.99/mo',
      priceNote: '*',
      specs: [
        { label: 'Websites', value: 'Unlimited Websites' },
        { label: 'Web Space', value: '40 GB' },
        { label: 'Monthly Visits', value: '~400,000' },
        { label: 'Traffic', value: 'Unmetered' },
      ],
      featureGroups: [
        { heading: 'Essentials', items: essentialFeatures },
        { heading: 'Managed WordPress', items: wpFeatures },
        { heading: 'Exclusive', items: ['On-demand Backup Copies', '30% faster PHP', 'Staging + Git'] },
        { heading: 'GoGeek Exclusive', items: goGeekExtras },
      ],
    },
  ]
}
