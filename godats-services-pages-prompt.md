# GoDats React Rebuild — Services Pages Update (Web Dev, Web Design, E-commerce, Email)

Follow-up to `godats-react-rebuild-prompt.md`. This covers the remaining 4 "Services" pages: `/make-a-website` (Web Development), `/web-design`, `/ecommerce-store-design`, `/email`. (App Development, ERP Consulting, and AI Consulting were already covered in the main prompt.)

Same stack: Vite + React JSX + Tailwind + React Router v6 + lucide-react + framer-motion. Reuse the `<PricingCard />` component built for the hosting pages update where these pages reference the same StartUp/GrowBig/GoGeek plans.

Remove the `{/* TODO: replace placeholder copy */}` comments on these four pages once done.

---

## 1. WEB DEVELOPMENT (`/make-a-website`)

**Important — this page is structurally different from the rest of the site.** On the live site it isn't a marketing page at all — it's a **multi-step onboarding questionnaire/wizard** ("Ready to get started? Complete this questionnaire to get your website ready!") that collects a client's project brief. Build it as a proper multi-step form component (progress bar showing "% Complete", animated step transitions with Framer Motion) rather than a static page. This is a great place to lean into the animation brief — animate the progress bar fill, step transitions (slide left/right), and field reveals.

**Intro:**
> ## Ready to get started?
> Complete this questionnaire to get your website ready!
> CTA: "Start Now"

**Step 1 — Business Identity:**
- Your Business Name* (helper text: "The name you want to show on your website and brand materials.")
- Tagline / One-Liner (optional)
- Website URL, if any (optional)
- Primary Industry / Sector* — dropdown: Tech / SaaS, Health & Fitness, Education, Retail / E-commerce, Food & Beverage, Finance / Legal, Events / Lifestyle, Other
- Business Type* — dropdown: Service-based Business, Product-based Business, SaaS / Startup, E-commerce Store, Portfolio / Freelancer, Non-profit / Community, Other

**Step 2 — Content & Assets:**
- Do you have a logo for the website? → "No, I'd like you to design one" / "Yes, uploading now" (file upload)
- Do you already have content for your website? → "No, I'd like help writing it" / "Yes, uploading now"
- Do you have images to use on your website? → "Generate/source them for me" / "Yes, uploading now"

**Step 3 — Branding Preference:**
- Choose Colors (visual swatch picker) — options: Minimal Luxe, Lively & Inviting, Earthy & Serene, Sleek & Futuristic, Texture & Contrast, Glamorous & Audacious
- Choose Font Style — 5 preview options each showing "The quick brown fox jumps over the lazy dog" in a different typeface (last one in caps/display style)

**Step 4 — Functionality:**
- What's the primary purpose of your website?* — Informational / Presence, Portfolio / Showcase, Lead Generation, Online Selling (Products/Services), Booking or Appointments, Community or Membership, Other
- What features would you like to include? (optional, multi-select) — Contact Form, Newsletter Signup, Appointment Booking, Blog / News, E-commerce / Shop, Testimonials, Portfolio / Gallery, Chat Support, Payment Integration, Multi-language Support, Other
- Any specific tools or services you'd like integrated? (optional, free text)

**Step 5 — Technical Setup:**
- Ideal timeline: ASAP (1-2 weeks) / 2-4 weeks / 1-2 months / No rush
- Do you already have a domain? (optional) — Yes / No, I need help with that
- Do you need email addresses matching your domain? (optional) — Yes, please set them up / No, I already have them
- Contact info: Name (optional), Contact Number*, Email Address (optional)
- Terms & Conditions checkbox
- Anything else? (optional, free text)

**Fine print shown near submit:**
> - We require a 50% upfront payment to begin website development. The remaining balance is due before launch.
> - We offer domain, hosting, and branded email setup too. If you already have a domain, you can transfer it to our hosting. See our plans for web hosting and cloud hosting.
> - Need merchant services? We also offer credit card payment processing and ACH services. Talk to the sales team to add these to your plan.

Submit button at the end.

