# GoDats React Rebuild — Hosting Pages Update

This is a **follow-up** to the main `godats-react-rebuild-prompt.md` build. Use it to replace the placeholder copy on `/web-hosting`, `/cloud-hosting`, and `/reseller-hosting` with the real scraped content below. Same stack (Vite + React JSX + Tailwind + React Router v6 + lucide-react + framer-motion), same component patterns (shared `PageHero`, `FAQAccordion`, `StatCounter`, `ServiceCard`, pricing card component) as the rest of the site — build a reusable `<PricingCard />` component now since all three of these pages are pricing-table pages.

Remove the `{/* TODO: replace placeholder copy */}` comments on these three pages once done.

---

## Shared pattern for these 3 pages

All three follow: **Hero (bullet list of benefits) → Pricing tier cards → Feature/benefit sections → FAQ accordion**. Build a shared `<PricingCard />` component that takes plan name, tagline/badge, price, billing note, and a spec list — it'll be reused across all three pages (and the cards differ enough in fields that the component should accept flexible spec rows, not a fixed schema).

Animate pricing cards with a `whileInView` stagger reveal and a `whileHover` lift, and make the "most popular" tier (middle plan on Web Hosting, GoGeek on Reseller) visually emphasized (border glow, scale-up, or a "Most Popular" ribbon).

---

## 1. WEB HOSTING (`/web-hosting`)

**Hero:**
> # Connect your website to the internet with our perfect hosting plans
> Experience uninterrupted connections, blazing-fast speed, and custom hosting plans that answer your true needs.
>
> - Lightning-quick load times with optimized hosting servers
> - Strong security with SSL, DDoS protection, & daily backups
> - Reliable hosting servers that guarantee 99.9% uptime
> - Shared, VPS, and dedicated servers tailored to your needs
> - Effortless WordPress and CMS hosting and built-in ecommerce support
>
> CTA: "Find Your Plan" → scrolls to pricing (`#pricing`)

**Pricing section heading:** "Fast, Secure, and Built for You — Choose your perfect plan"

**3 pricing tiers:**

| | StartUp | GrowBig | GoGeek |
|---|---|---|---|
| Tagline | Suitable for Portfolio Sites | Perfect to Grow Online | For High-performing Websites |
| Badge | Save 77% | Save 77% | Save 76% |
| Price | $3.99/mo* | $6.69/mo* | $10.69/mo* |
| Was | $17.99/mo | $29.99/mo | $44.99/mo |
| Websites | 1 Website | Unlimited Websites | Unlimited Websites |
| Web Space | 10 GB | 20 GB | 40 GB |
| Monthly Visits | ~10,000 | ~100,000 | ~400,000 |
| Traffic | Unmetered | Unmetered | Unmetered |

**Essential features (all 3 tiers):** Free SSL, Free Email, Free Email Migrator, Unlimited Databases, Free CDN, Daily Backup, Enhanced Security, Out-of-The-Box Caching, 100% Renewable Energy Match, 30-Days Money-Back, Add Collaborators

**Managed WordPress features (all 3 tiers):** Free WP Auto-Install, Free WP Auto-Migrator, WordPress Autoupdates, Speed Optimizer WP Plugin, WooCommerce Enabled, WP-CLI and SSH

**Exclusive features (GrowBig + GoGeek only):** On-demand Backup Copies, 30% faster PHP, Staging (GrowBig) / Staging + Git (GoGeek)

**GoGeek-only extras:** White-Label Clients, Free Private DNS, Highest Tier of Resources, Priority Support

**Pricing disclaimer (small print, footer of pricing section):** "All advertised prices above apply to prepaid purchases of a 12-month hosting plan. Special prices are applicable for the first invoice. For all subsequent renewals regular prices apply."

**"Web hosting that makes your life a whole lot easier" — 4 feature blocks:**
1. **Ultra–fast, every time** — Delight your customers with your site's blazing fast speed. Supercharge your sales funnel with page load times that never falter. From arrival to exit, we promise high-speed performance, no matter when or where.
2. **Bottomless Bandwidth** — We deliver resources on-demand as your business grows from a passion project to a thriving success. Get more CPU, unlimited storage, and scalable bandwidth that supports your wins.
3. **Strong & Secure Connections** — Grow with confidence as our top-tier security infrastructure keeps a close watch on your site. Enjoy seamless data safety, free SSL encryption, DDoS protection, and advanced firewalls that guard your site 24/7.
4. **Support That Never Sleeps** — Think of us as your on-demand tech team that's always ready to jump in with solutions, support, and guidance. From simple queries to complex troubleshooting, we've got your back so you can focus on the business.

