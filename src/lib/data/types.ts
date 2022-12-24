export type Work = {
  title: string;
  date: string;
  slug: string;
  like?: string;
  images: { url: string }[];
  links: Link[];
  texts?: Text[];
  seasons?: Season[];
  tags?: Set<string>;
  why?: 'like' | 'want' | 'data';
  genres?: string;
};

export type Link = {
  url: string;
  type?: 'stream' | 'buy' | 'why';
  score?: string;
  which?: string;
};

export type Text = {
  text: string;
  src?: string;
};

export type Network = {
  name: string;
  slug: string;
  types: ('tv' | 'film')[];
  links: Link[];
};

export type Season = {};
