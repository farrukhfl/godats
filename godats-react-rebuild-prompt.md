# GoDats (Dolphin Advanced Technology Services) — WordPress → React Rebuild

Paste this whole file into Claude Code as your build prompt.

---

## 1. Project Context

Build a full multi-page marketing website in **React (Vite) + JSX + Tailwind CSS + React Router v6 + lucide-react**, same stack and conventions as my previous DERPS (cosmointerchange.com) and Dolphin Merchant Services (godms.com) rebuilds.

**Important positioning:** GoDats is the **parent company**. It is the umbrella brand that owns/operates other products — including DERPS (an ERP system) and Dolphin Merchant Services (a POS/payments company). This site should feel like a confident holding-company / group site: broader, more authoritative, and more "corporate flagship" than a single-product site. Where relevant (e.g. an "Our Companies/Products" or footer mention), it's fine to reference that GoDats is the group behind multiple specialized businesses, but don't force it everywhere — the primary job of this site is still to sell GoDats' own domain/hosting/web/app/AI/ERP services.

**Brand name in UI:** "GoDats" (short form) / "Dolphin Advanced Technology Services" (full legal/formal form) — use GoDats as the primary nav/logo wordmark, and the full name in the footer/about/legal areas, matching how the live site does it.

**Tagline / positioning line:** "Everything you need to get your business on the web. Domain names, cloud hosting, app development, AI and ERP consultation, and more. It all starts here."

**Founded:** 2009 ("Since 2009" / "15 years ago" per About page — treat as a live, incrementing stat if you want, otherwise hardcode 15+ years).

**HQ:** 850 Lee Street, Elk Grove Village, IL 60007 (map embed on Contact page uses this address — note the About page separately claims "based in Chicago, Illinois," keep as-is, it's their existing copy, don't try to reconcile it).

**Contact:**
- Phone: 888-696-0939
- Info email: info@godats.com
- Sales email: sales@godats.com
- WhatsApp: https://wa.me/8886960939
- LinkedIn: https://www.linkedin.com/company/dolphin-advanced-technology-services

**Existing product link to preserve:** A "Sign in" / "Derps Login" link in the header pointing to `https://derps.gotmsolutions.com/` — keep this as an external link in the new build (this is the DERPS product login).

---

## 2. Animation Requirement (this is the big upgrade over prior builds)

This site needs to feel noticeably more premium and "alive" than DERPS/DMS. Use **Framer Motion** as the primary animation library (install `framer-motion`). Specifically:

