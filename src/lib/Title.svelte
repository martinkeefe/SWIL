<script lang="ts">
  import type { Work, Link } from '$lib/data/types';
  export let work: Work;

  //   let streams: Link[] = [];
  //   //   let buys: Link[] = [];
  //   let jw: Link | undefined;
  //   let imdb: { url: string; score?: string[] } | undefined;
  let wp: Link | undefined;
  //   let rt: Link | undefined;
  //   let tmdb: Link | undefined;
  //   let tvdb: Link | undefined;

  for (const link of work.links) {
    switch (new URL(link.url).host) {
      //       case 'www.justwatch.com':
      //         jw = { ...link };
      //         break;
      //       case 'www.imdb.com':
      //         imdb = { ...link, score: link.score?.split(' ') };
      //         break;
      case 'en.wikipedia.org':
        wp = { ...link };
        break;
      //       case 'www.rottentomatoes.com':
      //         rt = { ...link };
      //         break;
      //       case 'www.themoviedb.org':
      //         tmdb = { ...link };
      //         break;
      //       case 'thetvdb.com':
      //         tvdb = { ...link };
      //         break;
      //       default:
      //         if (link.type) {
      //           if (link.type == 'stream') streams.push({ ...link });
      //           // else buys.push({ ...link });
      //         }
      //         break;
    }
  }
</script>

{#if work.genres && work.genres.length > 0}
  <span class="genre">{work.genres}</span>
{/if}
<span class="title">
  {#if wp}
    <a href={wp.url}>{work.title}</a>
  {:else}
    {work.title}
  {/if}
</span>
<span class="year">({work.date.substring(0, 4)})</span>
<span class="like">{'★★★★★'.substring(0, Number(work.like ?? '0'))}</span>

<style>
  .genre {
    display: block;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
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
</style>