**"Full-Bodied Business Solutions Ready to Take You Live" — 4 items:**
1. **Domain Registration** — We begin the process of bringing you online. This starts with a domain name selection that reflects who you are as a brand and your vision for the future. Our domain registration process is hassle-free, and you have thousands of unique domain extensions to choose from. We also offer the most spotless WHOIS privacy protection, automatic renewals, and DNS management tools to keep your domain secure and under your control always.
2. **Reliable Hosting** — Keep running at peak performance with our powerful hosting plans. With 99.9% uptime, SSD storage for faster load times, and automatic backups, we deliver you a website that never tires. Regardless of traffic spikes or growth, our hosting is designed to be lithe and responsive. Whether you are launching a personal site or a high-performing one, our powerful and secure hosting services provide you with the perfect foundation to scale, grow, and succeed nonstop.
3. **Web Building & Design** — A good looking website is your most valuable online currency. Striking visuals, original photography, engaging imagery, and well-formatted content brings the audience in and keeps them hooked. Benefit from our custom web design services where we create your sites from scratch. Fully-personalized to your goals and needs, laden with the latest SEO goods, and responsive to the max, our web design services give you a professional digital storefront that's designed for success.
4. **Digital Marketing** — Drive traffic, boost engagement, and delight your fans with digital marketing intelligence that works fast. From SEO to PPC and social media to email campaigns, our digital marketing experts provide you with strategies that bring in impact and influence. Whether you want to improve brand authority or increase engagement, we deliver you data-driven marketing that brings measurable results.

**"Choose your hosting" — 6 selectable hosting-type cards (link/anchor to pricing or `/contact`, whichever makes more sense — your call):**
1. **Shared Hosting** — An affordable hosting situation where your site is hosted on a server with several other neighbors. You all share resources but also spend less. Perfect for personal websites or small businesses just getting started online!
2. **WordPress Hosting** — Hosting that's specifically designed to run WordPress websites smoothly and efficiently. If WP is your jam, this is the hosting plan that suits you best.
3. **Virtual Private Server (VPS)** — Get more control with your own private space on the server. VPS offers the best operational and performance balance between shared hosting and dedicated servers.
4. **Dedicated Servers** — For those seeking maximum control, security, and performance. Dedicated servers are the most powerful options where you have an entire server to yourself.
5. **Cloud Hosting** — Ensure high uptimes and easy scalability with flexible cloud hosting solutions. Give your website access to multiple servers for speed times and efficiency that never stops. (link → `/cloud-hosting`)
6. **Reseller Hosting** — Make your mark with our white-labeled hosting plans that offer top-tier hosting technology, unmetered bandwidth, unmatched security, and a friendly customer service dedicated to your success. (link → `/reseller-hosting`)

**Closing banner:** "Ready to go live? Power your website with a hosting plan that's made for you." CTA: "Buy your plan" → `#pricing`

**FAQ:**
1. **What is a web hosting service?** — A web hosting service is a platform that provides individuals and businesses space on specially designed computers that store their website data. A hosting server is essentially a computer that "hosts" your website, ensures it remains accessible online, and runs smoothly at all times. Without hosting, your site remains invisible to the world. While you do need a hosting provider to make your website go "live" online, choosing the right one is the real task. You want to pay attention not only to affordable hosting pricing but also technology and support that ensures your site suffers no downtime (affecting traffic and causing losses) and you have expert technical help when you need it the most. As a full-service website solutions provider, we offer you web hosting that's fully managed, priced to your needs, with the latest technology to boot, and primed to your success.
2. **What is the difference between hosting and website services?** — Hosting refers to a very specific service where you buy server space from a hosting provider to put your website online. Website services, on the other hand, are more varied and broader. They encompass a whole suite of related products or services that you need to successfully run a business online. These include domain search, domain registrations, hosting, website development and design, maintenance, and more. As a full-service business solutions provider with a fintech core, we go a step beyond. We empower your online business with the safest, most secure, and fully agile payment processing solutions that allow you to manage your money smartly. We also offer digital marketing solutions so you can promote your business with fully managed services from day one.
3. **What are the benefits of shared web hosting?** — Shared web hosting is the best hosting solution for those just starting online. Here's why: **Affordable** — since you're sharing space and resources with other web owners, you all split the bill when it comes to expenses, so costs remain low without any sacrifices to quality. **Stress-free management** — this is a managed hosting service where we take full responsibility for managing the server, including all technical tasks, setups, security updates, performance monitoring, and tech support. **Scalable with built-in features** — shared hosting is perfect for sites that receive low to moderate traffic and thus don't require a ton of server resources; we also offer pre-installed features such as domain search, web design, and digital marketing to offer you a one-stop-shop experience. Give your new business the best shot at success with shared web hosting that lets you do more online with less.
4. **Is technical knowledge required to use shared web hosting?** — No. Since shared web hosting is a managed service, you don't require any technical experience or expertise to maintain your website online. We take care of everything from setup to support to ensure your site remains up and awake at all times.

