<script>
  import { Menu, List, ListItem, Ripple, Card, CardText, CardActions, Button } from 'svelte-materialify/src';

  export let category = 'Category';
  export let title = 'Title';
  export let description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui quaerat rerum incidunt nisi ducimus?';
</script>

<div class="justify-center d-flex" />
<Menu absolute>
  <div slot="activator" class="p-1 rounded-lg">
    <Card outlined>
      <div class="flex flex-row items-center justify-between w-64 ">
        <div class="pt-3 pl-4 pr-4">
          <span class="text-overline"> {category} </span>
          <br />
          <span class="mb-2 text-h5">{title}</span>
          <br />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 mr-5">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
      <CardText>{description}</CardText>
    </Card>
  </div>
  <List>
    <ListItem>Star</ListItem>
    <ListItem>Update State</ListItem>
    <ListItem>Update Task</ListItem>
    <ListItem>Delete Task</ListItem>
  </List>
</Menu>
