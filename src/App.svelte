<script lang="ts">
  import DragCol from './DragList/DragCol.svelte';
  import KanBan from './KanBan/KanBan.svelte';
  // import FacebookPost from './Social/facebook/facebookPost.svelte';
  // import FacebookVideo from './Social/facebook/facebookVideo.svelte';
  // import FacebookComments from './Social/facebook/facebookComments.svelte';
  import FacebookShareDialog from './Social/Facebook/Dialog/FacebookShareDialog.svelte';
  import Card from './Card/Card.svelte';
  import Table from './Table/Table.svelte';
  import { onMount } from 'svelte';
  import TailwindCSS from './TailwindCSS.svelte';
  import Editor from './FormEditor/Editor.svelte';
  import { MaterialApp, Alert, Button, Card as MatCard, CardTitle } from 'svelte-materialify/src';
  import QRCode from "./QRCode/QRCode.svelte"

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

  const tableColumns = [
    { name: 'Name', path: 'name', type: 'basic' },
    { name: 'Full Value', path: 'value', type: 'basic' },
  ] as {
    name: string;
    path: string;
    type: 'basic' | 'select' | 'people-picker' | 'date';
  }[];

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
<MaterialApp theme={'dark'}>
  <!-- <KanBan /> -->
  <!-- <Editor /> -->
  <QRCode url="http://deltable.io/" size=200/>
</MaterialApp>