---

## 2. CLOUD HOSTING (`/cloud-hosting`)

**Hero:**
> # Cloud Hosting Solutions
>
> - Scalable: Instantly adjust resources to meet demand without downtime.
> - Reliable: 99.9% uptime backed by multiple data centers, and failover solutions.
> - Effortless to manage: Intuitive control panel, one-click installs, and automated updates
> - Blazing-fast: SSD storage, optimized servers, and global CDNs
> - Highly secure: Enterprise-grade encryption, DDoS protection, and automated backups.
>
> Whether you're running an ecommerce store, a SaaS platform, or a high-traffic blog, our cloud hosting services ensure seamless performance with no downtime.
>
> CTA: "Find Your Plan" → `#pricing`

**Pricing section heading:** "Cloud Hosting Plans for Every Need — Find your perfect one here."

**4 pricing tiers (flat specs, no "essential feature" checklist like Web Hosting — just resource specs):**

| | Jump Start | Business | Business Plus | Super Power |
|---|---|---|---|---|
| Tagline | Easy start on the cloud | Optimal cloud experience | Advanced performance | Premium server power |
| Price | $100.00/mo | $200.00/mo | $300.00/mo | $400.00/mo |
| CPU Cores | 4 | 8 | 12 | 16 |
| Memory | 8GB | 12GB | 16GB | 20GB |
| SSD Space | 40GB | 80GB | 120GB | 160GB |
| Data Transfer | 5TB | 5TB | 5TB | 5TB |

*(all excl. VAT)*

**"Blazing-fast Performance. No Compromise." — 4 feature blocks:**
1. **Ultra-fast SSD Storage** — Traditional hard drives can slow you down. Our cloud servers run on high-performance SSDs, delivering brisk read/write speeds for quicker data access and lower load times.
2. **Optimized Server Architecture** — Every millisecond counts when you're running an online venture. Delight your customers with breakneck speeds with our finely-tuned servers, leading-edge hardware, and software optimizations to reduce latency and accelerate page load times.
3. **Global CDNs at Every Step** — Your website loads instantly no matter where your visitors are. Our integrated content delivery network caches content across multiple international locations, reducing delays and improving user experience.
4. **Advanced Caching & Load Balancing** — We keep your site running smoothly even under heavy traffic. Experience advanced caching mechanisms and load-balancing technology that distribute requests efficiently, preventing slowdowns and bottlenecks.

**"Effortless Cloud Management at a Click" — 3 items:**
1. **One dashboard for everything** — Tired of juggling multiple accounts? Our intuitive control panel lets you manage websites, domains, databases, and security settings — all from a single, easy-to-use dashboard.
2. **Instant software and plugin updates** — Say goodbye to manual updates forever. Our hosting platform keeps your CMS, plugins, and software automatically up to date, reducing security risks and compatibility issues.
3. **Automated recovery and updates** — Never lose valuable data again. Our cloud hosting includes automated backups and instant recovery options, so you can recover your site in a click, anytime disaster strikes.

**"Seamless Scalability on Demand" — 4 short stat-style blurbs (good candidates for icon + short text cards):**
1. **Instant Resource Scaling** — Expand instantly. No limits or interruptions.
2. **Pay For What You Use** — No wasted resources.
3. **Reliable Load Balancing** — Even traffic with maximum uptime.
4. **Future-proof Tech** — Built to grow with you.

**"Rock-Solid Security and Compliance" — 6 items:**
1. **End-to-end encryption** — Your data stays private with advanced encryption protocols that protect information in transit and at rest.
2. **Firewall and threat protection** — Our multi-layered firewall system and proactive threat monitoring keep hackers, malware, and unauthorized access at bay.
3. **DDoS mitigation** — Stay online even during cyber attacks. Our real-time DDoS mitigation technology absorbs and neutralizes threats before they reach your site.
4. **Automated backups and recovery** — Never worry about losing data again. Our system automatically backups your site, allowing for quick recovery in case of issues.
5. **Compliance and regulatory standards** — We adhere to industry-leading security and compliance frameworks, ensuring your hosting meets the latest critical standards.
6. **24/7 expert tech support** — Benefit from a support team that wants your success. Our dedicated security constantly scans for vulnerabilities for round-the-clock protection for your data and infrastructure.

