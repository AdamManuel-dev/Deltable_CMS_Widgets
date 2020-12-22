<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispath = createEventDispatcher();

  import { Dialog, CardActions, CardTitle, Card, Button } from 'svelte-materialify';
  import { TextField } from 'svelte-materialify/src';

  export let index;
  export let name: string = '';
  export let type: string = '';
  export let placeholder: string = '';

  const save = () => {
    dispath('save', {
      index,
      name,
      type,
      placeholder,
    });
    close();
  };

  const close = () => {
    active = false;
  };

  export let active = false;
</script>

<style>
  /* your styles go here */
</style>

<div class="flex flex-row w-full h-full overflow-hidden rounded-lg">
  <Dialog bind:active class="overflow-hidden rounded-lg">
    <Card shaped raised class="p-3 rounded-lg">
      <CardTitle>Add Field to Type</CardTitle>
      <TextField dense filled class="text-white black" bind:value={name}>Name</TextField>
      <TextField dense filled class="text-white black" bind:value={type}>Type</TextField>
      <TextField dense filled class="text-white black" bind:value={placeholder}>Placeholder</TextField>
      <CardActions class="justify-between">
        <Button class="w-1/3 p-12 text-white red" on:click={close}>Cancel</Button>
        <Button class="w-1/3 p-12" on:click={save}>Save</Button>
      </CardActions>
    </Card>
  </Dialog>
</div>
