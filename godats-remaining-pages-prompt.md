# GoDats React Rebuild — Remaining Pages (Domain Search, Legal, Partner Program, Careers)

Final follow-up to the main build. Covers `/domain-search`, `/privacy-policy`, `/terms-and-conditions`, `/partner-program`, and the Careers cluster (`/careers`, `/job-openings`, `/jobs/:slug`). This closes out every page in the sitemap.

Same stack throughout: Vite + React JSX + Tailwind + React Router v6 + lucide-react + framer-motion.

---

## 1. DOMAIN SEARCH (`/domain-search`)

**⚠️ Functional requirement, not just a content page:** this page needs a real (or realistically mocked) **domain availability search input** — type a name, see results. On the live WordPress site this was presumably powered by a registrar API/plugin. For this rebuild, build the UI fully functional with a mocked/stubbed check (e.g. a function that randomly returns available/taken, or checks against a hardcoded list) so the frontend UX is complete — flag it clearly with a comment that a real registrar API (e.g. Namecheap, GoDaddy Reseller, Domainr) needs to be wired in on the backend for production. This is a good candidate for a satisfying animated result reveal (checkmark/x animation, price display) with Framer Motion.

**Hero:**
> # Find your dream domain here
> ## Or transfer a domain you already own.
> Dolphin Advanced Technology Services offers hundreds of domain names to choose from. Go global or think local — we'll find you a domain that fits your goals.
>
> ## A better way to secure your perfect domain
> [Search Domains input — the functional search bar described above]

**"A smarter search experience" section:**
> We help you find the perfect domain, not just push whatever's available. Use our intuitive filters and expert suggestions to find a domain that fits your brand.

**4 value props (repeated once on the live site — dedupe to once here):**
1. **Straightforward Pricing, No Gotchas** — Unlike big registrars that lure you in with cheap first year prices and steep renewals, we keep it transparent: no surprise fees, no forced upsells.
2. **Fast, Hassle-Free Setup** — Register your domain with us in minutes. Our streamlined process is a no-frills approach that keeps everything efficient. Find what you like and get online fast.
3. **More Than Just a Domain** — Need hosting, email, or a custom website? We offer seamless integration with everything you need to run and grow your business online. All in one place.
4. **Real Support, Real People** — No chatbots and no endless ticket loops. Get expert help when you need it from a team who actually cares about your success.

**"All Things Domain — Under One Roof" — 3 items:**
1. **Free Registration** — Our turn key domain setup solutions come with hosting, branding, and site design, all in one neat package. So you receive your domain registration at no extra cost. Instant, brand-ready convenience!
2. **Free Domain Privacy Protection** — After you register your domain, your personal information becomes public on databases like WHOIS. Guided by our IT foundations, we offer the highest levels of compliance and protection to keep your data secure from third-party access.
3. **Sweat-Free Transfers** — Keep your site alive and well as you move it from your current host to us. We offer a straightforward setup with just a few clicks, ensuring no downtime and no problems during the move.

**"Find the Perfect Domain for Your Brand" — TLD chip list:**
.com · .net · .io · .info · .shop · .org · .tech · .ai · .co
CTA: "Learn More"

**"Things to Remember Before You Buy a Domain" — 6-item checklist:**
1. **Short is sweet** — The best domain names are short and easy to recall. Use acronyms for longer business names. Ex: Johnson & Johnson becomes jnj.com but try and keep things under 3-words long to aid maximum recall.
2. **Keep it simple** — No numbers, hyphens, slangs, or special characters in your domain name. Avoid misspellings by registering misspellings of your domain name and more than one extension to protect your brand name.
3. **Must be branded** — A branded domain strengthens identity, boosts trust, improves SEO, and prevents confusion. If unavailable, use keywords like Get[YourBrand].com or [YourBrand]Online.com for a relevant and memorable alternative.
4. **Is it available?** — Before registering your branded domain, ensure the name hasn't been trademarked before. Also add social media handles to ensure consistency across your domain URL, ecommerce storefront, social media pages, and the physical shop.
5. **Consider the extension** — Don't put all your eggs in the .com basket. Try alternatives that can be cheaper and more useful. Country-specific extensions are great for local SEO, niche-specific ones bring a higher level of user trust, and creative ones like get.fit let you include a CTA right there in your domain!
6. **Register right away** — Great domains fly out fast. Pick yours the moment you find it and register immediately. Business owners usually buy more than one domain extension for their branded domains to reduce competition and confusion.

