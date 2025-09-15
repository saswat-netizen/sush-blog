export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  author: string
  videoUrl?: string
  productLinks?: string[]
}

// Sample blog posts data
const posts: Post[] = [
  {
    slug: 'morning-routine-essentials',
    title: 'My 5 AM Morning Routine: Products That Changed My Life',
    excerpt: 'Discover the daily essentials and habits that transformed my mornings from chaotic to productive. Plus honest reviews of every product I use.',
    content: `# My 5 AM Morning Routine: Products That Changed My Life

Starting my day at 5 AM has been a game-changer. Here&apos;s exactly what I do and the products that make it possible.

## The Wake-Up (5:00 AM)

**Philips Wake-Up Light** - This sunrise alarm clock has revolutionized how I wake up. No more jarring phone alarms!

## Hydration First (5:05 AM)

**Stanley Tumbler 40oz** - Keeps my water ice-cold all day. I start with 16oz of water immediately upon waking.

## Movement & Stretching (5:10 AM)

**Manduka PRO Yoga Mat** - 5 minutes of gentle stretching to activate my body. This mat has incredible grip and cushioning.

## Coffee Ritual (5:15 AM)

**Chemex Pour-Over** - The ritual of making coffee mindfully sets the tone for my day.
**Baratza Encore Grinder** - Consistent grind size makes all the difference.

## Planning & Reflection (5:30 AM)

**Moleskine Daily Planner** - I write down 3 priorities for the day and reflect on yesterday.

## Why This Works

This routine gives me 2 hours of uninterrupted time before the world wakes up. It&apos;s my secret weapon for productivity.

*What&apos;s your morning routine like? Let me know in the comments!*`,
    date: '2024-01-15',
    category: 'Daily Life',
    author: 'Sush',
    videoUrl: 'https://youtube.com/watch?v=example1',
    productLinks: ['https://amazon.com/philips-wake-up-light', 'https://stanley1913.com/tumbler']
  },
  {
    slug: 'tokyo-travel-essentials',
    title: 'Tokyo Travel Guide: 10 Must-Have Items for First-Time Visitors',
    excerpt: 'Just returned from an incredible 2-week trip to Tokyo! Here are the essential items that made my journey smooth and memorable.',
    content: `# Tokyo Travel Guide: 10 Must-Have Items for First-Time Visitors

Just got back from Tokyo and WOW! Here are the items that saved my trip multiple times.

## Navigation & Communication

**Pocket WiFi Device** - Absolute lifesaver! Google Translate worked flawlessly with constant internet.

**Suica Card** - One card for all trains, subways, and even convenience stores. Get it at the airport!

## Comfort & Convenience

**Uniqlo Heattech Base Layers** - January in Tokyo is COLD. These kept me warm without bulk.

**Portable Phone Charger (20,000mAh)** - You&apos;ll be using your phone constantly for translation and photos.

**Comfortable Walking Shoes** - I walked 15+ miles daily. My Allbirds were perfect.

## Food & Dining

**Chopstick Etiquette Guide** - Saved me from embarrassing moments at traditional restaurants.

**Cash Wallet** - Japan is still very cash-based. Keep plenty of yen handy.

## Cultural Experiences

**JR Pass** - If you&apos;re traveling between cities, this pays for itself quickly.

**Omamori (Good Luck Charm)** - Bought one at Senso-ji Temple. Great souvenir and conversation starter.

**Furoshiki Wrapping Cloth** - Eco-friendly way to carry purchases and gifts.

## Pro Tips

- Download Google Translate with camera feature
- Learn basic phrases: arigatou gozaimasu, sumimasen, eigo ga dekimasu ka?
- Bow slightly when greeting - it&apos;s appreciated!

*Planning a Tokyo trip? Ask me anything in the comments!*`,
    date: '2024-01-10',
    category: 'Travel',
    author: 'Sush',
    videoUrl: 'https://youtube.com/watch?v=example2'
  },
  {
    slug: 'home-office-setup-2024',
    title: 'My Work-From-Home Setup: Honest Reviews After 6 Months',
    excerpt: 'After 6 months of remote work, here&apos;s what actually works in my home office setup and what was a waste of money.',
    content: `# My Work-From-Home Setup: Honest Reviews After 6 Months

I&apos;ve been working from home for 6 months now. Here&apos;s what&apos;s actually worth buying.

## The Desk Setup

**IKEA Bekant Desk** - Simple, affordable, and spacious. No regrets here.

**Herman Miller Aeron Chair** - Expensive but worth every penny. My back pain disappeared.

**Monitor Arm (VIVO Dual)** - Game changer for ergonomics and desk space.

## Tech That Works

**MacBook Pro M2** - Handles everything I throw at it. Battery lasts all day.

**LG 27" 4K Monitor** - Crystal clear for design work and video calls.

**Blue Yeti Microphone** - Colleagues constantly compliment my audio quality.

**Logitech MX Master 3** - Best mouse I&apos;ve ever used. The scroll wheel is magic.

## Lighting & Ambiance

**Elgato Key Light** - Perfect for video calls. No more weird shadows.

**Philips Hue Bulbs** - Adjusting color temperature throughout the day helps with focus.

## What I Regret Buying

**Standing Desk Converter** - Used it for 2 weeks, now it&apos;s collecting dust.

**Expensive Mechanical Keyboard** - Too loud for video calls, went back to Apple Magic Keyboard.

## The Real Game Changers

1. **Good lighting** - Makes you look professional on calls
2. **Comfortable chair** - Your back will thank you
3. **Dual monitors** - Productivity boost is real
4. **Quality microphone** - People judge your professionalism by audio quality

## Total Investment

About $3,500 over 6 months. Sounds like a lot, but considering I use this setup 8+ hours daily, it&apos;s worth it.

*What&apos;s in your home office setup? Share your must-haves!*`,
    date: '2024-01-05',
    category: 'Product Reviews',
    author: 'Sush',
    productLinks: ['https://amazon.com/herman-miller-aeron', 'https://apple.com/macbook-pro']
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category)
}