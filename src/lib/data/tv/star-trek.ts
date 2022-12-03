import type { Work } from '../types';

const works: Work[] = [
  {
    title: 'Star Trek: Discovery',
    date: '2017-09-24',
    slug: 'star-trek-discovery-2017',
    images: [{ url: 'https://artworks.thetvdb.com/banners/posters/328711-6.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/star-trek-discovery' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0PZ01WLQ7HWV13461L4IC2AGN6', which: 'Paramount+', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5171438', score: '7.0 123K' },
      { url: 'https://en.wikipedia.org/wiki/Star_Trek:_Discovery' },
      { url: 'https://www.rottentomatoes.com/tv/star_trek_discovery', score: '87% 36%' },
      { url: 'https://thetvdb.com/series/star-trek-discovery' },
    ],
  },
  {
    title: 'Star Trek: Short Treks',
    date: '2018-10-04',
    slug: '-2018',
    images: [{ url: 'https://artworks.thetvdb.com/banners/series/376108/posters/62060134.jpg' }],
    links: [
      // { url: '' },
      // { url: '', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9059594', score: '7.0 2.7K' },
      { url: 'https://en.wikipedia.org/wiki/Star_Trek:_Short_Treks' },
      { url: 'https://www.rottentomatoes.com/tv/star_trek_short_treks', score: '- 40%' },
      { url: 'https://thetvdb.com/series/star-trek-short-treks' },
    ],
  },
  {
    title: 'Star Trek: Picard',
    date: '2020-01-23',
    slug: 'star-trek-picard-2020',
    like: '1',
    images: [{ url: 'https://artworks.thetvdb.com/banners/posters/5d262b402df21.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/star-trek-picard' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0OBCWUHNYV0F412VMO06BOAMD3', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt8806524', score: '7.3 72K' },
      { url: 'https://en.wikipedia.org/wiki/Star_Trek:_Picard' },
      { url: 'https://www.rottentomatoes.com/tv/star_trek_picard', score: '85% 39%' },
      { url: 'https://thetvdb.com/series/star-trek-picard' },
    ],
  },
  {
    title: 'Star Trek: Lower Decks',
    date: '2020-08-06',
    slug: 'star-trek-lower-decks-2020',
    like: '2',
    images: [{ url: 'https://artworks.thetvdb.com/banners/v4/series/367138/posters/62f77218a6598.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/star-trek-lower-decks' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0T65F8RP58ZXYVTWG6HXO4ZP2G', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9184820', score: '7.5 18K' },
      { url: 'https://en.wikipedia.org/wiki/Star_Trek:_Lower_Decks' },
      { url: 'https://www.rottentomatoes.com/tv/star_trek_lower_decks', score: '89% 70%' },
      { url: 'https://thetvdb.com/series/star-trek-lower-decks' },
    ],
  },
  {
    title: 'Star Trek: Prodigy',
    date: '2021-10-28',
    slug: 'star-trek-prodigy-2021',
    images: [{ url: 'https://artworks.thetvdb.com/banners/v4/series/385811/posters/612fb106d574c.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/star-trek-prodigy' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0GCY185F3VMWQZEWP22P04WP4K', which: 'Paramount+', type: 'stream' },
      { url: 'https://www.sky.com/watch/sky-go/all?videoId=8950800', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9795876', score: '7.1 3K' },
      { url: 'https://en.wikipedia.org/wiki/Star_Trek:_Prodigy' },
      { url: 'https://www.rottentomatoes.com/tv/star_trek_prodigy', score: '94% 72%' },
      { url: 'https://thetvdb.com/series/star-trek-prodigy' },
    ],
  },
  {
    title: 'Star Trek: Strange New Worlds',
    date: '2022-05-05',
    slug: 'star-trek-strange-new-worlds-2022',
    like: '2',
    images: [{ url: 'https://artworks.thetvdb.com/banners/v4/series/382389/posters/623dea0e4c94a.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/star-trek-strange-new-worlds' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0GQ77405RH1XF9XCT2XV8XNMHD', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt12327578', score: '8.2 30K' },
      { url: 'https://en.wikipedia.org/wiki/Star_Trek:_Strange_New_Worlds' },
      { url: 'https://www.rottentomatoes.com/tv/star_trek_strange_new_worlds', score: '99% 80%' },
      { url: 'https://thetvdb.com/series/star-trek-strange-new-worlds' },
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