*(Implementation note: this can be entirely client-side state for now — no backend required, matching the rest of the site. Log the final payload to console on submit, or wire it to the same contact-form handler pattern used elsewhere.)*

---

## 2. WEB DESIGN (`/web-design`)

**Hero:**
> # No Cookie-Cutter Websites.
> You've built your idea from scratch. Why settle now with a copy-paste website? Work with our top web designers to create a tailor-made website shaped to fit your goals. From personal portfolios to brand-building powerhouses, get a website that's designed to deliver.
> CTA: "Get Started"

**"How It Works" — 4 steps:**
1. **Getting Started** — Let's dive into your business goals and map out a website design plan that works for you.
2. **Design in Progress** — Our team gets to work, designing a website that's both stunning and strategic.
3. **Review & Refine** — We present the finished website — take a look, share your thoughts, and we'll perfect every detail.
4. **Website is Live** — But live doesn't mean final — update it yourself or let us keep things running smoothly.

*(Good candidate for a horizontal animated step-tracker/timeline component.)*

**Pricing section heading:** "Find Your Perfect Plan — Smart website design means great features, a fair price, and future-ready flexibility."

Reuse the exact same 3-tier StartUp / GrowBig / GoGeek pricing structure from the Web Hosting page (same prices, specs, and feature checklists — see `godats-hosting-pages-prompt.md` Section 1), just with these plan taglines instead:
- StartUp: "For personal projects and tiny sites"
- GrowBig: "Perfect for your growing business"
- GoGeek: "More power for bigger sites"

**"Everything Your Business Needs" — 3 feature groups:**
1. **Essential Website Features** — Your website is designed for performance, security, and ease of use. Every site includes: Mobile-Responsive Design (looks great on all devices), Fast & Optimized Performance (speed matters for visitors and search engines), Security Features (SSL certificates and strong protection), SEO-Ready Structure (built for better search rankings), CMS for Easy Updates (make changes anytime, no coding required), Lead Capture & Forms (convert visitors into customers), Social Media Integration (connect with your audience everywhere).
2. **Hosting & Domain Services** — A reliable website starts with solid hosting and a custom domain: Domain Registration & Management (find, secure, and renew your domain), Fast & Secure Hosting (dependable uptime and strong security), Automatic Backups (your data is always protected), One Dashboard for Full Control (manage everything from a single place).
3. **Future-Ready Scalability** — Your website grows with your business: Add New Features Anytime (blogs, booking systems, and more), Expand to Ecommerce (ready to sell? easily add a store), Scale Hosting as You Grow (more traffic? no problem), Ongoing Support & Updates (our pros keep your site running smoothly).

**"A Smarter Website for a Stronger Business" — 9-item feature grid:**
1. **One-Stop Solution** — Forget the hassle of juggling multiple providers. We handle design, hosting, domains, and more — in one seamless solution.
2. **Fully-Managed Website** — Your website should support business — not demand extra work. We take care of setup, updates, and ongoing support so you don't have to.
3. **On-Brand Design & Copy** — From compelling visuals to engaging copywriting, we create tailor-made websites that reflect your brand and vision.
4. **Pricing That Fits You** — Our affordable pricing makes great design accessible to all. Our custom solutions fit your budget, whether you're launching or expanding.
5. **Designed to Convert** — With SEO optimization, conversion-focused design, and add-on digital marketing, we help you turn visitors into customers.
6. **Secure and Reliable** — We build your sites with secure and reliable hosting, SSL encryption, and automatic backups so it is always up and running safely.
7. **Intuitive CMS** — We keep your website a breeze to manage. Our intuitive CMS makes edits simple and we're here if you need ongoing support.
8. **Scales With Your Growth** — Whether you need a simple site today or a full ecommerce solution tomorrow, our scalable options evolve with your needs.
9. **A Smooth User Experience** — Speed, usability, and performance matter. Join us to create websites that load fast, are optimized for mobile, and provide butter-smooth navigation for a fantastic UX.

CTA: "Build Your Website"

**Closing banner:** "Grow your business with the right website by your side. Let our pros do the heavy-lifting." CTA: "Start Now"