**"Future-Proof Your Domain Name" — 3 tips:**
1. **Plan for voice search** — Voice search has become the norm. Get yourself a domain name that's easier to pronounce and remember. That means clear words and shorter names.
2. **Adopt niche domains** — Show your audience you're not just another .com. Niche domains can set you up for instant rapport with audiences. Adopt .xyz, embrace .earth, and satisfy shoppers with .store!
3. **Be creative!** — Your exact match domain already taken? Time to get creative. Elevate your URL and make your brand name stand out with unique TLDs like .myway, .care, .dev, .secure, and so many more!

**Closing:** "Still searching for your perfect domain name? Click on the button below to fill out a short form and let our experts help you out." CTA: "Get Help" → `/contact`

**FAQ:**
1. **What is a domain name?** — In the simplest terms, the domain name is your web address on the internet. It's an easy-to-remember name given to your unique IP address (a string of characters and numbers) online. When you type in godats.com to find us, you're typing in our domain name into your browser. The domain name consists of two parts: the site name (godats), also known as the second-level domain, and the TLD (top-level domain) extension (.com). All domain names are unique identifiers, with no two being exactly the same.
2. **What is a domain name search?** — It's the process where you use an online tool or service to see if your desired domain name is available. Since there can only be one domain name of a kind, the search can become competitive and exhaustive. Most businesses secure a .com domain because it's the default for users searching for new brands. To stay ahead of the competition, we suggest either coming up with a creative business/website name so its .com TLD will be available, or going with another domain extension that's descriptive, niche-specific, and sets you apart from the crowd.
3. **How do I buy a domain name?** — Buying your domain name with us is quick and easy but also very intentional — just fill out the form or buy one of our website packages to get things going. Unlike most other domain registrars, we offer a personalized approach: no automatic domain searches forcing you to pick from a handful of available options. We dive in deep to find domain names and TLDs that align with your industry, market, and business goals, plus protective domain registrations to prevent competitors, typosquatting, or user confusion.
4. **Can I have multiple domains for the same business?** — Yes, a business should have multiple domains to protect its brand, capture more traffic, and avoid user confusion. This includes: defensive domains (misspellings, plural forms, hyphenated versions), different TLDs (.net, .org, country-specific domains), and marketing-specific domains (campaign URLs, keyword-rich domains). These can redirect to your main site, ensuring users always find you even if they mistype. Focus on quality over quantity to avoid unnecessary costs and complexity.
5. **Can I change my domain name after registration?** — Unfortunately, a domain name cannot be changed once registered. You can buy a new domain and redirect traffic from the old website, but that can be a lot of work depending on how old or populated the site is, and might require a rebrand. We recommend being careful when finalizing your domain name — confirm it matches your long-term business goals and industry practices.
6. **What is domain privacy?** — Domain privacy is a service that hides your domain profile data from public databases like WHOIS. Without this protection, your personal information (name, email, phone number, address) can be publicly accessible. We offer domain privacy protection as an integral part of all our domain registration services.
7. **Can I do a domain name search by the owner?** — Yes, you can look up a site's owner via ICANN's WHOIS lookup tool. By entering the domain name, you can view who the site's owner is and their publicly available information. We offer stringent domain privacy protection services as part of our domain registrations to keep these details safe.

---

## 2. PRIVACY POLICY (`/privacy-policy`)

