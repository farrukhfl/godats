import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'

const intro = [
  'Please read these terms carefully. By accessing or using this website, you agree to be bound by these terms and conditions. If you disagree, please discontinue use immediately.',
  'Welcome to the Dolphin Advanced Technology Services (DATS) website, available at www.godats.com and related domains. In these Terms and Conditions ("Terms"), "You/you" or "User/user" refers to any person accessing the site. DATS refers to the legal entity operating this site and providing services from its Chicago, IL-based office.',
]

const sections = [
  {
    id: 'purpose-of-website',
    heading: '1. Purpose of Website',
    content: [{ type: 'p', text: 'This website is intended for informational and promotional purposes only. It should not be interpreted as a formal offer, promise, or guarantee of services or availability. Project-specific details are confirmed via individual client agreements.' }],
  },
  {
    id: 'company-operations',
    heading: '2. Company Operations',
    content: [{ type: 'p', text: 'DATS delivers in-house services in fintech development, custom software and mobile app development, AI solutions, ERP consulting, hosting, domain registration, and web design. All client work is managed and fulfilled by our internal teams or trusted sister firms when explicitly agreed upon.' }],
  },
  {
    id: 'service-availability',
    heading: '3. Service Availability',
    content: [{ type: 'p', text: 'Not all services may be available to every client or at all times. Availability is determined by project scope, resource availability, and internal evaluation. No two client engagements are identical, and final offerings depend on mutual agreement.' }],
  },
  {
    id: 'user-submissions',
    heading: '4. User Submissions & Subscriptions',
    content: [{ type: 'p', text: 'If you provide your information for downloads, newsletter signups, or service inquiries, you agree to provide accurate data. DATS may contact you using the provided details. Subscriptions may be canceled at any time.' }],
  },
  {
    id: 'permitted-use',
    heading: '5. Permitted Use',
    content: [{ type: 'p', text: 'You agree not to use this site for any unlawful, harmful, or unauthorized activities, including disruption, hacking, impersonation, or infringement of intellectual property.' }],
  },
  {
    id: 'third-party-links',
    heading: '6. Third-Party Links',
    content: [{ type: 'p', text: 'This site may link to external websites. These are provided for convenience only and do not constitute an endorsement. DATS is not responsible for the content, availability, or accuracy of third-party websites.' }],
  },
  {
    id: 'intellectual-property',
    heading: '7. Intellectual Property',
    content: [{ type: 'p', text: 'All text, designs, code, graphics, and other content on this site are the property of DATS or its licensors. No material may be copied, republished, or distributed without express written consent.' }],
  },
  {
    id: 'no-warranties',
    heading: '8. No Warranties',
    content: [{ type: 'p', text: 'This site and its content are provided "as is." DATS makes no guarantees about accuracy, availability, or performance. Formal contracts will always govern the terms of service. Use of this site is at your own risk.' }],
  },
  {
    id: 'limitation-of-liability',
    heading: '9. Limitation of Liability',
    content: [{ type: 'p', text: 'To the maximum extent permitted by law, DATS shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of this website.' }],
  },
  {
    id: 'hold-harmless',
    heading: '10. Hold Harmless Clause',
    content: [{ type: 'p', text: 'You agree to indemnify and hold harmless DATS, its affiliates, employees, and agents from any claims or losses arising from your use of this site or violation of these Terms.' }],
  },
  {
    id: 'confidential-information',
    heading: '11. Confidential Information',
    content: [{ type: 'p', text: 'Please do not submit confidential or sensitive personal information through the site. Any materials submitted are considered non-confidential and may be used for internal purposes.' }],
  },
  {
    id: 'modifications',
    heading: '12. Modifications to Terms',
    content: [{ type: 'p', text: 'DATS reserves the right to update these Terms at any time without notice. Continued use of the site constitutes acceptance of any revised Terms.' }],
  },
  {
    id: 'governing-law',
    heading: '13. Governing Law',
    content: [{ type: 'p', text: 'These Terms are governed by the laws of the State of Illinois. Any disputes will be subject to binding arbitration in Cook County, Illinois, under the rules of the American Arbitration Association.' }],
  },
  {
    id: 'relationship-disclaimer',
    heading: '14. Relationship Disclaimer',
    content: [{ type: 'p', text: 'Use of this site does not create a business, employment, or agency relationship between you and DATS.' }],
  },
  {
    id: 'privacy-policy',
    heading: '15. Privacy Policy',
    content: [
      {
        type: 'node',
        node: (
          <p className="text-sm leading-relaxed text-slate-600">
            Please refer to our{' '}
            <Link to="/privacy-policy" className="font-semibold text-brand-600 hover:underline">Privacy Policy</Link>{' '}
            for how we collect, use, and protect your personal information.
          </p>
        ),
      },
    ],
  },
  {
    id: 'sms-communication',
    heading: '16. SMS Communication',
    content: [{ type: 'p', text: 'By opting in, you agree to receive SMS messages from Dolphin Advanced Technology Services regarding service updates or scheduling. Message frequency may vary. Standard rates may apply. Text STOP to unsubscribe.' }],
  },
]

export default function TermsAndConditions() {
  return <LegalPage title="Terms of Use" intro={intro} sections={sections} />
}
