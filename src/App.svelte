<script>
  import Card from './Card/Card.svelte';
  import Table from './Table/Table.svelte';
  import { onMount } from 'svelte';
  import TailwindCSS from './TailwindCSS.svelte';
  import { MaterialApp } from 'svelte-materialify';

  export let name;
  export let data = [
    {
      name: 'Hello',
      value: 'World',
    },
    {
      name: 'Goodbye',
      value: 'Life',
    },
  ];

  // This is what marks a value to stay alive between updates
  let counter = 0; // @hmr:keep
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<TailwindCSS />
<MaterialApp>
  <Table
    columns={[{ name: 'Name', path: 'name', type: 'basic' }, { name: 'Full Value', path: 'value', type: 'basic' }]}
    contents={data}
    mediumWidth
  />
</MaterialApp>

<!-- <main>
  <h1 class="p-3 m-4 ml-24 bg-blue-500 shadow rounded-xl">Hello {name}!</h1>
  <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <p>This page has been open for {counter}s.</p>
</main>
<Card title={'New Title'} description={'This is a longer description'} /> -->
