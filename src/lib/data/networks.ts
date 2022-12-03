import type { Network } from './types';

const data: Network[] = [
  {
    name: 'BBC iPlayer',
    slug: 'bbc',
    links: [{ url: 'https://www.bbc.co.uk/iplayer', type: 'stream' }]
  },
  {
    name: 'Channel4',
    slug: 'channel4',
    links: [{ url: 'https://www.channel4.com/', type: 'stream' }]
  },
  {
    name: 'Netflix',
    slug: 'netflix',
    links: [{ url: 'https://www.netflix.com/gb/', type: 'stream' }]
  },
  {
    name: 'Amazon Prime',
    slug: 'amazon',
    links: [{ url: 'https://www.amazon.co.uk/gp/video/storefront', type: 'stream' }]
  },
  {
    name: 'Disney+',
    slug: 'disney',
    links: [{ url: 'https://www.disneyplus.com/en-gb', type: 'stream' }]
  },
  {
    name: 'Apple TV+',
    slug: 'apple',
    links: [{ url: 'https://tv.apple.com/gb', type: 'stream' }]
  },
  {
    name: 'BritBox',
    slug: 'britbox',
    links: [{ url: 'https://www.britbox.co.uk/', type: 'stream' }]
  },
  {
    name: 'Sky Go',
    slug: 'sky',
    links: [{ url: 'https://www.sky.com/watch/sky-go', type: 'stream' }]
  },
  {
    name: 'Now',
    slug: 'now',
    links: [{ url: 'https://www.nowtv.com/', type: 'stream' }]
  },
  {
    name: 'Lionsgate+',
    slug: 'lionsgate',
    links: [{ url: 'https://www.lionsgateplus.com/gb/en/', type: 'stream' }]
  },
  {
    name: 'Funimation',
    slug: 'funimation',
    links: [{ url: 'https://www.funimation.com/', type: 'stream' }]
  }
];

export default data;
