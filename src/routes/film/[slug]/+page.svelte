<script lang="ts">
  import type { PageData } from './$types';
  import type { Link } from '$lib/data/types';

  import Title from '$lib/Title.svelte';

  export let data: PageData;

  let streams: Link[] = [];
  let buys: Link[] = [];
  let jw: Link | undefined;
  let imdb: { url: string; score?: string[] } | undefined;
  let wp: Link | undefined;
  let rt: Link | undefined;
  let tmdb: Link | undefined;
  let tvdb: Link | undefined;

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
      case 'www.themoviedb.org':
        tmdb = { ...link };
        break;
      case 'thetvdb.com':
        tvdb = { ...link };
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
  <title>SWIL - Film - {data.title}</title>
</svelte:head>

<div class="wrapper">
  <img src={data.images[0].url} alt={data.title} />
  <div class="info">
    <Title work={data} />

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

        {#if tmdb}
          <div>
            <a href={tmdb.url}>TMDB</a>
            {#if tmdb.score}
              {tmdb.score}
            {/if}
          </div>
        {/if}

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

  p {
    line-height: 1.5rem;
  }
</style>
