import sortBy from 'lodash/sortBy';
import type { Work, Network } from '$lib/data/types';
import networks from '$lib/data/networks';

const url_host = (url: string) => new URL(url).host;

const set_intersect = <T>(a: Set<T>, b: Set<T>) =>
  new Set([...a].filter((element) => b.has(element)));

const ARTS = new Set('the a'.split(' '));

function sort_title(work: Work) {
  let title = work.title;
  const [first, ...rest] = title.split(' ');

  if (ARTS.has(first.toLowerCase())) {
    title = [...rest, first].join(' ');
  }

  return title;
}

function sort_like(work: Work) {
  return work.like ? Number(work.like) : 0;
}

export const list_of_works = (url: URL, films: Work[], init: Record<string, string>) => {
  const sort = url.searchParams.get('sort') ?? init.sort;
  const dir = url.searchParams.get('dir') ?? init.dir;
  const show = url.searchParams.get('show') ?? init.show;
  const nets = url.searchParams.get('nets');
  const exs = url.searchParams.get('exs');
  const ins = url.searchParams.get('ins');

  const net_host_map = new Map<string, Network>();

  for (const net of networks) {
    net_host_map.set(url_host(net.links[0].url), net);
  }

  const only = new Set(ins?.split('|'));
  const mute = new Set(exs?.split('|'));

  const filter = (wks: Work[], tag: string) => {
    if (only.has(tag))
      return wks.filter((w) => (w.tags ? set_intersect(only, w.tags).size > 0 : false));
    if (mute.has(tag)) return wks.filter((w) => !w.tags?.has(tag));
    return wks;
  };

  let works = films;

  works = filter(works, 'dc');
  works = filter(works, 'marvel');
  works = filter(works, 'star-trek');
  works = filter(works, 'star-wars');

  if (nets != null) {
    const slugs = new Set(nets.split('|'));
    works = works.filter((x) => {
      for (const link of x.links) {
        if (link.type == 'stream') {
          const net = net_host_map.get(url_host(link.url));
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
    case 'like':
      works = sortBy(works, sort_like, 'date');
      break;
  }

  if (dir == 'down') works.reverse();

  return { init, works, sort, dir, show, nets, exs, ins };
};