**"Talk to an expert" section:**
> Benefit from tech support experts intent on your success. Get instant responses and proactive solutions that keep pace with your momentum.
> - Certified cloud specialists providing reliable guidance
> - Instant responses via live chat, email, and phone
> - Proactive support that fixes problems before they impact you
> - Guided setups, smooth migrations, and hassle-free management
>
> CTA: "Start hosting on the cloud" → `#pricing`

**Closing banner:** "Ready to experience the cloud? With unmatched speed, security, and agility, you are finally free to go big." CTA: "Buy cloud hosting" → `/contact` (the live site actually links this button back to itself, which is a dead loop — route it to `/contact` or `#pricing` instead in the new build)

**FAQ:**
1. **What is cloud hosting?** — Cloud hosting is a type of managed hosting service that distributes resources across multiple servers instead of relying on a single machine. This way your online platform gets what it needs from several locations, enhancing its speed, reliability, and scalability. It also eliminates single points of failure, keeping your site running and performing at high velocity regardless of server interruptions. Cloud hosting solutions are highly responsive services for websites, apps, and platforms that demand extreme availability and flexibility.
2. **Who should get cloud hosting services?** — Cloud hosting is a superior choice for businesses, developers, and content creators that regularly experience high traffic, have a lot of data transfer going on, and need to scale at the drop of a hat. If you run ecommerce stores, SaaS applications, or have a high-traffic blog, cloud hosting is for you. It is also a great, flexible fit for enterprises requiring a stable, high-performance hosting environment with minimal downtime risks.
3. **What is the difference between cloud and traditional hosting?** — Traditional hosting runs on a single server, limiting scalability and uptime. Cloud hosting spreads things around — you get more resources as you need them, tapping several different locations, which means essentially unlimited resources, nonstop uptime, perfect reliability, and consistent high speeds. Cloud hosting adapts to traffic spikes dynamically, reducing the risk of downtime or performance delays.
4. **Which is better? Cloud hosting or VPS?** — VPS (virtual private server) is the best hosting choice for businesses who want a dedicated server for their use. While it offers performance you can count on and grassroots access, it is a self-managed service and you'll need a bit of technical expertise to manage it efficiently. Cloud hosting, on the other hand, is a fully-managed solution — a pre-built environment with all the necessary tools you need to run a successful online venture. You enjoy high speeds, perfect reliability, and rock-solid security without the complexity of managing your own server. We supplement our cloud hosting services with dedicated expert support, available at all times.
5. **What are the major advantages of hosting on a cloud?** — Key benefits include: **Scalability as you need it** (instantly expands resources as needed), **High availability** (multiple servers ensure 99.99% uptime), **Optimized performance** (faster load times with SSDs and global CDNs), **Enhanced security** (encryption, firewalls, DDoS protection, and more, all built-in), **Cost-efficiency** (pay for what you need and nothing more), **Global reach** (your site remains accessible to visitors no matter where they are). With cloud hosting, you get unparalleled flexibility, speed, and reliability for businesses of all sizes.

---

## 3. RESELLER HOSTING (`/reseller-hosting`)

**Hero:**
> # Your Hosting Business Supercharged by Us.
> Take control of your hosting business with our powerful reseller hosting solutions. Built for agencies, developers, and entrepreneurs. Exceed what your clients think you can do with reliable hosting that's all about high-speed performance, full management control, and scalable plans.
>
> CTA: "Start Now" → `#pricing`

**Pricing section heading:** "Win with the right hosting plan by your side — Find the perfect plan and start hosting today."

**3 pricing tiers:**

| | GrowBig | GoGeek | Cloud |
|---|---|---|---|
| Badge | Special Price | Special Price | Prices from |
| Price | $6.69/mo* | $10.69/mo* | $100.00/mo |
| Was | $29.99/mo | $44.99/mo | — ("Configure your plan") |
| Websites | Unlimited | Unlimited | Unlimited |
| Web Space | 20 GB | 40 GB | 40+ GB |

**Shared features (all 3 tiers):** Free WP Installation, WordPress Autoupdates, Free WP Migrator plugin, Daily & on-demand backups, Free SSLs, Free CDN, Free Email, Enhanced Security, Ecommerce Enabled, WP-CLI and SSH, Out-of-The-Box Caching, Unlimited Databases, Easy Staging, Collaborators