**FAQ:**
1. **What are website design services?** — Website design services are professional services offered by web designers (or agencies) to create custom sites for individuals and businesses. While a single designer may only be able to create the site and its visual structure, working with a company like ours gives you the full-service experience — everything from the site's overall look to its distinct design features, SEO capabilities, security, scalability, and more. Using our web design services, you get access to everything you need to bring your idea online: domain registration, hosting, and digital marketing are all add-ons you can build into your package. Everything is taken care of under one roof, so you're free to focus more fully on the business.
2. **How much does it cost to pay someone to design a website?** — The cost varies from one designer or agency to the next, and can increase with more pages or more functionality. A simple 3-5 page website costs way less than a fully-formed ecommerce store. Due to these considerations, we offer tiered pricing for website design needs. Pick a plan that matches your business needs, goals, and plans — our support team is always at hand to help you choose.
3. **What services do you offer as a web designer?** — Our core web design services include: a 5 or 7 page website, mobile-friendly designs, web graphics and content taken care of, lead capture and forms integrated, built-in security features, and more. You can always supplement these with add-ons including domain and hosting, payment processing, and digital marketing.
4. **Are SEO tools included in your web design services?** — Basic SEO comes built-in with our web design services, but we highly recommend our full-scale digital media treatment to really get your business off the ground. Basic SEO maintains a respectable online presence, but for a highly visible, engaging experience that turns visitors into customers, you want stronger stuff — our digital media services include social media integration, onboarding, maintenance, online ads, influencer marketing, and much more.
5. **Can I connect my social media and website?** — Yes. To ensure a cohesive online presence, we design your website so it fully supports your social media presence too. You can connect all the major platforms — Facebook, Instagram, LinkedIn, and YouTube — making it easier for visitors to engage with you across multiple channels.

---

## 3. E-COMMERCE STORE DESIGN (`/ecommerce-store-design`)

**Hero:**
> # Sell More Online
> ## Profit from an ecommerce store that's designed to make you money.
> - Fully responsive, high-impact designs
> - Packed with the power of WooCommerce
> - Engineered for easy shopping
>
> CTA: "Build My Store"

**Pricing section heading:** "Choose Your Plan"

Reuse the exact same 3-tier StartUp / GrowBig / GoGeek pricing (identical specs/features to Web Hosting and Web Design pages), with these taglines:
- StartUp: "To Kick-start Your Business Online"
- GrowBig: "Perfect to Grow Your Business"
- GoGeek: "More Power for Your Online Store"

**"Optimized for More Sales, Every Step of the Way" — 5 items:**
1. **Ultra-Fast Load Times** — Slow pages cost you money. We design high-performing ecommerce websites that load fast, are always up, and handle traffic spikes like a breeze.
2. **Mobile-Optimized Experience** — Built mobile-first so shoppers get a smooth, fast experience on any device.
3. **Built-in SEO and Marketing Tools** — Your store comes pre-packaged with all the goodness of modern SEO. Enjoy stronger online visibility, better rankings, and a clear way forward — right on day one.
4. **Smart Checkout Options** — Make it easy for your customers to pay you. We empower your online store with smart checkout designs and strong security at the root.
5. **AI-Powered Personalization** — Integrate with the best AI plug-ins for a hyper personalized shopping experience, from dynamic pricing to product recommendations.

