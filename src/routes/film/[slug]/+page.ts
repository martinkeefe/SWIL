import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import films from '$lib/data/film';

export const load: PageLoad = ({ params }) => {
  // const films = [...works];
  const film = films.find((show) => show.slug == params.slug);

  if (film) return film;

  throw error(404, 'Not found');
};