**GoGeek + Cloud only add:** White-Label Clients, Free Private DNS, Priority Support

**Cloud-only extras on top of that:** Customize client's access, Tailor site's resources

**Pricing disclaimer:** "All advertised prices above apply to prepaid purchases of a 12-month hosting plan. Special prices are applicable for the first invoice. For all subsequent renewals regular prices apply."

**"Why you'll love our reseller hosting" — 3 items:**
1. **Seamless management for you and your clients** — Reseller hosting services that are powerful without any complexity. Our easy-to-use management tools including cPanel and WHM, let you run your business hassle-free. Create accounts, set limits, and monitor usage effortlessly. Your clients get a smooth hosting experience and you get full control.
2. **Scalable hosting that pivots with you** — As your hosting business grows, your hosting solution should grow with it. Experience hosting that fits with your needs, not the other way around. Upgrade storage, bandwidth, and resources instantly — the minute you need them.
3. **A partner you can trust** — With years of experience in digital services, we understand what businesses need to thrive. Our hosting solutions are built with businesses in mind, offering reliability, flexibility, and expert support.

**"Our Reseller Hosting Features" — 4 items:**
1. **White-Label Hosting** — Brand your hosting business with full white-label solutions. Customize nameservers, branding, and control panel elements so your clients only see your company, not ours.
2. **Powerful Management Tools** — Get total control over your hosting business with full-scale cPanel and WHM access. Create and manage accounts, set resource limits, monitor server performance, and automate billing with ease.
3. **High-Performance & Security** — We use SSD storage, blazing-fast servers, and global data centers to ensure fast load times. Plus, with built-in firewalls, DDoS protection, and free SSL certificates, your clients' data stays secure.
4. **Scalable and Flexible** — Start small and scale as you grow. Our reseller hosting solutions are designed to match your pace. Scale up/down as you please to optimize resources and run your business without server headaches.

**"Questions? Our experts are here to help." section:**
> Our hosting experts are available 24/7 to assist you with setup, migration, troubleshooting, and optimization so you can focus on your business success.
> CTA: "Chat with an expert" → `/contact`

**Closing banner:** "Your hosting business starts here. Are you in? You bring the vision, we deliver the infrastructure. Get the tools, support, and reliability you need to run a successful hosting business." CTA: "Let's start" → `/contact`

**FAQ:**
1. **What is a reseller hosting service?** — Reseller hosting allows you to purchase hosting resources from a provider like us, and resell them to your clients under your brand. You get control over account creation, pricing, and management while we handle server maintenance and infrastructure. It's an ideal way to start a business without owning physical servers.
2. **Who uses reseller hosting?** — Reseller hosting is used by: web developers and designers who want to offer hosting as an added service, digital agencies managing multiple client websites, entrepreneurs looking to start a hosting business, IT consultants providing hosting solutions to businesses, and companies needing separate hosting accounts for different departments or projects.
3. **What is the difference between shared and reseller hosting?** — Shared hosting is a limited solution if you're looking for reseller purposes — you rent a portion of the server for your own use and cannot create multiple client accounts, which suits creators or small businesses needing a single website. Reseller hosting is where you get allocated server resources that you can divide and resell as independent hosting accounts, managing client accounts via WHM, offering more flexibility and scalability. Reseller hosting is ideal for those who want to run a hosting business.
4. **What are the key benefits of reseller hosting?** — Reseller hosting is valuable for several reasons: white-label branding so you can sell hosting under your own brand, flexible scalability to upgrade resources as your business grows, revenue generation where you set your own prices and earn profits, full account management with cPanel and WHM, minimal tech responsibility since we handle server maintenance, and an affordable entry point to start a hosting business without heavy infrastructure investment.
5. **How do I start a reseller hosting business?** — A simple breakdown: choose a reliable hosting provider like us and buy your plan; brand your hosting service with customized nameservers and more; use WHM to set up client management tools; establish competitive pricing and packages based on market demand; and provide great customer support with our reliable tech help and uptime monitoring.

---

## Build notes

- All three pages share the "12-month prepaid pricing" disclaimer style — build it as a small reusable `<PricingDisclaimer />` snippet rather than repeating it.
- Cross-links between these three pages (Web Hosting → Cloud Hosting/Reseller Hosting mentions, etc.) should route via React Router `<Link>`, not full page reloads.
- Keep the same FAQ accordion component from the main build (Section 4/6 of the original prompt) — just feed it this page's Q&A array.
- Animate the pricing tables the same way as the rest of the site: `whileInView` stagger for cards, `whileHover` lift, and an animated/highlighted "most popular" tier where noted above.
