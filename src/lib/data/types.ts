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
};

export type Link = {
  url: string;
  type?: 'stream' | 'buy';
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
