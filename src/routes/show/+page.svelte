<script lang="ts">
  import type { PageData } from './$types';
  import networks from '$lib/data/networks';

  export let data: PageData;

  type Key = 'sort' | 'dir' | 'show';

  $: radio_btn = (key: Key, val: string) => {
    const cls = data[key] == val ? 'btn selected' : 'btn';

    return { href: href({ [key]: val }), class: cls, disabled: cls == 'btn selected' };
  };

  $: net_chk = (slug: string) => {
    const slugs = new Set(data.nets?.split('|'));
    const cls = data.nets != null && slugs.has(slug) ? 'chk selected' : 'chk';

    if (slugs.has(slug)) slugs.delete(slug);
    else slugs.add(slug);
    const nets = slugs.size > 0 ? [...slugs.values()].join('|') : null;

    return { href: href({ nets }), class: cls };
  };

  $: all_nets_btn = () => {
    const cls = data.nets == null ? 'btn selected' : 'btn';

    return { href: href({ nets: null }), class: cls, disabled: cls == 'btn selected' };
  };

  $: exc_tag_chk = (tag: string) => {
    const tags = new Set(data.exs?.split('|'));
    const cls = data.exs != null && tags.has(tag) ? 'chk selected' : 'chk';

    if (tags.has(tag)) tags.delete(tag);
    else tags.add(tag);
    const exs = tags.size > 0 ? [...tags.values()].join('|') : null;

    return { href: href({ exs }), class: cls };
  };

  $: exc_none_btn = () => {
    const cls = data.exs == null ? 'btn selected' : 'btn';

    return { href: href({ exs: null }), class: cls, disabled: cls == 'btn selected' };
  };

  $: inc_tag_chk = (tag: string) => {
    const tags = new Set(data.ins?.split('|'));
    const cls = data.ins != null && tags.has(tag) ? 'chk selected' : 'chk';

    if (tags.has(tag)) tags.delete(tag);
    else tags.add(tag);
    const ins = tags.size > 0 ? [...tags.values()].join('|') : null;

    return { href: href({ ins }), class: cls };
  };

  $: only_none_btn = () => {
    const cls = data.ins == null ? 'btn selected' : 'btn';

    return { href: href({ exs: null }), class: cls, disabled: cls == 'btn selected' };
  };

  function href(arg: Partial<PageData>) {
    const { init, works, nets, exs, ins, ...qry }: PageData = { ...data, ...arg };
    const hrefs = Object.entries(qry)
      .map(([k, v]) => (v == init[k] ? null : `${k}=${v}`))
      .filter((x) => x);
    if (nets != null) hrefs.push('nets=' + nets);
    if (exs != null) hrefs.push('exs=' + exs);
    if (ins != null) hrefs.push('ins=' + ins);
    return '/show/' + (hrefs.length > 0 ? '?' + hrefs.join('&') : '');
  }
</script>

<svelte:head>
  <title>SWIL - TV</title>
</svelte:head>

<header>
  <h1>TV Shows</h1>

  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="options">
    <div class="btn-grp">
      Streams at:
      {#each networks.filter((x) => x.types.includes('tv')) as net (net.slug)}
        <a {...net_chk(net.slug)}>{net.name}</a>{' '}
      {/each}
      <a {...all_nets_btn()}>All</a>
    </div>
    <div class="btn-grp">
      Sort by:
      <a {...radio_btn('sort', 'title')}>Title</a>
      <a {...radio_btn('sort', 'date')}>Date</a>
      <a {...radio_btn('sort', 'like')}>Stars</a>
    </div>
    <div class="btn-grp">
      Sort direction:
      <a {...radio_btn('dir', 'up')}>Up</a>
      <a {...radio_btn('dir', 'down')}>Down</a>
    </div>
    <div class="btn-grp">
      Show:
      <a {...radio_btn('show', 'like')}>Liked</a>
      <!-- <a {...radio_btn('show', 'dislike')}>Didn't Like</a> -->
      <a {...radio_btn('show', 'todo')}>Yet To Watch</a>
      <a {...radio_btn('show', 'all')}>All</a>
    </div>
    <div class="btn-grp">
      Exclude:
      <a {...exc_tag_chk('dc')}>DC</a>
      <a {...exc_tag_chk('marvel')}>Marvel</a>
      <a {...exc_tag_chk('star-trek')}>Star Trek</a>
      <a {...exc_tag_chk('star-wars')}>Star Wars</a>
      <a {...exc_none_btn()}>None</a>
    </div>
    <div class="btn-grp">
      Only:
      <a {...inc_tag_chk('dc')}>DC</a>
      <a {...inc_tag_chk('marvel')}>Marvel</a>
      <a {...inc_tag_chk('star-trek')}>Star Trek</a>
      <a {...inc_tag_chk('star-wars')}>Star Wars</a>
      <a {...only_none_btn()}>None</a>
    </div>
  </div>
</header>

<main>
  {#each data.works as show (show.slug)}
    <div>
      <a href="/show/{show.slug}">
        <img src={show.images[0].url} alt={show.title} />
        <i><b>{show.title}</b></i>
      </a>
      ({show.date.substring(0, 4)})
      {'???????????????'.substring(0, Number(show.like ?? '0'))}
      <!-- {Array(...(show.tags?.keys() ?? [])).join(' ')} -->
      {#if data.show == 'all' && show.like == null}
        <span class="todo">Yet to watch</span>
      {/if}
    </div>
  {/each}
</main>

<style>
  header {
    padding: 0 1rem;
  }
  main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 1rem;
  }

  main div {
    width: 10rem;
    padding: 1rem;
  }

  main img {
    width: 10rem;
    height: 14.67rem;
  }

  .todo {
    font-size: 90%;
  }

  a.btn,
  a.chk {
    font-family: Lato, sans-serif;
    font-size: 16px;
    color: antiquewhite;
    padding: 1px 0.5rem 0.2rem 0.5rem;
    border: 1px solid antiquewhite;
    border-radius: 1rem;
    display: inline-block;
    background-color: rgb(40, 34, 78);
  }
  a.chk {
    border-radius: 0;
  }
  a.btn.selected,
  a.chk.selected {
    background-color: rgb(84, 71, 167);
  }
  a.btn:hover,
  a.chk:hover {
    color: darkslateblue;
    text-decoration: none;
    background-color: antiquewhite;
  }

  .btn-grp {
    display: inline-block;
    margin: 0 1rem 0.6rem 0;
  }
</style>
