import type { Work } from '../types';

const works: Work[] = [
  {
    title: 'Doom Patrol',
    date: '2019-02-15',
    slug: 'doom-patrol-2019',
    like: '1',
    images: [{ url: '/tvdb/5c5c5fb608efb.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/doom-patrol' },
      { url: 'https://www.lionsgateplus.com/gb/en/series/doom-patrol/season-1/58087', type: 'stream' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0TZYIRNNQ1ZLPJ1S3OGC2C44N0', which: 'Lionsgate+', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt8416494', score: '7.8 52K' },
      { url: 'https://en.wikipedia.org/wiki/Doom_Patrol_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/doom_patrol', score: '97% 76%' },
      { url: 'https://thetvdb.com/series/doom-patrol' },
    ],
  },
  {
    title: 'Harley Quinn',
    date: '2019-11-29',
    slug: 'harley-quinn-2019',
    like: '3',
    images: [{ url: '/tvdb/62cbe04aeabbe.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/harley-quinn' },
      { url: 'https://www.channel4.com/programmes/harley-quinn/on-demand/73283-001', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7658402', score: '8.5 30K' },
      { url: 'https://en.wikipedia.org/wiki/Harley_Quinn_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/harley_quinn', score: '96% 88%' },
      { url: 'https://thetvdb.com/series/harley-quinn' },
    ],
  },
  {
    title: 'Peacemaker',
    date: '2022-01-13',
    slug: 'peacemaker-2022',
    like: '3',
    images: [{ url: '/tvdb/61acbe62c2df6.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/peacemaker' },
      { url: 'https://www.sky.com/watch/sky-go/all?videoId=8395910', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt13146488', score: '8.3 110K' },
      { url: 'https://en.wikipedia.org/wiki/Peacemaker_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/peacemaker_2022', score: '94% 89%' },
      { url: 'https://thetvdb.com/series/peacemaker-2021' },
    ],
  },
  {
    title: 'The Sandman',
    date: '2022-08-05',
    slug: 'the-sandman-2022',
    like: '3',
    images: [{ url: '/tvdb/62dcef3e970d6.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-sandman' },
      { url: 'https://www.netflix.com/gb/title/81150303', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt1751634', score: '7.7 139K' },
      { url: 'https://en.wikipedia.org/wiki/The_Sandman_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_sandman', score: '86% 80%' },
      { url: 'https://thetvdb.com/series/the-sandman' },
    ],
  },
  {
    title: 'Titans',
    date: '2018-10-12',
    slug: 'titans-2018',
    like: '1',
    images: [{ url: '/tvdb/63504b3f71c7e.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/titans' },
      { url: 'https://www.netflix.com/gb/title/80218200', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt1043813', score: '7.6 101K' },
      { url: 'https://en.wikipedia.org/wiki/Titans_(2018_TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/titans', score: '86% 70%' },
      { url: 'https://thetvdb.com/series/titans-2018' },
    ],
  },
  {
    title: 'Watchmen',
    date: '2019-10-20',
    slug: 'watchmen-2019',
    like: '3',
    images: [{ url: '/tvdb/5d85d693a958a.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/watchmen' },
      { url: 'https://www.sky.com/watch/sky-go/all?videoId=6554714', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7049682', score: '8.2 120K' },
      { url: 'https://en.wikipedia.org/wiki/Watchmen_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/watchmen', score: '96% 56%' },
      { url: 'https://thetvdb.com/series/watchmen' },
    ],
  },
];

export default works;

/*
  {
  title: "",
  year: "",
  slug: "",
  like: "1",
  images: [{ url: "" }],
  links: [
  { url: "" }, 
  { url: "", type: "stream" }, 
  { url: "", score: "" },
  { url: "" },
  { url: "", score: "% %" },
  { url: "" },
  ],
  },
*/