Static legal page — no animation needed beyond a simple fade-in. Use a clean single-column article layout with a sticky table of contents / section jump-links (nice touch for a long legal doc, optional). *Last Updated: May 6, 2025* (keep as-is or update to a current date — your call).

**Full content, section by section:**

> Welcome to Dolphin Advanced Technology Services! Your privacy matters to us, and we are determined to protect your personal information as we provide you with our seamless, all-in-one digital solutions that help you launch and grow your business online.
>
> This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.
>
> This policy applies to all users and subscribers of our website (www.godats.com). By accessing or using our website, or completing the contact registration process offline, you confirm that you have read, understood, and agreed to the terms outlined in this Privacy Policy.

**Information We Collect:**
- Personal Information: name, email address, phone number, business details, and billing information.
- Account Information: username, passwords (encrypted), and service preferences.
- Technical Data: IP address, browser type, device information, and activity on our platform.
- Payment Information: credit card details, bank account numbers, and transaction history (processed securely).
- Business Data: website content, marketing materials, domain registrations, and related files.
- Communication Records: emails and customer support interactions to ensure quality service.

**How We Use Your Information:**
Deliver, operate, and improve our services; manage account authentication and security; process payments and transactions securely; provide customer support and resolve technical issues; communicate service updates, offers, and marketing materials (opt-out anytime); analyze trends and improve user experience through analytics; enforce our terms of service and comply with legal requirements.

**How We Protect Your Information:**
Encryption (sensitive data encrypted at rest and in transit), Access Control (restricted access based on job roles), Secure Infrastructure (regular vulnerability scans and security audits). *"Despite our best efforts, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and remain vigilant when sharing information online."*

**Data Sharing & Third-Party Services:**
> We do not sell, rent, or trade your data. However, we may share it in the following cases:
> - **Service Providers & Partners:** We collaborate with vetted third parties (e.g., analytics providers, fraud prevention services, regulatory compliance agencies) to enhance our offerings and ensure seamless operations.
> - **Legal Compliance:** In certain situations, we may disclose personal information to comply with legal obligations, prevent fraud, enforce agreements, or ensure the safety of our users.
> - **Business Transfers:** If we undergo a merger, acquisition, or asset sale, your information may be transferred to the new entity with prior notice.
>
> **Use of Third-Party Communication Platforms:** For security and accountability, we strongly advise communicating with us through our official channels, such as company email addresses (e.g., support@godats.com). If you choose to engage with our agents via WhatsApp, social media, or any other third-party messaging platforms, please note: we do not assume responsibility for fraudulent activities, miscommunication, or loss of important information from these interactions; if an agent leaves our company, we will not honor any claims or disputes related to prior conversations outside our official communication channels; sensitive information such as payment details, passwords, or business-critical data should never be shared over unofficial platforms. Third-party websites and social media widgets have their own privacy policies — review them before sharing any personal information.

