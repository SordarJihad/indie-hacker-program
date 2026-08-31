/* =========================================================
   BUILDERS — shared data (landing, /builders, /builder)
   Every figure is publicly reported by the builder or the
   linked source. None are affiliated with this program.

   PHOTOS: drop a file in assets/founders/<slug>.jpg and set
   photo: 'assets/founders/<slug>.jpg'. Company mark goes in
   assets/logos/<slug>.svg -> logo: 'assets/logos/<slug>.svg'.
   Leave '' and a designed monogram is used instead.
   ========================================================= */
window.BUILDERS = [
  {
    slug: 'jack-friks', n: 'Jack Friks', h: '@jackfriks', p: 'Post Bridge',
    company: 'Post Bridge', photo: '', logo: '', c: '#1264FF',
    m: '$18,000', ms: 'per month', cat: 'No code', yr: '2026', typ: 'Solo',
    tags: ['nocode', 'solo', 'fast'], featured: true,
    one: 'Could not write code. Described an app to an AI instead.',
    story: 'Jack spent four years failing at print-on-demand, YouTube and affiliate blogs before he touched software. He had never written a line of code. In 2024 he described a social-media scheduling tool to an AI assistant, shipped it, and kept shipping. By mid-2026 Post Bridge was reported at $18,000 per month — solo, bootstrapped, no paid ads.',
    steal: 'He built the tool he personally needed, then told the internet about it every single day. Both halves are teachable.',
    facts: [['Product', 'Post Bridge'], ['Category', 'Social scheduling'], ['Team', 'Solo'], ['Paid ads', '$0']],
    src: { l: 'MarketerGems breakdown', u: 'https://www.marketergems.com/p/jack-friks-postbridge-story-personal-problem-to-profitable-saas' }
  },
  {
    slug: 'ben-tossell', n: 'Ben Tossell', h: '@bentossell', p: 'Makerpad',
    company: 'Makerpad', photo: '', logo: '', c: '#7C3AED',
    m: '$240,000', ms: 'in under 12 months', cat: 'No code', yr: '2021', typ: 'Solo',
    tags: ['nocode', 'solo', 'fast'], featured: true,
    one: 'Non-technical. Built the whole business with no-code tools.',
    story: 'Ben openly said he did not have the technical skill the makers around him had. He built Makerpad on Webflow, Airtable, Zapier and Memberstack — no engineering team — and grew it to $240K in under a year as a side project, later reported around $400K ARR. Zapier acquired it in 2021.',
    steal: 'He sold the thing he was learning, while he was learning it. You can start that in week 01.',
    facts: [['Product', 'Makerpad'], ['Category', 'No-code education'], ['Team', 'Solo'], ['Outcome', 'Acquired by Zapier']],
    src: { l: 'SaaS Club interview', u: 'https://saasclub.io/podcast/makerpad-ben-tossell/' }
  },
  {
    slug: 'pieter-levels', n: 'Pieter Levels', h: '@levelsio', p: 'PhotoAI · NomadList · RemoteOK',
    company: 'PhotoAI', photo: '', logo: '', c: '#0EA5A0',
    m: '~$3M', ms: 'per year, one person', cat: 'AI', yr: '2025', typ: 'Solo',
    tags: ['ai', 'solo'], featured: true,
    one: 'The template for the whole one-person software business.',
    story: 'Pieter runs a portfolio of products alone, in public, with the revenue dashboards open. PhotoAI alone was reported at $138K per month in late 2025, and the portfolio around $3M a year. He also shipped a game that reportedly went $0 to $1M ARR in 17 days.',
    steal: 'Ship fast, in public, and let the audience choose which product deserves your next month.',
    facts: [['Products', 'PhotoAI, NomadList, RemoteOK'], ['PhotoAI', '$138K/mo (Nov 2025)'], ['Team', 'Solo'], ['Style', 'Builds in public']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'marc-lou', n: 'Marc Lou', h: '@marc_louvion', p: 'ShipFast',
    company: 'ShipFast', photo: '', logo: '', c: '#F59E0B',
    m: '$1,032,000', ms: 'in 2025', cat: 'SaaS', yr: '2025', typ: 'Solo',
    tags: ['solo', 'fast'], featured: true,
    one: 'Shipped small products until one of them hit.',
    story: 'Marc launched product after tiny product in public, most of them failing, until ShipFast landed. He reported $1,032,000 across 2025 from a portfolio of 16+ micro-products, run alone, with an audience he built by posting his numbers.',
    steal: 'Volume beats genius. Ten small launches will teach you more than one perfect plan.',
    facts: [['Products', '16+ micro-products'], ['Biggest', 'ShipFast'], ['Team', 'Solo'], ['Audience', 'Built by posting revenue']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'danny-postma', n: 'Danny Postma', h: '@dannypostmaa', p: 'HeadshotPro',
    company: 'HeadshotPro', photo: '', logo: '', c: '#EC4899',
    m: '$300,000', ms: 'per month at peak', cat: 'AI', yr: '2024', typ: 'Solo',
    tags: ['ai', 'solo', 'fast'], featured: true,
    one: 'Wrapped an AI model in a product people understood.',
    story: 'Danny took image-generation models that already existed and turned them into a thing anyone could buy: professional headshots, no photographer. HeadshotPro was reported at $300K MRR — roughly $3.6M a year — built by one person moving fast on a new capability.',
    steal: 'You do not need to invent the AI. You need to package it for someone who will not read the docs.',
    facts: [['Product', 'HeadshotPro'], ['Category', 'AI images'], ['Team', 'Solo'], ['Peak', '~$3.6M ARR']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'damon-chen', n: 'Damon Chen', h: '@damengchen', p: 'PDF.ai · Testimonial.to',
    company: 'PDF.ai', photo: '', logo: '', c: '#1264FF',
    m: '$1.3M', ms: 'per year portfolio', cat: 'AI', yr: '2025', typ: 'Solo',
    tags: ['ai', 'solo'], featured: true,
    one: 'Quit an 8-year engineering job. Built two products alone.',
    story: 'Damon left Cisco after eight years. Testimonial.to passed $2M total revenue four years after launch; he bought PDF.ai for around $30K and grew it past $50K MRR, reported near $1.5M ARR by late 2024. He scaled to mid-six figures before hiring anyone.',
    steal: 'Boring problems with obvious buyers beat exciting problems with none.',
    facts: [['Products', 'PDF.ai, Testimonial.to'], ['First hire at', '$400K ARR'], ['Team', 'Solo, then small'], ['Before', '8 years at Cisco']],
    src: { l: 'Creator Economy profile', u: 'https://creatoreconomy.so/p/damon-chen-engineer-to-one-million' }
  },
  {
    slug: 'maor-shlomo', n: 'Maor Shlomo', h: '', p: 'Base44',
    company: 'Base44', photo: '', logo: '', c: '#0C0C0F',
    m: '$80,000,000', ms: 'acquisition by Wix', cat: 'AI', yr: '2025', typ: 'Solo',
    tags: ['ai', 'solo', 'fast'],
    one: 'Solo-built an AI app builder. Sold it inside a year.',
    story: 'Maor built Base44 — a platform for building apps by describing them — mostly solo, grew it to roughly 250,000 users in about six months while profitable, and sold it to Wix for a reported $80 million in mid-2025.',
    steal: 'The tools you will use in this program are the same category of tool he built a company on.',
    facts: [['Product', 'Base44'], ['Users', '~250,000 in 6 months'], ['Team', 'Mostly solo'], ['Outcome', 'Acquired by Wix']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'tony-dinh', n: 'Tony Dinh', h: '@tdinh_me', p: 'TypingMind · Xnapper',
    company: 'TypingMind', photo: '', logo: '', c: '#0EA5A0',
    m: '$130K–160K', ms: 'per month', cat: 'AI', yr: '2025', typ: 'Solo',
    tags: ['ai', 'solo'],
    one: 'Small tools, stacked, one person.',
    story: 'Tony builds small utilities and one bigger AI product. TypingMind was reported at $130K–160K per month and over $1M lifetime, alongside Xnapper and DevUtils — all run solo and shipped in public.',
    steal: 'A "small" tool with the right buyer is not small revenue.',
    facts: [['Products', 'TypingMind, Xnapper, DevUtils'], ['Lifetime', '$1M+'], ['Team', 'Solo'], ['Style', 'Builds in public']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'tally', n: 'Marie Martens & Filip Minev', h: '', p: 'Tally.so',
    company: 'Tally', photo: '', logo: '', c: '#7C3AED',
    m: '$2M+', ms: 'ARR, team of five', cat: 'No code', yr: '2025', typ: 'Team of 5',
    tags: ['nocode', 'fast'],
    one: 'A no-code form builder built by a marketer and a developer.',
    story: 'Marie came from marketing, not engineering. She and Filip launched Tally in 2020 as a form builder that works like a document, bootstrapped it with no outside money, and passed $2M ARR by early 2025 with a team of five.',
    steal: 'Two people. One tool. One clear promise. That is a whole company now.',
    facts: [['Product', 'Tally.so'], ['Founded', '2020'], ['Team', '5 people'], ['Funding', 'Bootstrapped']],
    src: { l: 'Growthmates interview', u: 'https://www.growthmates.news/p/from-zero-to-2m-arr-with-life-partner' }
  },
  {
    slug: 'jon-yongfook', n: 'Jon Yongfook', h: '@yongfook', p: 'Bannerbear',
    company: 'Bannerbear', photo: '', logo: '', c: '#F59E0B',
    m: '~$50,000', ms: 'per month', cat: 'SaaS', yr: '2024', typ: 'Solo',
    tags: ['solo'],
    one: 'Failed six times first. Then built an API that prints money.',
    story: 'Jon built and killed several products before Bannerbear — an API that generates images automatically. It was reported near $991K revenue in 2024 and around $50K MRR, run as a one-person company.',
    steal: 'The failures are the tuition. Most builders quit one product before the one that works.',
    facts: [['Product', 'Bannerbear'], ['2024 revenue', '~$991K'], ['Team', 'Solo'], ['Before it', 'Several dead products']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'tibo', n: 'Tibo Louis-Lucas', h: '@tibo_maker', p: 'Tweet Hunter · Taplio',
    company: 'Tweet Hunter', photo: '', logo: '', c: '#EC4899',
    m: '$8M', ms: 'ARR combined, then sold', cat: 'SaaS', yr: '2024', typ: 'Small team',
    tags: ['solo', 'fast'],
    one: 'Two social tools, built fast, sold big.',
    story: 'Tibo built Tweet Hunter and Taplio — tools for people who post on social platforms — and grew them to a reported $8M ARR combined before selling. Small team, unglamorous problem, enormous outcome.',
    steal: 'Sell to people who are already spending money and hours on the problem.',
    facts: [['Products', 'Tweet Hunter, Taplio'], ['Combined', '$8M ARR'], ['Team', 'Small'], ['Outcome', 'Sold']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'senja', n: 'Nico Jeannen', h: '', p: 'Senja',
    company: 'Senja', photo: '', logo: '', c: '#22C55E',
    m: '$1M', ms: 'ARR', cat: 'SaaS', yr: '2025', typ: 'Solo',
    tags: ['solo'],
    one: 'Testimonial collection. That is the entire product.',
    story: 'Senja does one thing: it collects and displays customer testimonials. It was reported at $1M ARR — proof that a single, narrow, deeply useful feature is enough for a real business.',
    steal: 'Narrow is not a weakness. Narrow is how you get found and get paid.',
    facts: [['Product', 'Senja'], ['Does', 'One thing'], ['Team', 'Solo'], ['ARR', '$1M']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'plausible', n: 'Marko Saric & Uku Täht', h: '', p: 'Plausible Analytics',
    company: 'Plausible', photo: '', logo: '', c: '#1264FF',
    m: '$3.1M', ms: 'ARR, two people', cat: 'SaaS', yr: '2024', typ: '2 people',
    tags: ['solo'],
    one: 'Took on Google Analytics with two people.',
    story: 'A marketer and a developer built a simpler, privacy-first analytics tool and grew it to a reported $3.1M ARR by late 2024 — bootstrapped, open, and competing directly with a free product from Google.',
    steal: 'Being the smaller, clearer, more honest option is a real strategy.',
    facts: [['Product', 'Plausible'], ['Competes with', 'Google Analytics'], ['Team', '2 people'], ['Funding', 'Bootstrapped']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'scrapingbee', n: 'Pierre de Wulf & Kevin Sahin', h: '', p: 'ScrapingBee',
    company: 'ScrapingBee', photo: '', logo: '', c: '#0EA5A0',
    m: '$5M', ms: 'ARR', cat: 'Tools', yr: '2025', typ: '2 people',
    tags: ['solo'],
    one: 'An unglamorous API two friends built.',
    story: 'ScrapingBee handles web scraping for other developers. No consumer hype, no app store, no ads — just an API with a clear job, reported around $5M ARR.',
    steal: 'Developers pay fast when you remove a chore. So do agencies and shop owners.',
    facts: [['Product', 'ScrapingBee'], ['Buyer', 'Developers'], ['Team', '2 people'], ['ARR', '~$5M']],
    src: { l: 'IdeaIndex case studies', u: 'https://www.ideaindex.so/case-studies' }
  },
  {
    slug: 'superx', n: 'Rob Hallam', h: '', p: 'SuperX',
    company: 'SuperX', photo: '', logo: '', c: '#F59E0B',
    m: '$25,000', ms: 'per month', cat: 'Tools', yr: '2025', typ: 'Solo',
    tags: ['solo', 'fast'],
    one: 'A browser extension. Not even a full app.',
    story: 'SuperX is a paid extension that improves an existing platform for power users. Reported at roughly $25K MRR — around $300K a year — from a product most people would call "just a plugin".',
    steal: 'Improving a tool people already live inside is one of the fastest paths to first revenue.',
    facts: [['Product', 'SuperX'], ['Type', 'Browser extension'], ['Team', 'Solo'], ['MRR', '~$25K']],
    src: { l: 'IdeaIndex case studies', u: 'https://www.ideaindex.so/case-studies' }
  },
  {
    slug: 'arvid-kahl', n: 'Arvid Kahl', h: '@arvidkahl', p: 'FeedbackPanda · Podscan',
    company: 'FeedbackPanda', photo: '', logo: '', c: '#7C3AED',
    m: '7-figure', ms: 'exit', cat: 'SaaS', yr: '2024', typ: '2 people',
    tags: ['solo'],
    one: 'Built for teachers. Sold the company. Wrote the playbook.',
    story: 'Arvid and his partner built FeedbackPanda for online teachers, sold it for a life-changing sum, and he now builds Podscan in public while teaching the exact process he used.',
    steal: 'Pick an audience you already understand. He served teachers because he lived with one.',
    facts: [['Products', 'FeedbackPanda, Podscan'], ['Audience', 'Online teachers'], ['Team', '2 people'], ['Outcome', '7-figure exit']],
    src: { l: 'Indie hacker profiles', u: 'https://www.teract.ai/resources/twitter-strategy-indie-hackers-2026' }
  },
  {
    slug: 'daniel-vassallo', n: 'Daniel Vassallo', h: '@dvassallo', p: 'Small Bets',
    company: 'Small Bets', photo: '', logo: '', c: '#EC4899',
    m: '$3.6M', ms: 'sale to Gumroad', cat: 'No code', yr: '2024', typ: 'Solo',
    tags: ['nocode', 'solo'],
    one: 'Left Amazon. Sold knowledge products, not software.',
    story: 'Daniel walked away from a senior Amazon job to make many small bets instead of one big one. Small Bets was reported around $400K+ a year before Gumroad acquired it for $3.6M.',
    steal: 'Once you can build, you can also sell what you learned building. Two income lines, one skill.',
    facts: [['Product', 'Small Bets'], ['Before', 'Senior role at Amazon'], ['Team', 'Solo'], ['Outcome', 'Sold for $3.6M']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'easlo', n: 'Easlo (Jason Chin)', h: '', p: 'Notion templates',
    company: 'Easlo', photo: '', logo: '', c: '#22C55E',
    m: '$779,000', ms: 'in 2024', cat: 'No code', yr: '2024', typ: 'Solo',
    tags: ['nocode', 'solo'],
    one: 'No code at all. Templates.',
    story: 'Easlo sells Notion templates — digital products with zero engineering — and reported $779K in 2024. It is the clearest proof that distribution, not code, is the constraint.',
    steal: 'If templates can do $779K, the bar is not technical skill. It is attention and packaging.',
    facts: [['Product', 'Notion templates'], ['Code written', 'None'], ['Team', 'Solo'], ['2024', '$779K']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'pat-walls', n: 'Pat Walls', h: '@thepatwalls', p: 'Starter Story',
    company: 'Starter Story', photo: '', logo: '', c: '#1264FF',
    m: '~$1.1M', ms: 'per year', cat: 'Creator', yr: '2025', typ: 'Solo',
    tags: ['solo'],
    one: 'Interviewed founders until he became one.',
    story: 'Pat started by publishing other people\'s founder stories, built an audience around it, and turned Starter Story into a business reported around $1.1M a year.',
    steal: 'Documenting your build is not a distraction from the build. It is the marketing.',
    facts: [['Product', 'Starter Story'], ['Started as', 'Founder interviews'], ['Team', 'Solo'], ['Per year', '~$1.1M']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  },
  {
    slug: 'sahil-lavingia', n: 'Sahil Lavingia', h: '@shl', p: 'Gumroad',
    company: 'Gumroad', photo: '', logo: '', c: '#0C0C0F',
    m: '$20M+', ms: 'per year', cat: 'SaaS', yr: '2025', typ: 'Small team',
    tags: ['solo'],
    one: 'Failed the venture path. Rebuilt it small and won.',
    story: 'Sahil raised venture money, nearly lost the company, laid off almost everyone, and rebuilt Gumroad as a lean operation. It now moves reported revenue north of $20M a year.',
    steal: 'Small and profitable is not the consolation prize. It is often the actual prize.',
    facts: [['Product', 'Gumroad'], ['Path', 'VC, then lean'], ['Team', 'Small'], ['Per year', '$20M+']],
    src: { l: 'One-Person Companies 2026', u: 'https://onepc.org/stats/one-person-companies-million-dollar-2026' }
  }
];
