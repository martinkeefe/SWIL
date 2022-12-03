import type { Work } from '../types';

const works: Work[] = [
	{
		title: 'Andor',
		date: '2022-09-21',
		slug: 'andor-2022',
		like: '3',
		images: [{ url: 'https://artworks.thetvdb.com/banners/v4/series/393189/posters/632f4c7a0c9da.jpg' }],
		links: [
			{ url: 'https://www.justwatch.com/uk/tv-series/andor' },
			{ url: 'https://www.disneyplus.com/en-gb/series/star-wars-andor/3xsQKWG00GL5', type: 'stream' },
			{ url: 'https://www.imdb.com/title/tt9253284', score: '8.4 76K' },
			{ url: 'https://en.wikipedia.org/wiki/Andor_(TV_series)' },
			{ url: 'https://www.rottentomatoes.com/tv/andor', score: '96% 85%' },
			{ url: 'https://thetvdb.com/series/andor' }
		]
	}
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
