<script>
  import { Button, Dialog, Card, CardTitle, CardText, CardActions } from 'svelte-materialify/src';

  export let active = false;

  const closeDialog = () => {
    active = false;
  };
</script>

<Dialog persistent bind:active>
  <Card>
    <CardTitle>Do you Agree?</CardTitle>
    <CardText>If you accept this it will permenetly delete the field</CardText>
    <CardActions>
      <Button on:click={closeDialog} text>Cancel</Button>
      <Button on:click={closeDialog} text class="red-text">Delete</Button>
    </CardActions>
  </Card>
</Dialog>
