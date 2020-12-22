<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispath = createEventDispatcher();

  import { Button, Dialog, Card, CardTitle, CardText, CardActions } from 'svelte-materialify/src';

  export let active = false;
  export let index: number = -1;

  const closeDialog = (button: 'cancel' | 'delete') => () => {
    active = false;
    if (button === 'delete') dispath('delete', index);
  };
</script>

<Dialog persistent bind:active>
  <Card>
    <CardTitle>Do you Agree?</CardTitle>
    <CardText>If you accept this it will permenetly delete the field</CardText>
    <CardActions>
      <Button on:click={closeDialog('cancel')} text>Cancel</Button>
      <Button on:click={closeDialog('delete')} text class="red-text">Delete</Button>
    </CardActions>
  </Card>
</Dialog>
