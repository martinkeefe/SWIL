<script lang="ts">
  // import '@fontsource/alegreya/400.css';
  // import '@fontsource/alegreya/600.css';
  // import '@fontsource/alegreya/900.css';

  // import '@fontsource/alegreya/400-italic.css';
  // import '@fontsource/alegreya/600-italic.css';
  // import '@fontsource/alegreya/900-italic.css';

  import '@fontsource/lato/400.css';
</script>

<svelte:head>
  <title>Stuff Wot I Like</title>
</svelte:head>

<slot />

<style global>
  :root {
    --fg: rgb(197, 197, 197);
    --fg-a: white;
    --bg: rgb(33, 51, 77);

    --fg-btn: var(--fg);
    --bg-btn: rgb(47, 40, 92);
    --bg-btn-sel: rgb(84, 71, 167);
  }
  body {
    color: var(--fg);
    background-color: var(--bg);
    /* font-family: 'Alegreya', serif; */
    font-family: 'Iowan Old Style', Iowan, Charter, 'Palatino Linotype', Palatino, 'Book Antiqua',
      'Palatino LT STD', 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 105%;
  }
  a {
    color: var(--fg-a);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  b {
    font-weight: 600;
  }
  h1,
  h2 {
    /* font-family: Lato, sans-serif; */
    font-weight: 400;
  }
  /* h1 {
    border-bottom: 1px solid;
  } */
</style>