**Managing Third-Party Data Privacy:**
- Adjust Your Browser Settings — disable non-essential cookies or block tracking technologies.
- Use Industry Opt-Out Tools — NAI Opt-Out Platform (http://www.networkadvertising.org/choices/), EDAA Opt-Out Platform (http://www.youronlinechoices.com/), DAA Opt-Out Platform (http://optout.aboutads.info/?c=2&lang=EN).
> Remember that opting out of certain tracking features may affect how smoothly our services run or limit some personalized experiences.

**Your Rights & Choices:**
Access & Correction, Data Deletion, Marketing Preferences, Data Portability, Cookies & Tracking Control. *"We currently do not recognize Do Not Track (DNT) signals from internet browsers. However, you can control tracking preferences through our cookie settings."* To exercise rights: support@godats.com.

**GDPR Compliance (for EEA users):**
Right to Access, Right to Rectification, Right to Erasure, Right to Restrict Processing, Right to Data Portability, Right to Object. Contact support@godats.com for a GDPR-compliant Data Processing Addendum.

**CCPA Compliance (for California):**
Right to Know, Right to Delete, Right to Opt-Out (though we do not sell data), Right to Non-Discrimination. Contact support@godats.com.

**Cookies & Tracking Technologies:**
Used to remember login credentials and preferences, analyze website traffic and performance, and provide personalized content and marketing. Adjustable in browser settings; some tracking is essential and cannot be disabled.

**Data Retention:**
- Account Information — stored while active; removed within 30 days of deletion request unless legally required otherwise.
- Transaction & Payment Records — retained 7 years for financial/tax compliance.
- Customer Support Communications — kept up to 2 years.
- Marketing & Analytics Data — stored up to 3 years unless opted out sooner.
- Security & Fraud Prevention Data — maintained up to 5 years.

**Updates to This Policy:** May be updated to reflect business or legal changes; substantial changes will be notified in advance.

**Contact Us:** support@godats.com · 888-696-0939

---

## 3. TERMS AND CONDITIONS (`/terms-and-conditions`)

Same static article layout as Privacy Policy — reuse the component.

> Please read these terms carefully. By accessing or using this website, you agree to be bound by these terms and conditions. If you disagree, please discontinue use immediately.
>
> Welcome to the **Dolphin Advanced Technology Services (DATS)** website, available at www.godats.com and related domains. In these Terms and Conditions ("Terms"), "You/you" or "User/user" refers to any person accessing the site. **DATS** refers to the legal entity operating this site and providing services from its Chicago, IL-based office.

**1. Purpose of Website** — This website is intended for informational and promotional purposes only. It should not be interpreted as a formal offer, promise, or guarantee of services or availability. Project-specific details are confirmed via individual client agreements.

**2. Company Operations** — DATS delivers in-house services in fintech development, custom software and mobile app development, AI solutions, ERP consulting, hosting, domain registration, and web design. All client work is managed and fulfilled by our internal teams or trusted sister firms when explicitly agreed upon.

**3. Service Availability** — Not all services may be available to every client or at all times. Availability is determined by project scope, resource availability, and internal evaluation. No two client engagements are identical, and final offerings depend on mutual agreement.

**4. User Submissions & Subscriptions** — If you provide your information for downloads, newsletter signups, or service inquiries, you agree to provide accurate data. DATS may contact you using the provided details. Subscriptions may be canceled at any time.

**5. Permitted Use** — You agree not to use this site for any unlawful, harmful, or unauthorized activities, including disruption, hacking, impersonation, or infringement of intellectual property.

**6. Third-Party Links** — This site may link to external websites. These are provided for convenience only and do not constitute an endorsement. DATS is not responsible for the content, availability, or accuracy of third-party websites.

**7. Intellectual Property** — All text, designs, code, graphics, and other content on this site are the property of DATS or its licensors. No material may be copied, republished, or distributed without express written consent.

**8. No Warranties** — This site and its content are provided "as is." DATS makes no guarantees about accuracy, availability, or performance. Formal contracts will always govern the terms of service. Use of this site is at your own risk.

**9. Limitation of Liability** — To the maximum extent permitted by law, DATS shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of this website.

**10. Hold Harmless Clause** — You agree to indemnify and hold harmless DATS, its affiliates, employees, and agents from any claims or losses arising from your use of this site or violation of these Terms.

**11. Confidential Information** — Please do not submit confidential or sensitive personal information through the site. Any materials submitted are considered non-confidential and may be used for internal purposes.

**12. Modifications to Terms** — DATS reserves the right to update these Terms at any time without notice. Continued use of the site constitutes acceptance of any revised Terms.

**13. Governing Law** — These Terms are governed by the laws of the State of Illinois. Any disputes will be subject to binding arbitration in Cook County, Illinois, under the rules of the American Arbitration Association.

**14. Relationship Disclaimer** — Use of this site does not create a business, employment, or agency relationship between you and DATS.

**15. Privacy Policy** — Please refer to our Privacy Policy (link to `/privacy-policy`) for how we collect, use, and protect your personal information.

**16. SMS Communication** — By opting in, you agree to receive SMS messages from Dolphin Advanced Technology Services regarding service updates or scheduling. Message frequency may vary. Standard rates may apply. Text STOP to unsubscribe.

---

## 4. PARTNER PROGRAM (`/partner-program`)

This page has real marketing energy — good candidate for the same animation treatment as the main service pages (staggered reveals, hover cards).

**Hero:**
> # Build Revenue Without Building the Tech
> ## No income cap. Branded Solution. Dedicated Support.
> Unlock no-cap revenue streams when you resell our IT and fintech solutions. Enjoy up to 25% margin on every sale — with non-profit, education, and government orders bringing more.
>
> CTA: "Join Now" → `#partner-pro` (scrolls to the application form at bottom)

**"Resell High-Demand IT & Fintech Solutions" — 4 pillars:**
1. **Recurring Revenue** — Build predictable income with ongoing margins across hosting, cybersecurity, and retained consulting engagements.
2. **Partner Portal** — Access a dedicated partner portal to submit referrals and track their status in real time.
3. **Dedicated Support** — From strategy to deployment and support, our team works alongside you to help you close faster and deliver with confidence.
4. **Full-Spectrum Fintech** — From infrastructure and security to AI, ERP, and fintech development — your clients get everything they need from a single trusted partner.

**"Resell Services that Customers Need, Value, and Pay For" — 5 items:**
1. **A Complete Digital Stack** — You're not selling general IT services. You're selling solutions your clients already need.
2. **Hosting & Infrastructure** — High-performance hosting, cloud environments, and scalable infrastructure built for reliability and speed.
3. **Cybersecurity** — Enterprise-grade protection, compliance frameworks, and risk mitigation — without enterprise complexity.
4. **AI & ERP Consulting** — Help businesses optimize operations, automate workflows, and make smarter decisions with AI-backed consulting.
5. **Fintech Development** — Custom fintech solutions — from payment systems to full-scale platforms — built for scalability and compliance.

**"How it works" — 4 steps (good horizontal stepper component):**
1. **Apply to become a partner** — Tell us about your business and client base.
2. **Get Approved & Onboarded** — Access partner tools, training, and your sales enablement kit.
3. **Start Selling** — Position our services to your clients — under your brand or co-branded.
4. **Earn & Scale** — Close deals. Earn margins. Grow recurring revenue streams.

**"We Offer Better Margins and Stronger Credibility" — 6 items:**
1. **Recurring Revenue That Compounds** — Earn predictable, ongoing income through service-based reselling models — designed for long-term growth.
2. **Sell Without Building** — No dev team or infrastructure headaches. We handle design, build, and delivery. You stay focused on closing deals.
3. **Expand Your Portfolio Instantly** — Offer high-demand services like AI, cybersecurity, and fintech without adding operational overhead.
4. **White-Label Ready** — Position everything under your brand. Your client relationship stays yours.
5. **Sales & Technical Enablement** — Get access to training, sales assets, and technical expertise so you can sell with confidence.
6. **Dedicated Partner Support** — From presales to post-sale, we help you win, deliver, and scale, with a dedicated partner portal, giving you full control and visibility.

**"Built for partners who already have the audience" — 6-icon grid:**
ISOs & payment consultants · Digital agencies · IT service providers · SaaS resellers · Business consultants · System integrators

**"Partner Models" — 3 options (good card-selector component):**
1. **Reseller Partner** — Sell directly to clients and own the relationship + margin.
2. **White-Label Partner** — Offer our solutions entirely under your brand.
3. **Referral Partner** — Prefer introductions over selling? Earn commissions without handling sales.

**Closing line:** "Your clients already need these services. They just don't want 5 vendors. You become the one who solves everything."

**Application form** (id `partner-pro` for the hero CTA scroll-anchor):
- The live site's extracted markup only clearly shows a consent checkbox and Submit button: *"By checking this box and submitting the form, you agree to be contacted by Dolphin Advanced Technology Services using the information provided above regarding our products and services. For details on how we handle your personal data, please review our Privacy Policy."* [checkbox] [Submit]
- The "using the information provided above" implies there are name/email/company fields above the checkbox that weren't captured in scraping. Build a sensible partner-application form with: Full Name*, Business/Company Name*, Email*, Phone, Which partner model interests you? (Reseller / White-Label / Referral — dropdown or radio matching the 3 models above), Tell us about your business/client base (textarea), plus the consent checkbox and Submit. Flag this with a comment noting the exact original field set wasn't fully recoverable from the scrape.

**FAQ:**
1. **Do I need technical expertise to sell these services?** — No, you just need to understand your client's problems. We handle architecture, delivery, and support. You focus on positioning the solution and closing the opportunity.
2. **How does the partner program actually make me money?** — You earn through margins on resold services, recurring revenue on long-term engagements, or commissions — depending on your partner model. The goal is simple: every client you bring in becomes an ongoing revenue stream, not a one-time win.
3. **Can I white-label everything under my own brand?** — Yes. Most partners choose white-label to strengthen their positioning and client retention. We stay invisible — you stay the trusted provider. If you want to leverage the impact of our established brand, cobranding opportunities are also available for partners.
4. **What kind of clients are the best fit?** — Businesses actively investing in growth or struggling with scale — think companies needing better infrastructure, stronger security, operational efficiency (ERP/AI), or custom fintech solutions.
5. **Is there any cost or minimum commitment to join?** — No heavy upfront investment. The program is designed to be accessible — so you can start selling immediately and scale based on performance.
6. **How do I compete with established IT providers or internal teams?** — You don't compete on headcount — you compete on capability. You're offering a full-stack solution (AI, cybersecurity, fintech, infrastructure) without the overhead most providers carry. That's your edge.

---

## 5. CAREERS CLUSTER (`/careers`, `/job-openings`, `/jobs/:slug`)

This is actually **3 connected pages/routes**, not one:

### 5a. Careers landing (`/careers`)

**Hero:**
> # At the Intersection of Infrastructure and Intelligence We Build Systems That Power Businesses
> On-site, hybrid, and remote opportunities available
>
> CTA: "Search Jobs" → `/job-openings`

**"What We Do" — "A Full-Spectrum Fintech & IT Solutions Company":**
> Designing platforms, systems, and products that businesses rely on every day.
- Custom-built applications and business systems
- Fintech platforms and payment integrations
- Cloud infrastructure and dedicated environments
- Cybersecurity and system hardening
- Web design and e-commerce architecture

CTA: "Learn more about us" → `/about`

**"Our Culture — We keep it simple":**
1. Do good work.
2. Make it hold up.
3. Keep getting better.
> And the most important: Do serious work without taking yourself too seriously.

**"Hiring Process — A stress-free hiring process" (6-step vertical/horizontal timeline, great animation candidate):**
1. Your application is received.
2. The application is reviewed and shortlisted.
3. You appear for an online assessment.
4. An HR interview is scheduled for successful candidates.
5. Shortlisted candidates move to the final interview.
6. A job offer is made, and you begin your incredible journey at DATS.

**"We take care of our people" — perks grid:**
Competitive Salary · Performance Bonuses · Project-based Incentives · Leave Encashment · Medical Insurance · Professional Development Opportunities · Training & Growth · Supportive Culture · Remote Flexibility

**"Search available positions"** — CTA: "Search Jobs" → `/job-openings`

**"Get Hired" section with a Submit button** — this looks like a general/speculative application CTA distinct from the per-job forms (for candidates who don't see a matching open role). Build a simple "General Application" mini-form here (Name, Email, Phone, Area of interest, Resume upload) rather than a bare unlabeled Submit button — flag with a comment that the live site's exact field set wasn't recoverable, same as the Partner Program note.

### 5b. Job Openings listing (`/job-openings`)

Filterable job board:
**Filters:** Job Category (All / Devops / 2D/3D Animator), Job Type (All / Full Time / Part Time), Job Location (All / Chicago / Remote / On-site)

**Currently listed roles (build as data-driven cards, not hardcoded — see note below):**
1. **Junior 2D/3D Animator** — Category: 2D/3D Animator · Location: Remote / On-site → links to `/jobs/junior-2d-3d-animator`
2. **Junior DevOps Engineer** — Category: Devops · Location: Chicago → links to `/jobs/junior-devops-engineer`

*(Build this as a small array of job objects the filters operate on, so adding a new role later is just adding a new object — don't hardcode two static cards.)*

### 5c. Job detail page template (`/jobs/:slug`)

Dynamic template — here's the full scraped example for Junior DevOps Engineer to use as your content model:

> # Junior DevOps Engineer
> *Posted May 15, 2026*

**Key Responsibilities:**
- Assist in managing servers and cloud infrastructure
- Support CI/CD pipeline setup and deployment processes
- Monitor application and server performance
- Help automate routine operational tasks
- Troubleshoot basic deployment and hosting issues
- Collaborate with development teams on project deployments
- Learn and implement DevOps best practices
- Maintain documentation for systems and processes

**Requirements:**
- Basic understanding of Linux and command-line usage
- Familiarity with Git and version control systems
- Basic knowledge of cloud platforms such as AWS, Azure, or Google Cloud is a plus
- Understanding of Docker or containerization concepts is preferred
- Willingness to learn CI/CD tools and DevOps workflows
- Good problem-solving and communication skills
- Ability to work in a team environment
- Fresh graduates and entry-level candidates are encouraged to apply

**Preferred Qualifications:**
- Bachelor's degree in Computer Science, Software Engineering, or related field
- Internship or academic project experience is a plus
- DevOps or cloud certifications are a bonus

**Meta:** Job Category: Devops · Job Type: Full Time / Part Time · Job Location: Chicago

**Apply for this position — real form, build exactly this:**
- Full Name*
- Email*
- Phone*
- Bio* (textarea)
- Upload CV/Resume* — allowed types: .pdf, .doc, .docx
- Consent checkbox*: "By using this form you agree with the storage and handling of your data by this website."
- Submit

*(I didn't scrape the "Junior 2D/3D Animator" listing's specific responsibilities/requirements — same template structure applies, just placeholder-appropriate content for an animator role until you pull the real copy, or ask me to scrape that one specifically.)*

**Build note:** since job postings are clearly meant to be added/removed over time (this is a WP custom post type on the live site), structure this as data-driven — a `jobs.js`/`jobs.json` array of job objects (title, slug, category, type, location, postedDate, responsibilities[], requirements[], preferredQualifications[]) that both `/job-openings` and `/jobs/:slug` read from, rather than hardcoding two one-off page components.

---

## Build notes for this batch

- Domain Search needs actual interactive functionality (mocked availability check), not just static content — flag this clearly for your backend guy alongside the earlier form APIs, since a domain-availability checker is a different kind of integration (likely a registrar API) than a lead-capture form.
- Privacy Policy and Terms should share one `<LegalPage />` layout component — they're structurally identical (title + numbered/bulleted sections).
- Partner Program and Careers' "Get Hired" forms both had fields that weren't fully recoverable from the scrape (the live site's markup only exposed the consent checkbox, not the input fields above it) — I've proposed sensible field sets for both and flagged them in the doc; treat those two forms as best-guess reconstructions to confirm with your backend guy, unlike the fully-scraped Contact/ERP/AI/Job Application forms.
- That brings your real form count up from the 4 I mentioned earlier to **7 total**: Contact, ERP Consulting, AI Consulting, Website Brief (multi-step), Partner Program application, Careers "Get Hired" general application, and the Job Application form (used per-listing on `/jobs/:slug`) — worth flagging to your backend guy before he scopes the APIs.
