<script lang="ts">
  import '@fontsource/alegreya/400.css';
  import '@fontsource/alegreya/600.css';
  import '@fontsource/alegreya/900.css';

  import '@fontsource/alegreya/400-italic.css';
  import '@fontsource/alegreya/600-italic.css';
  import '@fontsource/alegreya/900-italic.css';
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
    font-size: 18px;
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
  h1 {
    font-weight: 900;
  }
  h2 {
    font-weight: 600;
  }
</style>
