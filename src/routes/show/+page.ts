import type { PageLoad } from './$types';
import { list_of_works } from '$lib/utils';
import works from '$lib/data/tv';

export const load: PageLoad = ({ url }) =>
  list_of_works(url, works, { sort: 'date', dir: 'down', show: 'all' });
