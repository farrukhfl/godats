import LegalPage from '../components/LegalPage'

const intro = [
  'Welcome to Dolphin Advanced Technology Services! Your privacy matters to us, and we are determined to protect your personal information as we provide you with our seamless, all-in-one digital solutions that help you launch and grow your business online.',
  'This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.',
  'This policy applies to all users and subscribers of our website (www.godats.com). By accessing or using our website, or completing the contact registration process offline, you confirm that you have read, understood, and agreed to the terms outlined in this Privacy Policy.',
]

const sections = [
  {
    id: 'information-we-collect',
    heading: 'Information We Collect',
    content: [
      {
        type: 'ul',
        items: [
          { label: 'Personal Information', text: 'name, email address, phone number, business details, and billing information.' },
          { label: 'Account Information', text: 'username, passwords (encrypted), and service preferences.' },
          { label: 'Technical Data', text: 'IP address, browser type, device information, and activity on our platform.' },
          { label: 'Payment Information', text: 'credit card details, bank account numbers, and transaction history (processed securely).' },
          { label: 'Business Data', text: 'website content, marketing materials, domain registrations, and related files.' },
          { label: 'Communication Records', text: 'emails and customer support interactions to ensure quality service.' },
        ],
      },
    ],
  },
  {
    id: 'how-we-use',
    heading: 'How We Use Your Information',
    content: [
      {
        type: 'ul',
        items: [
          'Deliver, operate, and improve our services',
          'Manage account authentication and security',
          'Process payments and transactions securely',
          'Provide customer support and resolve technical issues',
          'Communicate service updates, offers, and marketing materials (opt-out anytime)',
          'Analyze trends and improve user experience through analytics',
          'Enforce our terms of service and comply with legal requirements',
        ],
      },
    ],
  },
  {
    id: 'how-we-protect',
    heading: 'How We Protect Your Information',
    content: [
      {
        type: 'ul',
        items: [
          { label: 'Encryption', text: 'sensitive data encrypted at rest and in transit.' },
          { label: 'Access Control', text: 'restricted access based on job roles.' },
          { label: 'Secure Infrastructure', text: 'regular vulnerability scans and security audits.' },
        ],
      },
      { type: 'quote', text: 'Despite our best efforts, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and remain vigilant when sharing information online.' },
    ],
  },
  {
    id: 'data-sharing',
    heading: 'Data Sharing & Third-Party Services',
    content: [
      { type: 'p', text: 'We do not sell, rent, or trade your data. However, we may share it in the following cases:' },
      {
        type: 'ul',
        items: [
          { label: 'Service Providers & Partners', text: 'We collaborate with vetted third parties (e.g., analytics providers, fraud prevention services, regulatory compliance agencies) to enhance our offerings and ensure seamless operations.' },
          { label: 'Legal Compliance', text: 'In certain situations, we may disclose personal information to comply with legal obligations, prevent fraud, enforce agreements, or ensure the safety of our users.' },
          { label: 'Business Transfers', text: 'If we undergo a merger, acquisition, or asset sale, your information may be transferred to the new entity with prior notice.' },
        ],
      },
      { type: 'p', text: 'Use of Third-Party Communication Platforms: For security and accountability, we strongly advise communicating with us through our official channels, such as company email addresses (e.g., support@godats.com). If you choose to engage with our agents via WhatsApp, social media, or any other third-party messaging platforms, please note:' },
      {
        type: 'ul',
        items: [
          'We do not assume responsibility for fraudulent activities, miscommunication, or loss of important information from these interactions.',
          'If an agent leaves our company, we will not honor any claims or disputes related to prior conversations outside our official communication channels.',
          'Sensitive information such as payment details, passwords, or business-critical data should never be shared over unofficial platforms.',
        ],
      },
      { type: 'p', text: 'Third-party websites and social media widgets have their own privacy policies — review them before sharing any personal information.' },
    ],
  },
  {
    id: 'managing-third-party',
    heading: 'Managing Third-Party Data Privacy',
    content: [
      {
        type: 'ul',
        items: [
          { label: 'Adjust Your Browser Settings', text: 'disable non-essential cookies or block tracking technologies.' },
          { label: 'Use Industry Opt-Out Tools', text: 'NAI Opt-Out Platform (networkadvertising.org/choices), EDAA Opt-Out Platform (youronlinechoices.com), DAA Opt-Out Platform (optout.aboutads.info).' },
        ],
      },
      { type: 'quote', text: 'Remember that opting out of certain tracking features may affect how smoothly our services run or limit some personalized experiences.' },
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your Rights & Choices',
    content: [
      { type: 'ul', items: ['Access & Correction', 'Data Deletion', 'Marketing Preferences', 'Data Portability', 'Cookies & Tracking Control'] },
      { type: 'quote', text: 'We currently do not recognize Do Not Track (DNT) signals from internet browsers. However, you can control tracking preferences through our cookie settings.' },
      { type: 'p', text: 'To exercise any of these rights, contact us at support@godats.com.' },
    ],
  },
  {
    id: 'gdpr',
    heading: 'GDPR Compliance (for EEA users)',
    content: [
      { type: 'ul', items: ['Right to Access', 'Right to Rectification', 'Right to Erasure', 'Right to Restrict Processing', 'Right to Data Portability', 'Right to Object'] },
      { type: 'p', text: 'Contact support@godats.com for a GDPR-compliant Data Processing Addendum.' },
    ],
  },
  {
    id: 'ccpa',
    heading: 'CCPA Compliance (for California)',
    content: [
      { type: 'ul', items: ['Right to Know', 'Right to Delete', 'Right to Opt-Out (though we do not sell data)', 'Right to Non-Discrimination'] },
      { type: 'p', text: 'Contact support@godats.com to exercise these rights.' },
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies & Tracking Technologies',
    content: [
      { type: 'p', text: 'Used to remember login credentials and preferences, analyze website traffic and performance, and provide personalized content and marketing. Adjustable in browser settings; some tracking is essential and cannot be disabled.' },
    ],
  },
  {
    id: 'data-retention',
    heading: 'Data Retention',
    content: [
      {
        type: 'ul',
        items: [
          { label: 'Account Information', text: 'stored while active; removed within 30 days of a deletion request unless legally required otherwise.' },
          { label: 'Transaction & Payment Records', text: 'retained 7 years for financial/tax compliance.' },
          { label: 'Customer Support Communications', text: 'kept up to 2 years.' },
          { label: 'Marketing & Analytics Data', text: 'stored up to 3 years unless opted out sooner.' },
          { label: 'Security & Fraud Prevention Data', text: 'maintained up to 5 years.' },
        ],
      },
    ],
  },
  {
    id: 'updates',
    heading: 'Updates to This Policy',
    content: [
      { type: 'p', text: 'This policy may be updated to reflect business or legal changes; substantial changes will be notified in advance.' },
    ],
  },
  {
    id: 'contact-us',
    heading: 'Contact Us',
    content: [
      { type: 'p', text: 'support@godats.com · 888-696-0939' },
    ],
  },
]

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" lastUpdated="May 6, 2025" intro={intro} sections={sections} />
}
