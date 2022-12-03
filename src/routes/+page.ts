import sortBy from 'lodash/sortBy';
import type { PageLoad } from './$types';
import type { Work, Network } from '$lib/data/types';

import tv from '$lib/data/tv';
import tv_dc from '$lib/data/tv/dc';
import tv_marvel from '$lib/data/tv/marvel';
import tv_star_trek from '$lib/data/tv/star-trek';
import tv_star_wars from '$lib/data/tv/star-wars';
import networks from '$lib/data/networks';

function host(url: string) {
  return new URL(url).host;
}

export const load: PageLoad = ({ url }) => {
  const sort = url.searchParams.get('sort') ?? 'title';
  const dir = url.searchParams.get('dir') ?? 'up';
  const show = url.searchParams.get('show') ?? 'all';
  const nets = url.searchParams.get('nets');
  const exs = url.searchParams.get('exs');
  const ins = url.searchParams.get('ins');

  const net_host_map = new Map<string, Network>();

  for (const net of networks) {
    net_host_map.set(host(net.links[0].url), net);
  }

  let works = ins == null ? tv : [];

  const only = new Set(ins?.split('|'));
  const mute = new Set(exs?.split('|'));

  const include = (tag: string) => {
    if (ins != null) return only.has(tag);
    if (exs != null) return !mute.has(tag);
    return true;
  };

  if (include('dc')) works = [...works, ...tv_dc];
  if (include('marvel')) works = [...works, ...tv_marvel];
  if (include('star-trek')) works = [...works, ...tv_star_trek];
  if (include('star-wars')) works = [...works, ...tv_star_wars];

  if (nets != null) {
    const slugs = new Set(nets.split('|'));
    works = works.filter((x) => {
      for (const link of x.links) {
        if (link.type == 'stream') {
          const net = net_host_map.get(host(link.url));
          if (net != null && slugs.has(net.slug)) return true;
        }
      }
      return false;
    });
  }

  switch (show) {
    case 'like':
      works = works.filter((x) => Number(x.like ?? '0') > 0);
      break;
    case 'dislike':
      works = works.filter((x) => x.like == '0');
      break;
    case 'todo':
      works = works.filter((x) => x.like == null);
      break;
  }

  switch (sort) {
    case 'title':
      works = sortBy(works, sort_title, 'year');
      break;
    case 'date':
      works = sortBy(works, 'date', sort_title);
      break;
  }

  if (dir == 'down') works.reverse();

  return { works, sort, dir, show, nets, exs, ins };
};

const ARTS = new Set('the a'.split(' '));

function sort_title(work: Work) {
  let title = work.title;
  const [first, ...rest] = title.split(' ');

  if (ARTS.has(first.toLowerCase())) {
    title = [...rest, first].join(' ');
  }

  return title;
}
