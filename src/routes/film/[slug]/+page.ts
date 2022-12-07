import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import works from '$lib/data/film';
// import tv_dc from '$lib/data/tv/dc';
// import tv_marvel from '$lib/data/tv/marvel';
// import tv_star_trek from '$lib/data/tv/star-trek';
// import tv_star_wars from '$lib/data/tv/star-wars';

export const load: PageLoad = ({ params }) => {
  const films = [...works]; //, ...tv_dc, ...tv_marvel, ...tv_star_trek, ...tv_star_wars];
  const film = films.find((show) => show.slug == params.slug);

  if (film) return film;

  throw error(404, 'Not found');
};
