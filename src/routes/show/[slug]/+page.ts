import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import tv from '$lib/data/tv';
import tv_dc from '$lib/data/tv/dc';
import tv_marvel from '$lib/data/tv/marvel';
import tv_star_trek from '$lib/data/tv/star-trek';
import tv_star_wars from '$lib/data/tv/star-wars';

export const load: PageLoad = ({ params }) => {
  const shows = [...tv, ...tv_dc, ...tv_marvel, ...tv_star_trek, ...tv_star_wars];
  const show = shows.find((show) => show.slug == params.slug);

  if (show) return show;

  throw error(404, 'Not found');
};
