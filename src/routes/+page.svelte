<script lang="ts">
  import type { PageData } from './$types';
  import networks from '$lib/data/networks';

  export let data: PageData;

  type Key = 'sort' | 'dir' | 'show';

  $: radio_btn = (key: Key, val: string) => {
    const { works, nets, exs, ins, ...qry } = data;
    qry[key] = val;

    return {
      href: href(qry, nets, exs, ins),
      class: data[key] == val ? 'btn selected' : 'btn',
      disabled: data[key] == val,
    };
  };

  $: net_chk = (slug: string) => {
    let { works, nets, exs, ins, ...qry } = data;

    const slugs = new Set(nets?.split('|'));
    const cls = nets != null && slugs.has(slug) ? 'chk selected' : 'chk';

    if (slugs.has(slug)) slugs.delete(slug);
    else slugs.add(slug);
    nets = slugs.size > 0 ? [...slugs.values()].join('|') : null;

    return { href: href(qry, nets, exs, ins), class: cls };
  };

  $: all_nets_btn = () => {
    const { works, nets, exs, ins, ...qry } = data;
    const cls = nets == null ? 'btn selected' : 'btn';

    return {
      href: href(qry, null, exs, ins),
      class: cls,
      disabled: cls == 'btn selected',
    };
  };

  $: exc_tag_chk = (slug: string) => {
    let { works, nets, exs, ins, ...qry } = data;

    const slugs = new Set(exs?.split('|'));
    const cls = exs != null && slugs.has(slug) ? 'chk selected' : 'chk';

    if (slugs.has(slug)) slugs.delete(slug);
    else slugs.add(slug);
    exs = slugs.size > 0 ? [...slugs.values()].join('|') : null;

    return { href: href(qry, nets, exs, ins), class: cls };
  };

  $: no_tags_btn = () => {
    const { works, nets, exs, ins, ...qry } = data;
    const cls = exs == null ? 'btn selected' : 'btn';

    return {
      href: href(qry, nets, null, ins),
      class: cls,
      disabled: cls == 'btn selected',
    };
  };

  $: inc_tag_chk = (slug: string) => {
    let { works, nets, exs, ins, ...qry } = data;

    const slugs = new Set(ins?.split('|'));
    const cls = ins != null && slugs.has(slug) ? 'chk selected' : 'chk';

    if (slugs.has(slug)) slugs.delete(slug);
    else slugs.add(slug);
    ins = slugs.size > 0 ? [...slugs.values()].join('|') : null;

    return { href: href(qry, nets, exs, ins), class: cls };
  };

  $: all_tags_btn = () => {
    const { works, nets, exs, ins, ...qry } = data;
    const cls = ins == null ? 'btn selected' : 'btn';

    return {
      href: href(qry, nets, exs, null),
      class: cls,
      disabled: cls == 'btn selected',
    };
  };

  function href(
    qry: Record<Key, string>,
    nets: string | null,
    exs: string | null,
    ins: string | null,
  ) {
    const hrefs = Object.entries(qry).map(([k, v]) => `${k}=${v}`);
    if (nets != null) hrefs.push('nets=' + nets);
    if (exs != null) hrefs.push('exs=' + exs);
    if (ins != null) hrefs.push('ins=' + ins);
    return '?' + hrefs.join('&');
  }
</script>

<header>
  <h1>TV Shows</h1>

  <div class="options">
    <div class="btn-grp">
      Streamers:
      {#each networks as net (net.slug)}
        <a {...net_chk(net.slug)}>{net.name}</a>
      {/each}
      <a {...all_nets_btn()}>All</a>
    </div>
    <div class="btn-grp">
      Sort by:
      <a {...radio_btn('sort', 'title')}>Title</a><a {...radio_btn('sort', 'date')}>Date</a>
    </div>
    <div class="btn-grp">
      Sort direction:
      <a {...radio_btn('dir', 'up')}>Up</a><a {...radio_btn('dir', 'down')}>Down</a>
    </div>
    <div class="btn-grp">
      Show:
      <a {...radio_btn('show', 'like')}>Liked</a><a {...radio_btn('show', 'dislike')}>Didn't Like</a
      ><a {...radio_btn('show', 'todo')}>Yet To Watch</a><a {...radio_btn('show', 'all')}>All</a>
    </div>
    <div class="btn-grp">
      Exclude:
      <a {...exc_tag_chk('dc')}>DC</a><a {...exc_tag_chk('marvel')}>Marvel</a><a
        {...exc_tag_chk('star-trek')}>Star Trek</a
      ><a {...exc_tag_chk('star-wars')}>Star Wars</a>
      <a {...no_tags_btn()}>None</a>
    </div>
    <div class="btn-grp">
      Only:
      <a {...inc_tag_chk('dc')}>DC</a><a {...inc_tag_chk('marvel')}>Marvel</a><a
        {...inc_tag_chk('star-trek')}>Star Trek</a
      ><a {...inc_tag_chk('star-wars')}>Star Wars</a>
      <a {...all_tags_btn()}>All</a>
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
      {'★★★★'.substring(0, Number(show.like ?? '0'))}
      {#if data.show == 'all' && show.like == null}
        <span class="todo">TODO</span>
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: antiquewhite;
    padding: 0 0.5rem 0.2rem 0.5rem;
    border: 1px solid antiquewhite;
    border-radius: 1rem;
    margin-left: 0.2rem;
    display: inline-block;
  }
  a.chk {
    border-radius: 0;
  }
  a.btn.selected,
  a.chk.selected {
    background-color: seagreen;
  }
  a.btn:hover,
  a.chk:hover {
    color: darkslateblue;
    text-decoration: none;
    background-color: antiquewhite;
  }
  /* a.btn.selected:hover {
		background-color: darkslateblue;
	} */

  .btn-grp {
    display: inline-block;
    margin: 0 1rem 0.6rem 0;
  }
</style>