- Hero section: staged entrance animation (headline, subtext, CTA button animate in with slight stagger/delay), plus a subtle continuous motion element (floating gradient blobs, parallax shapes, or animated grid/particles in the background — keep it tasteful, not distracting).
- Scroll-triggered reveals on every section using `whileInView` (fade + slide-up, staggered children for card grids like the 4 service cards, the "Everything you need to thrive online" cards, testimonials, FAQ items).
- Sticky/animated navbar: subtle shrink or background-blur-in effect on scroll.
- Hover micro-interactions on all cards/buttons (scale, shadow lift, gradient shift) — use Tailwind transitions where simple, Framer Motion `whileHover`/`whileTap` for anything with spring physics.
- Animated counters for stats sections (App Development page has "0+ apps delivered / 0M+ monthly active users / 0+ years / 0% uptime / 0% AI-ERP integration / 0 avg rating" placeholders on the live site — implement these as real animated count-up numbers triggered on scroll; pick sensible real numbers since the live site literally has them at 0, e.g. 40+ apps delivered, 2M+ monthly active users, 15+ years, 99.9% uptime, 60% AI/ERP integration, 4.8 avg rating — adjust as you like, just make them not literally "0").
- Page transitions between routes (simple fade/slide using Framer Motion's `AnimatePresence`).
- Accordion animation for FAQ sections (smooth height animation, not just CSS display toggle).

If at any point Framer Motion is overkill for a specific effect (e.g. a marquee/logo strip, or a pure CSS gradient animation), use plain CSS/Tailwind keyframes instead — don't force Framer Motion where a `@keyframes` utility is simpler and more performant.

---

## 3. Design Direction

- Keep the existing brand's dolphin/tech blue as the anchor color (dark navy/blue primary, with a bright accent — the live site uses blue tones throughout its icon set and imagery). You have creative license to modernize the palette (e.g. deep navy + electric blue/cyan accent + white, dark-mode-friendly) as long as it still reads as "GoDats blue," not a totally different brand color like DERPS.
- Typography: modern, confident sans-serif pairing (e.g. a geometric sans for headings, clean sans for body) — avoid looking like a generic template.
- Use lucide-react icons throughout (swap out the generic WordPress/Elementor icon images for clean lucide icons + your own illustrative graphics/gradients where the old site used stock PNGs).
- This should visually read as a **flagship/parent brand** — slightly more spacious, more "enterprise," than the DERPS product site.

---

## 4. Site Structure / Pages

Build these as routes:

- `/` — Home
- `/domain-search` — Domain
- `/web-hosting` — Web Hosting
- `/cloud-hosting` — Cloud Hosting
- `/reseller-hosting` — Reseller Hosting
- `/make-a-website` — Web Development
- `/web-design` — Web Design
- `/app-development` — App Development
- `/ecommerce-store-design` — E-commerce Store Design
- `/erp-consulting` — ERP Consulting
- `/ai-consulting` — AI Consulting
- `/email` — Email Services
- `/about` — About Us
- `/contact` — Contact
- `/privacy-policy` — Privacy Policy
- `/terms-and-conditions` — Terms of Use
- `/partner-program` — Partner Program
- `/careers` — Careers

For pages where I have full scraped copy below (Home, About, ERP Consulting, AI Consulting, App Development, Contact), use that real content. For the remaining pages (Web Hosting, Cloud Hosting, Reseller Hosting, Web Development, Web Design, E-commerce Store Design, Domain Search, Email, Privacy Policy, Terms, Partner Program, Careers) I don't have scraped copy yet — build them using the **same section pattern** as the ERP/AI Consulting and App Development pages (hero → value prop grid → why-choose-us → lead-gen form → FAQ where applicable → footer), with sensible placeholder copy written in GoDats' voice (direct, confident, benefits-led, short paragraphs) so the site is complete and consistent. Mark these clearly with a `{/* TODO: replace placeholder copy once scraped */}` comment so I know which ones to swap out later.

---

## 5. Global Layout (Header / Footer) — use on every page

**Header nav (mega-menu style dropdowns for Hosting and Services):**
- Home
- Domain → /domain-search
- Hosting (dropdown) → Web Hosting, Cloud Hosting, Reseller Hosting
- Services (dropdown) → Web Development, Web Design, App Development, E-commerce Store Design — plus a "Consulting" sub-group: ERP Consulting, AI Consulting, Email Services
- Support (dropdown) → Live Support, Contact Us (both → /contact)
- Explore (dropdown) → About Us, Blog (→ home for now, no blog content exists yet)
- Top bar: phone number "888-696-0939" + "Creating Digital Solutions Since 2010"
- Right side: "Sign in" → external link to https://derps.gotmsolutions.com/

**Footer (same on every page):**
- Tagline: "Complete solutions to launch and grow your business online."
- Social: LinkedIn (https://www.linkedin.com/company/dolphin-advanced-technology-services), Instagram, Facebook, WhatsApp (https://wa.me/8886960939)
- Column "Domain": Domain Search, Free Domain, Domain Transfer, Whois Lookup, Domain Extension (all → /domain-search)
- Column "Hosting": Web Hosting, WordPress Hosting (→ /web-hosting), Cloud Hosting, Reseller Hosting, Hosting for WooCommerce (→ /web-hosting)
- Column "Services": Web Development (→ /make-a-website), Web Design, App Development, E-commerce Store Design
- Column "Consulting": ERP Consulting, AI Consulting, Email Services
- Column "Explore": About Us, Contact Us, Partner Program, Careers
- Bottom bar: "© 2026 Dolphin Advanced Technology Services" + Privacy Policy + Terms of Use links

---

## 6. Page-by-Page Scraped Content

### HOME (`/`)

**Hero:**
> # Great talent, merging with great tech

Rotating/carousel banner slot beneath hero (old site used 4 image banners cycling — replace with an animated feature carousel or just drop this, your call).

**Quick service tiles (5 icons row):** App Development · AI Consulting · ERP Consulting · Cloud Hosting · Web Design

**POS callout section:**
> ## Meet the POS system that's upgrading retail as we speak
> - Native dual pricing. Faster checkouts. Omnichannel payments. Smart inventory. Self-service kiosks. And zero workarounds.
> - Dolphin POS runs retail like it's second nature. From plug-and-play hardware to super-efficient software, it's the POS that's ready for whatever you're selling.
> - Intuitive, customizable, and good-looking. Exactly what a POS should be.
> CTA: "Contact"

*(This is effectively a cross-promo for the Dolphin POS / merchant services product — since GoDats is the parent brand, treat this as a "one of our companies" showcase card, and feel free to visually format it as a distinct product-spotlight card rather than a generic section.)*

**"Get online fast" section:**
> ## Get online fast
> From dynamic apps to purposeful AI, businesses seek us out for their digital excellence needs. Whether you're looking for groundbreaking innovation or streamlining your ops with ERP, our team is ready to help you upgrade.
>
> - In-house engineers for on-demand custom development — no templates
> - Fully owned data centers that deliver the best-in-class hosting and security
> - Future-focused fintech development that pairs disruption with purpose
> - Expert consultations to ensure you only get the IT solutions you really need
> - 24/7 product and support expertise that keeps your business moving

Three-column mini pitch:
- **Brand your idea** — Team up with our designers to give your idea a logo design that stands out. Custom designs every time! Smart, stylish, and built to last.
- **Build your website** — Create websites that drive results. We do all the heavy lifting. SEO-rich sites, responsive designs, with ecommerce features.
- **Boost your growth** — Speed-dial your growth with personalized digital solutions. Organic, paid, and AI — meet your customers wherever they make decisions.

**"Everything you need to thrive online" — 4 service cards:**
1. **Domains** — Secure your brand's identity with fast, hassle-free domain registration. Professional setup, ongoing support, and full control in one place. → /domain-search
2. **Hosting & Security** — Reliable, high-speed hosting with 99.99% uptime, SSL, and built-in security — everything your business needs to stay live and protected. → /cloud-hosting
3. **App Development** — Launch sleek, scalable mobile or web apps built for performance. From concept to code, we handle it all. Fast, flawless, and friction-free. → /contact
4. **AI & ERP Consultation** — Align operations and cut costs with expert AI and ERP consulting: smarter systems, better decisions, and measurable impact all the way through. → /erp-consulting

**"The Dolphin Advanced Technology Services" — 5 feature blurbs:**
- **Reliable Domain + Hosting** — Get your business on the web with a matching domain + email, beefed up security, and blazing fast hosting. Keep your site alive and kicking no matter the traffic surges.
- **Digital Marketing Add-ons** — Show off your brand to the world with our digital marketing tools aligned to your goals. From paid ads to social engagement, and influencer marketing to PR, get everything you need.
- **Custom Branding Solutions** — Stand out with tailor-made logos and website designs created exclusively for you. Built in with modern SEO, a blogging suite, and ecommerce opportunities, your custom sites are ready for traction!
- **Dedicated Support, 24/7** — Looking for technical support? Customer services? Social media onboarding? Our team is here to help. We take care of the details so you can focus on the big picture.
- **One-Stop-Shop Services** — Experience the cohesion of a centralized service taking care of all your business needs — from the right domain to intentional marketing. All under one roof, designed for growth.

**"Bring your store online" (ecommerce cross-sell):**
> ## Bring your store online
> Don't let "tech setup" slow you down. Launch a branded e-shop in hours, automatically sync inventory, and start selling to anyone, anywhere — no coding required.
> - **Ready-to-go eShop templates:** Pick a design, add your logo, and you're live — no developer needed.
> - **Real-Time inventory sync:** Sell in-store and online without risking oversells — stock levels update automatically.
> - **Omnichannel checkout:** One cart for in-store and online sales — charge the same way, track in one dashboard.
> - **Catered to retail verticals:** Templates and features pre-configured for convenience stores, clothing shops, grocery/specialty food, pet stores, gift shops, and more.
> CTA: "Launch My eStore" → /ecommerce-store-design

**Testimonials (3, keep as placeholder-style "lorem" testimonials — swap names/roles are real, body copy is generic on the live site):**
- Jeniffer Smith, Chef — 4.5/5
- Pamela Duncan, Director — 4/5
- Steve Tailor, CFO — 4.5/5
(All three currently use the same lorem ipsum body text on the live site — write 3 short unique-sounding testimonial blurbs in the same spirit rather than reusing lorem ipsum.)

**"Fintech for the Future" section:**
> ## Fintech for the Future
> Here for the long-term impact? So are we. With ethical innovation, sustainable growth, and resilient infrastructure, we are building fintech solutions that will drive the future.
>
> From digital financial access to disruptive financial ecosystems, we are here to flip the script.
> CTA: "Join Us" → /contact

**FAQ (accordion):**
1. **What are website domains?** — A website domain is a unique name that identifies a website on the internet. It's the name in a URL that comes after the "www." part. For example, if you wanted to visit Google, you'd type in google.com, which is the company's domain name, in the browser. Domain names are simplified forms of IP addresses to make them easy to remember and recall for users. Domain names are almost always branded — each one unique to a business, person, or idea.
2. **What is the difference between domain and web hosting?** — A domain is your website's address — like yourbusiness.com — that people type to find you online. It's the name that represents your brand on the internet. Web hosting is where your website's files, images, and data are stored. It's the server that makes your site accessible to visitors. Think of it like a house (hosting) and its address (domain) — you need both to be online! With DTS at your side, you can have a dedicated domain plus a managed hosting service to keep your business running smoothly online.
3. **What is a web design service?** — A web design service creates visually appealing, user-friendly websites that reflect your business and help meet your business goals. It includes everything from great visuals — colors, typography, and imagery — to functional details like navigation and responsiveness to maximize a site's user experience, ensuring it fulfills all business needs. As a technology services solution, we specialize in custom web design and development, making it a part of our core service package to ensure all your digital presence needs are fulfilled under one roof.
4. **Why do I need a website for my business?** — Your website is your most essential presence online. While your social media pages work too, the website brings elevated levels of credibility to the game and inspires trust. A website helps businesses with a range of tasks and goals: Establish a business' presence online. Promote its products and services. Announce new offers, run campaigns, and make sales. Present their brand and compete with bigger businesses. Elevate their brand positioning and improve brand equity. Together with our expert designers, copywriters, and developers, we are here to deliver you a website that drives results.
5. **Why do I need a professional email?** — A professional email address that matches your domain is what customers expect to see from a legitimate business. Anything that ends generically with @gmail.com or @yahoo.com won't have the same ring to it that you@yourbusiness.com can carry. In addition to legitimacy, a professional email also: Builds Trust (customers take you more seriously with a branded email); Strengthens Branding (every email reinforces your business identity); Enhances Security (professional email services offer better spam protection and encryption); Improves Deliverability (less likely to end up in spam compared to free email providers); Looks More Professional (a custom email makes you stand out from the competition); Keeps Work & Personal Separate (stay organized with dedicated business communication). To help our clients put their best brand face forward, we offer professional and matching email accounts with all our services.

---

### ABOUT (`/about`)

**Hero:**
> # Simplifying Online Success
> ## Since 2009
> 15 years ago, we made digital easier. Today, we're still your stress-free solution. Whether you're looking for powerhouse hosting or high-performance web experiences, we've built GoDats as your trusted digital ally.
> CTA: "Learn More"

**The GoDats Story:**
> Every great invention starts with a simple goal: to make life easier. That's why we built GoDats.
>
> Early in 2009, we set out to take our business online. A straightforward task that turned out to be anything but. While we did find some of the best experts to work with, coordinating multiple teams, keeping track of tasks, and ensuring everything stayed on schedule quickly turned overwhelming.
>
> We knew there had to be an easier way to do it.
>
> So we built GoDats. A one-stop solution to all these worries. One dedicated team to take care of everything from start to end. One point person for each client. No multiple service providers, no worries, and no hassle. Just pure ease of letting experts handle the digital while you focus on the business.
>
> Today, 15 years later, we're still doing just that. From entrepreneurs to enterprises, making digital easy for all.

**What Drives Us:**
> Our mission is simple: make it as easy as possible for businesses to get online — and thrive. We believe (and know) that digital growth isn't complicated. You just need a team of absolute experts to handle it all, while you focus on the business. No need to juggle multiple vendors, take endless calls, or chase after deliverables.
>
> GoDats is designed to respond to all your digital access needs — domain, hosting, website, marketing, and payments — under one roof. So you can get online fast, grow far, and become the next big name they line up for.

**Some Facts About Us:**
- We are based in Chicago, Illinois
- Powered by a team of local and global experts
- Our core expertise is fintech (great news for you businesses!)
- Local businesses love us

**The GoDats Culture:**
> Great work is only possible with great people around. Brilliant minds who feel valued, happy, and driven to succeed together. That's why we have built a culture of creativity, collaboration, and continuous learning — minus the pointless meetings — that attracts this top talent.
>
> At GoDats, we build each other up, make better decisions, and create smarter solutions. Most of all, we've got each other's backs. Teamwork is just a value, it's how we win.
>
> Join us and let's build something great together.

**Closing banner + stats:**
> Digital shouldn't be complicated. We've spent 15 years making sure it isn't. Contact us today for stress-free online success.
- 2M+ Total Downloads
- 150+ Design Resources
- 4.9 Users Rating

(Team member card example on live site: Julia Keys, UI Designer — feel free to build a small team-grid section with 3–4 placeholder team member cards in this same style if useful, or drop this if you'd rather keep About focused on the story.)

---

### ERP CONSULTING (`/erp-consulting`)

**Hero:**
> # ERP & Technology Consulting Services
> Access your business insights from a single place of truth. Implement the right ERP system that simplifies processes, eliminates silos, and aligns your tech with long-term strategy. Talk to our experts on the right-fit ERP for your business.
> CTA: "Get a Quote"

**Section — "Custom ERP Solutions Rooted in Purpose":**
> There's a reason you are looking for ERP solutions. Is it to get rid of outdated legacy systems, integrate isolated apps, or update to recent technology? Whatever it is, your purpose drives our process.

4-step process cards:
1. **Comprehensive Discovery** — Initial onboarding starts with our team understanding your unique business challenges and goals, ensuring our solution is aligned with your vision.
2. **Seamless Integration** — We integrate your current applications and systems into one unified platform, ensuring that no data is left behind and that processes run smoothly.
3. **Tailored Design & Development** — Intuitive and easy-to-use ERP interfaces minimize training time, maximize user adoption, and align with how your team works best.
4. **End-to-End Support** — Post-implementation, we continually assess performance, fine-tune the system, and provide hands-on support to ensure it evolves with your business.

CTA: "Book Your Session"

**"Why Choose DATS?" section:**
> Digital transformations are big ticket items when you think about resources. Owning an ERP system can cost a mid-size company up to 5% of its annual revenue. With 50% of ERP implementations failing the first time around. Dolphin Advanced Technology Services brings certainty and strategy into all this chaos. With more than 15+ years of industry experience and expertise, we set the standard in digital excellence. Our experts are leading industry veterans with deep technological insight, sharp analysis, and an eye on what's next. Together, we create solutions that fit like a glove, are future-ready, and scale with ease. Reach out today, and let's upgrade your growth.

*(Consider pulling the "5% of annual revenue" and "50% of implementations fail" as animated stat callouts — they're strong, punchy numbers.)*

**Lead form section:**
> # Ready to rethink ERP?
> Get a successful ERP solution on your first try. Our experts are here to help.
Fields: Name*, Company Name*, Position/Title*, Email*, Your Inquiry (textarea)

**Closing line:** "Simplify your decision-making. Make the right ERP choice with guidance you can trust."

---

### AI CONSULTING (`/ai-consulting`)

**Hero:**
> # Artificial Intelligence Consultation
> Future-proof your business and its growth by leveraging insights hidden in your data. Our AI experts help you zero in on AI solutions that maximize efficiency, productivity, and business intelligence.
> CTA: "Book a Consultation"

**Section — "It requires more than just knowing about the technology":**
> Successful AI implementation demands strong data governance, a clear plan of how AI fits into your strategy, and a team that is prepared to adopt augmented intelligence. Take a look at how we make this transition easy:

4 feature blocks:
1. **Comprehensive AI Development Strategy** — We meet you where you are in your organization's AI maturity stage. Prioritizing your urgent needs, we jumpstart your AI development without sacrificing the big-picture vision. By always aligning our AI roadmap with your business goals, we ensure seamless integration and unlock smarter and faster decision-making.
2. **Robust Data Governance Framework** — Our expert AI professionals guide leaders through the fast-changing, complex world of AI navigation. Understanding and identifying potential risks associated with using AI, its ethical and governance considerations, and compliance policies, we help you establish data protocols that ensure your AI models are built on clean, compliant, and reliable data.
3. **AI-Readiness Training and Onboarding** — The AI revolution is well in progress. We bring your team on board by debunking myths, emphasizing AI's collaborative power, and showcasing the impact of human-AI synergy. The result? A team that's not just ready to adapt but equipped to lead.
4. **Ongoing Support and Optimization** — Our expert guidance stays with you long after the implementation. We guide you as you fine-tune your AI, optimize solutions, bring more people on board, and integrate disconnected processes. All the while ensuring your business evolves right and delivers sustained growth.

**Banner:** "Navigate AI complexity with expert analysis and guidance. It's just a call away." CTA: "Connect Now"

**"Our AI Consulting Services" — 2 cards:**
1. **New AI Product Development** — Instill certainty and guidance in all your new product development with the right AI assistance by your side. No matter your industry, vertical, or goal, we equip you with AI insight that minimizes project risks and brings down costs. Our expert AI consultants help you identify the scope of work, pick the right tools and technologies for the job, and lead you successfully through the ethics and compliance maze. Schedule your AI consulting with our experts and start strong from day one.
2. **Integrating AI into an Existing Product/Process** — When there's no need to create the wheel from scratch, we help you find the right AI tool and solution that can maximize the potential of your existing processes. Our AI consultant professionals guide you to how and where AI can best move your business forward. From selection to governance, assessment, and implementation, we lock step with your team to design systems that ready you for a successful AI journey.

CTA: "Book a Call"

**Lead form section:**
> # Get ready for expertly designed disruption — powered by AI.
> Tell us your AI needs. We'll handle the rest.
Fields: Name*, Company Name*, Business Email*, Phone*, Your Inquiry (textarea)

**Closing line:** "Eliminate guesswork from your AI implementation. Our experts are here to help."

---

### APP DEVELOPMENT (`/app-development`)

**Hero:**
> # Let's Build the App That Actually Solves the Problem
> You've got an idea. Or maybe a bottleneck in your process. Either way, you need more than just code. You need a team that can break down the problem, design something users want to use, and build it in a way that won't crack under pressure.
>
> That's what we do.
> CTA: "Book a free Consultation"

**"What we do" — 4 cards:**
1. **Product planning** — We start with the problem. We'll map it out, design the flows, test the assumptions, and figure out what's worth building now — and what can wait.
2. **Mobile apps & more** — iOS, Android, browser-based — whatever fits the user's context best. From MVPs to enterprise platforms, we build for performance and maintainability.
3. **System integration** — Got existing software? Custom backends? Third-party APIs? We'll connect your new app to the tools you already use.
4. **Support & evolution** — After launch, we stay in the loop. We track what's working, what's not, and help you scale or adjust based on real usage.

CTA: "build my app"

**"We're not fans of black-box dev" section:**
> We work in short, visible sprints with real check-ins and usable releases. No vanishing acts or months of radio silence.
>
> Every project includes:
> - High-fidelity prototypes (so you can test ideas early)
> - A lean roadmap (so the build doesn't drag out forever)
> - Clear documentation (so you're never guessing)
> - Ongoing support (because software is never really "done")
> - We're not here to mystify the process — we're here to ship something solid, together.

**Animated stats row (implement as real animated counters, see Section 2):**
- Apps delivered
- Monthly active users
- Years in app development
- Uptime on our private data centers
- Apps that include AI or ERP integration
- Avg. user ratings for client apps

**"Our work supports" list:**
Fintech tools and payment apps, Healthcare and patient-facing platforms, Real estate tech and agent dashboards, B2B platforms and operational tools, AI-backed service platforms, Custom ERP layers and internal apps.
> If your users are logging in to do something important — not just scroll — we're probably a good fit.

**"The tech we work with":**
- **Mobile:** Swift, Kotlin, Flutter, React Native
- **Web:** React, Vue, Angular, HTML5
- **Backend:** Node.js, Django, .NET Core, Laravel
- **Cloud:** AWS, DigitalOcean, Azure
- **Data:** Firebase, MongoDB, PostgreSQL
- **DevOps:** Docker, GitHub Actions, Jenkins
- **APIs:** REST, GraphQL, custom-built integrations
> Don't see your stack? Just ask — we've probably touched it.

**"How we help you post-launch" — 5 items:**
- **User analytics** — See what's working, where users drop off, and how your app is performing in the wild.
- **Feature rollouts** — Launch updates based on actual usage, not guesswork. We plan new releases that build on what users are already doing.
- **Monitoring & uptime** — We keep an eye on server health, security patches, load times, and crash reports — so you don't have to.
- **Performance optimization** — From speed tweaks to backend cleanup, we refine the app as it scales. Especially important when usage grows fast.
- **Support & training** — Need help onboarding staff, managing your admin panel, or training internal teams? We've got you.

**"Access our top-tier features" — feature chip list:**
Tailored Experiences · Real-time Data · Reliable Offline Mode · Push Notifications · AI/ERP Integrations · Social Media Integrations · Secure & Compliant · AR/VR Functionality · Embedded Chatbots · Multi-lingual UX

**FAQ:**
1. **How long does it take to build a custom app?** — Most apps take 10–16 weeks from kickoff to launch. MVPs can go live faster, especially if we keep the feature set focused. After a quick discovery session, we'll give you a timeline that reflects your scope.
2. **Can you work with my existing systems?** — Yes. We handle custom integrations, legacy platforms, and third-party tools. Whether you're running on Salesforce, a homegrown CRM, or something completely custom, we'll figure out the cleanest way to connect.
3. **What if I only have an idea and not a full spec?** — That's normal and very similar to how most clients come to app development. We'll help you validate the concept, map out user flows, and turn your idea into a working prototype. You don't need a complete blueprint, just a clearer goal.
4. **Do you build for both iOS and Android?** — We do. Depending on the use case, we'll go native or use cross-platform frameworks like Flutter or React Native. We'll help you decide on the best course of action based on performance needs, budget, and timeline.
5. **What happens after the app launches?** — We offer comprehensive post-launch support, bug fixes, version updates, and feature rollouts. You can keep us on retainer — or call us back when you're ready for the next phase.
6. **How much does custom app development cost?** — Pricing depends on features, platform(s), and complexity. We don't quote until we've had a real conversation, but we'll always be transparent, phased, and tied to actual value — not vague estimates.

---

### CONTACT (`/contact`)

**Hero:**
> # Let's talk business.
> Dolphin Advanced Technologies Services gives your business its sharpest edge: From custom-built apps to AI augmentation and purpose-built tools, we simplify complexity and drive momentum where it counts.

**"Talk to our team today to:"**
- Build a custom app that solves real business problems
- Automate the workflows that slow you down
- Integrate AI to optimize decision-making and efficiency
- Upgrade outdated systems without disrupting your operations
- Launch with the right domain, design, and digital stack

> Or just share what's not working — and we'll take care of the rest.

**Contact form fields:** Name, Contact Number, Email Address, Company Name, Message

**Map:** Embed Google Maps for "850 Lee Street, Elk Grove Village, IL 60007" (use an iframe embed or a static map component — replicate what a Google Maps embed would show, styled to match the site).

**"Learn more about our services" — 8-item grid:**
1. **Domain** — Secure the perfect domain for your business. We help you choose a memorable, SEO-friendly domain that aligns with your brand and sets the foundation for your online presence and success.
2. **Hosting** — Reliable, fast, and secure hosting that keeps your website performing at its best. Our fully managed services ensure optimal uptime, top-notch security, and seamless scalability as your business grows.
3. **App Development** — We build apps that get results. From simplifying processes to delivering smooth customer experiences, our custom apps solve real problems, help you scale, and keep your business ahead of the curve.
4. **Digital Marketing** — Use our digital marketing add-ons to make an impact online. We craft digital marketing strategies that drive real results — whether it's SEO, PPC, or social media. Increase visibility, attract leads, and turn them into loyal customers who keep coming back.
5. **Web Design** — Stand out online with web design that works. We create stunning, user-friendly websites that not only look great but also drive engagement and conversions. Your digital storefront will be as functional as it is beautiful.
6. **Branding** — Build a brand that speaks volumes. From logos to full-fledged identity systems, we create unforgettable brands that leave a lasting impression, connect with your audience, and elevate your business.
7. **ERP Consulting** — Get your operations firing on all cylinders. Our ERP consulting optimizes workflows, boosts efficiency, and gives you real-time insights so you can make smarter decisions, scale faster, and keep everything running smoothly.
8. **AI Consulting** — Supercharge your business with AI. We integrate powerful AI solutions that automate tasks, analyze data, and enhance decision-making, giving you the edge to outsmart the competition and lead in your industry.

**Contact block:**
- Sales: sales@godats.com
- Info: info@godats.com
- Phone: 888-696-0939

---

## 7. Technical Requirements Recap

- Vite + React + JSX (no TypeScript, matching prior builds)
- Tailwind CSS for all styling
- React Router v6 for routing across all pages listed in Section 4
- lucide-react for icons
- framer-motion for animation (see Section 2) — this is the key differentiator from the DERPS/DMS builds, push it further
- Fully responsive, mobile-first
- Forms can be static/non-functional for now (no backend needed yet) unless you want to scaffold a simple Express backend like the DMS build — your call, default to frontend-only with console-log submit handlers for now
- Reuse a shared `<Header />`, `<Footer />`, `<PageHero />`, `<FAQAccordion />`, `<StatCounter />`, `<ServiceCard />` component pattern across pages to keep things DRY

Build this out page by page, starting with the shared layout (Header/Footer/global animation wrappers), then Home, then the remaining pages in the order listed in Section 4.
