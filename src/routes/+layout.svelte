<script lang="ts">
  import '@fontsource/alegreya/400.css';
  import '@fontsource/alegreya/600.css';
  import '@fontsource/alegreya/900.css';

  import '@fontsource/alegreya/400-italic.css';
  import '@fontsource/alegreya/600-italic.css';
  import '@fontsource/alegreya/900-italic.css';

  import '@fontsource/lato/400.css';
</script>

<svelte:head>
  <title>Stuff Wot I Like</title>
</svelte:head>

<slot />

<style global>
  body {
    color: antiquewhite;
    background-color: darkslategrey;
    font-family: 'Alegreya', serif;
    font-weight: 400;
    font-size: 110%;
  }
  a {
    color: white;
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
    font-family: Lato, sans-serif;
    font-weight: 400;
  }
  /* h1 {
    border-bottom: 1px solid;
  } */
</style>
