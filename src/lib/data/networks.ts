import type { Network } from './types';

const data: Network[] = [
  {
    name: 'BBC iPlayer',
    slug: 'bbc',
    types: ['tv'],
    links: [{ url: 'https://www.bbc.co.uk/iplayer', type: 'stream' }],
  },
  {
    name: 'Channel4',
    slug: 'channel4',
    types: ['tv'],
    links: [{ url: 'https://www.channel4.com/', type: 'stream' }],
  },
  {
    name: 'ITV',
    slug: 'itv',
    types: ['film'],
    links: [{ url: 'https://www.itv.com/', type: 'stream' }],
  },
  {
    name: 'Netflix',
    slug: 'netflix',
    types: ['tv', 'film'],
    links: [{ url: 'https://www.netflix.com/gb/', type: 'stream' }],
  },
  {
    name: 'Amazon Prime',
    slug: 'amazon',
    types: ['tv', 'film'],
    links: [{ url: 'https://www.amazon.co.uk/gp/video/storefront', type: 'stream' }],
  },
  {
    name: 'Disney+',
    slug: 'disney',
    types: ['tv', 'film'],
    links: [{ url: 'https://www.disneyplus.com/en-gb', type: 'stream' }],
  },
  {
    name: 'Apple TV+',
    slug: 'apple',
    types: ['tv', 'film'],
    links: [{ url: 'https://tv.apple.com/gb', type: 'stream' }],
  },
  {
    name: 'BritBox',
    slug: 'britbox',
    types: ['tv', 'film'],
    links: [{ url: 'https://www.britbox.co.uk/', type: 'stream' }],
  },
  {
    name: 'Sky Go',
    slug: 'sky',
    types: ['tv', 'film'],
    links: [{ url: 'https://www.sky.com/watch/sky-go', type: 'stream' }],
  },
  {
    name: 'Now',
    slug: 'now',
    types: ['tv', 'film'],
    links: [{ url: 'https://www.nowtv.com/', type: 'stream' }],
  },
  {
    name: 'Lionsgate+',
    slug: 'lionsgate',
    types: ['tv'],
    links: [{ url: 'https://www.lionsgateplus.com/gb/en/', type: 'stream' }],
  },
  {
    name: 'Funimation',
    slug: 'funimation',
    types: ['tv'],
    links: [{ url: 'https://www.funimation.com/', type: 'stream' }],
  },
  {
    name: 'Plex',
    slug: 'plex',
    types: ['film'],
    links: [{ url: 'https://watch.plex.tv/', type: 'stream' }],
  },
];

export default data;