*(Note: on the live site, items 1 and 2's body copy are identical — both say "Slow pages cost you money..." which is a copy-paste error. Write distinct copy for Mobile-Optimized Experience rather than reproducing the duplicate — used the corrected version above.)*

**"Effortless Management, Even as You Scale" — 5 items:**
1. **Intuitive Dashboard and Controls** — Easily manage products, orders, and settings from a clean, user-friendly dashboard. No tech headaches, no complex controls.
2. **Automated Inventory & Order Syncing** — Sell with efficiency and total control. Your inventory updates instantly, preventing stockouts and overselling.
3. **Multi-Channel Selling** — Sell everywhere your customers shop — social media, your website, marketplaces, and beyond. One store, endless opportunities.
4. **Flexible Store Customization** — Make your store truly yours. Customize layout, features, and functionality — with no coding needed.
5. **Real-Time Analytics & Insights** — Make informed decisions about sales, discounts, inventory, and more. Get live data on sales, spot trends, and customer behavior for smarter growth and scaling.

*(This same 5-item list repeats twice on the live site under a second heading "Faster Websites, More Sales" — that's a duplicate content bug. Use it once, in this section.)*

**"Built to Last — Secure, Stable, & Future-Ready" — 5 items:**
1. **Enterprise-Grade Security** — Our ecommerce web design services are rooted in strong security — encryption, firewalls, fraud protection, and more — to keep your business and customers safe at the store.
2. **99.99% Uptime & Reliable Hosting** — Handle traffic spikes like a pro with an ecommerce store that never slows down. Benefit from robust hosting plans that keep your store up and running always.
3. **Automatic Backups & Recovery** — No outdated software, no downtime. We keep your store running fresh with automatic software updates, fixes, and behind-the-scenes tech.
4. **Built on the Latest Tech** — Our ecommerce web design services keep your store fitted with the latest tech so you're always miles ahead of the competition.
5. **Scalable Infrastructure** — More customers? More products? Zero worries. Your responsive ecommerce store is built with cloud-based hosting, load balancing, and optimized caching to ensure sweat-free growth.

**"Here's How We Build Better Ecommerce" — 3 items:**
1. **Thoughtful Designs that Deliver You the Right Store** — We sit with you to understand your business, audience, and goals. Then design you a responsive ecommerce store that's built with purpose — driving growth, success, and results.
2. **Digital Marketing Add-Ons That Drive More Sales** — A great store is just the start. Get expert digital marketing support to attract, convert, and retain customers. Our add-on services include SEO, PPC, email marketing, and more.
3. **We Stick With You Beyond the Setup** — Our team doesn't disappear after launch. With ongoing training and expert guidance, we ensure you feel confident managing your store. From inventory to marketing and payments to performance, our support evolves with you.

**Closing banner:** "Ready to get started? Our ecommerce web design experts are at hand. Let's talk business." CTA: "Start Now"

**FAQ:**
1. **What is an ecommerce website?** — An ecommerce website is a purpose-built platform where businesses can sell products or services online. It allows customers to browse product galleries, add items to a cart, and complete purchases using secure payment methods — ranging from a small store selling two or three products to a global marketplace like Amazon or eBay. Ecommerce websites vary greatly depending on industry, market, business goals, audience, and product category, so it's important to work with experienced ecommerce designers. Our team offers decades of ecommerce design expertise to build an online store tailored to your goals, with expert support and affordable pricing along the way.
2. **Why does your business need responsive ecommerce web design?** — Over 70% of all online sales happen on mobile devices. A responsive ecommerce web design is created with a mobile-first approach, ensuring your online store loads and performs perfectly across smartphones, tablets, and more. A fully responsive design offers beautiful online experiences by displaying your store correctly without technical constraints — shoppers see your products properly, enjoy a smooth experience, and benefit from a secure checkout that loads and performs quickly. Mobile responsiveness is an integral part of our design services, so your store is always ready to make sales.
3. **What's the difference between an ecommerce website and a traditional website?** — An ecommerce website is designed to accept and facilitate transactions — customers can directly make purchases. A traditional website is built to be more informational than transactional (think a fashion magazine site vs. a clothing store site). Some business models mix the two (like a blog selling an online course), but for the most part these remain distinct. If you need a website built to facilitate online sales, you're looking for ecommerce web design — built to handle complex operations, better online security, and features designed for business success and growth.
4. **Can I use my own domain name with your ecommerce web design services?** — Yes. Whether you bring a pre-owned domain or want us to create one from scratch, we can handle it. If you already own a domain and only need our ecommerce design services, talk to our support team and we'll devise a custom plan. We also offer high-performing hosting plans you can pair with your ecommerce store design package. To connect your domain to your new store, you'll just go to your store's admin panel and initiate the request.
5. **What kind of tech knowledge do I need to run an online store?** — Almost none. When you collaborate with our ecommerce web design experts, all the technical aspects are taken care of — you provide the vision, ideas, and goals, while we manage the backend: layout, functionality, plugins, development, design, and maintenance. That said, our team offers ongoing training every step of the way so you're informed and able to manage things expertly as you grow more comfortable.

---

## 4. EMAIL (`/email`)

**Hero:**
> ## Email & Office
> ## Build trust with domain-based emails and do more every day
> Make your business communications more powerful with emails that match your domain. Set up your business email with Microsoft 365 and let the usability and business intelligence of Microsoft fuel your growth.
>
> - Access Outlook's powerful features with your business email.
> - Sync effortlessly across all your devices.
> - Enjoy 50GB+ storage, security, and advanced spam protection.
> - Collaborate seamlessly with Teams, OneDrive, and Office apps.
> - Stay productive with AI-powered tools and business insights.
>
> CTA: "View Plans" → `#pricing`

**⚠️ Content bug to fix, don't reproduce:** On the live site, this page's pricing table is copy-pasted straight from the Cloud Hosting page — it shows "Jump Start / Business / Super Power" plans with CPU cores, memory, SSD space, and data transfer, none of which make sense for an email/Office plan. Replace with **email-appropriate tiers** instead. Suggested structure (write it in GoDats' voice, same card style as the other pricing pages):

| | Starter | Business | Business Premium |
|---|---|---|---|
| Tagline | Solo & small teams | Growing teams | Full Microsoft 365 suite |
| Price | $6/user/mo | $12.50/user/mo | $22/user/mo |
| Mailbox storage | 50GB | 50GB | 100GB |
| Custom domain email | ✓ | ✓ | ✓ |
| Outlook (web + desktop) | Web only | Web + Desktop app | Web + Desktop app |
| Teams, OneDrive, Office apps | Teams + OneDrive | Full suite | Full suite + advanced admin |
| Support | Standard | Priority | Priority + onboarding |

*(These are placeholder numbers in GoDats' style, adjust freely — the point is just that they should be per-user email/office pricing, not server specs.)*

**"More than business email" — 3 items:**
1. **Communicate** — Leverage the power of Teams to stay in touch and accomplish more together.
2. **Collaborate** — Facilitate easy collaboration from anywhere with Word, Excel, and more in tow.
3. **Store** — Keep all your important files at a central location and access anywhere, anytime.

**"PLUS — All plans include" section:** On the live site this section literally still has placeholder "This is the heading / Lorem ipsum dolor sit amet, consectetur adipiscing elit." text (never finished). Replace with 3 real short benefit blurbs in GoDats' voice, e.g. covering things like: advanced spam/phishing protection, mobile device sync, and admin/security controls — write these properly rather than reproducing the lorem ipsum.

**"DATS Support" section:**
> ## 24/7 Expert Help
> Setting up a business can often be overwhelming. Our support team is here to make sure it isn't like that for you. Get in touch and let's get it done.
> CTA: "Get Help" → `/contact`

**FAQ:** None on the live version of this page — feel free to add a short 3-4 question FAQ in the same style as the other service pages if you want visual consistency (e.g. "Can I keep my current email while switching?", "Do I need a domain first?", "How many mailboxes can I add?"), or leave it out — your call.

---

## Build notes

- `/make-a-website` is the outlier — build it as an interactive wizard, not a static marketing page. This is your best animation showcase page (progress bar, step transitions).
- `/web-design` and `/ecommerce-store-design` both reuse the exact StartUp/GrowBig/GoGeek pricing tiers already built for `/web-hosting` — reuse the `<PricingCard />` component with just different taglines, don't rebuild the pricing logic.
- `/email` needs a **new, sensible pricing table** — do not reuse the Cloud Hosting server-spec cards, that's a live-site bug.
- `/email`'s "PLUS" section needs real copy written — the live site never finished it (literal Lorem Ipsum).
- `/ecommerce-store-design`'s "Mobile-Optimized Experience" blurb and its duplicated "Effortless Management" section (repeated verbatim as "Faster Websites, More Sales") are both live-site copy-paste bugs — already corrected/de-duplicated above, so just build it as written in this doc.
