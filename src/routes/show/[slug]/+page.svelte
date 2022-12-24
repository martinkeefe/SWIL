<script lang="ts">
  import type { PageData } from './$types';
  import type { Link } from '$lib/data/types';

  export let data: PageData;

  let streams: Link[] = [];
  let buys: Link[] = [];
  let jw: Link | undefined;
  let imdb: { url: string; score?: string[] } | undefined;
  let wp: Link | undefined;
  let rt: Link | undefined;
  let tvdb: Link | undefined;
  let bbc: Link | undefined;
  let ch4: Link | undefined;

  for (const link of data.links) {
    switch (new URL(link.url).host) {
      case 'www.justwatch.com':
        jw = { ...link };
        break;
      case 'www.imdb.com':
        imdb = { ...link, score: link.score?.split(' ') };
        break;
      case 'en.wikipedia.org':
        wp = { ...link };
        break;
      case 'www.rottentomatoes.com':
        rt = { ...link };
        break;
      case 'thetvdb.com':
        tvdb = { ...link };
        break;
      case 'www.bbc.co.uk':
        if (link.type == 'stream') streams.push({ ...link });
        else bbc = { ...link };
        break;
      case 'www.channel4.com':
        if (link.type == 'stream') streams.push({ ...link });
        else ch4 = { ...link };
        break;
      default:
        if (link.type) {
          if (link.type == 'stream') streams.push({ ...link });
          // else buys.push({ ...link });
        }
        break;
    }
  }
</script>

<svelte:head>
  <title>SWIL - TV - {data.title}</title>
</svelte:head>

<div class="wrapper">
  <img src={data.images[0].url} alt={data.title} />
  <div class="info">
    <span class="title">
      {#if jw}
        <a href={jw.url}>{data.title}</a>
      {:else}
        {data.title}
      {/if}
    </span>
    <span class="year">({data.date.substring(0, 4)})</span>
    <span class="like">{'★★★★★'.substring(0, Number(data.like ?? '0'))}</span>

    <div class="two-col">
      <div>
        {#if streams.length > 0}
          <div>
            Stream at:<br />
            {#each streams as s (s.url)}
              <a href={s.url}>{new URL(s.url).host}</a>
              {#if s.which}
                ({s.which})
              {/if}
              <br />
            {/each}
          </div>
          <br />
        {:else if buys.length > 0}
          <div>
            Buy at:<br />
            {#each buys as s (s.url)}
              <a href={s.url}>{new URL(s.url).host}</a><br />
            {/each}
          </div>
          <br />
        {:else}
          <div>
            Not available to stream in UK<br />
          </div>
          <br />
        {/if}
      </div>
      <div>
        Links:<br />
        {#if jw}
          <div>
            <a href={jw.url}>JustWatch</a>
            {#if jw.score}
              {jw.score}
            {/if}
          </div>
        {/if}

        {#if imdb}
          <div>
            <a href={imdb.url}>IMDB</a>
            {#if imdb.score}
              {imdb.score[0]}
              {#if imdb.score[1]}
                ({imdb.score[1]})
              {/if}
            {/if}
          </div>
        {/if}

        {#if rt}
          <div>
            <a href={rt.url}>Rotten Tomatoes</a>
            {#if rt.score}
              {rt.score.split(' ').join(' / ')}
            {/if}
          </div>
        {/if}

        <!-- {#if wp}
          <div>
            <a href={wp.url}>Wikipedia</a>
          </div>
        {/if} -->

        <!-- {#if tmdb}
          <div>
            <a href={tmdb.url}>TMDB</a>
            {#if tmdb.score}
              {tmdb.score}
            {/if}
          </div>
        {/if} -->

        {#if tvdb}
          <div>
            <a href={tvdb.url}>TVDB</a>
          </div>
        {/if}
      </div>
    </div>

    {#if data.texts && data.texts.length > 0}
      <p>{data.texts[0].text}</p>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    max-width: 65rem;
    margin: 0 auto;
  }

  .info {
    padding: 1rem;
  }

  img {
    width: 25rem;
    padding: 1rem;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
  }

  /* .genre {
    display: block;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  } */

  .title {
    font-weight: 600;
    font-style: italic;
    /* font-family: Lato, sans-serif;
    font-weight: 400; */
    font-size: xx-large;
    margin-right: 0.5rem;
  }
  .year {
    font-size: xx-large;
    margin-right: 0.5rem;
  }
  .like {
    font-size: xx-large;
    /* margin-left: 1rem; */
  }

  p {
    line-height: 1.5rem;
  }
</style>
