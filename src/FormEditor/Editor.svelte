<script lang="ts">
  import DeleteConfirmation from './Dialogs/DeleteConfirmation.svelte';
  import ExpansionPanels, { ExpansionPanel } from 'svelte-materialify/src/components/ExpansionPanels';
  import EditField from './Dialogs/EditField.svelte';
  import AddField from './Dialogs/AddField.svelte';
  import AddButton from './AddButton.svelte';
  import { Button, Select } from 'svelte-materialify/src';
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';
  export let items = [
    {
      id: 0,
      value: 'Field 1',
    },
    {
      id: 1,
      value: 'Field 2',
    },
    {
      id: 2,
      value: 'Field 3',
    },
  ];
  const flipDurationMs = 300;
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
  export let fields = [
    'Field 1',
    'Field 2',
    'Field 3',
    'Field 1',
    'Field 2',
    'Field 3',
    'Field 1',
    'Field 2',
    'Field 3',
    'Field 1',
    'Field 2',
    'Field 3',
  ];
  let dialog = false;
  let edit = false;
  let confirmDelete = false;
</script>

<style>
  /* your styles go here */
  * {
    outline: none !important;
  }
</style>

<div class="relative w-full h-full">
  <!-- <div class="absolute top-6 right-12">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgba(239, 68, 68, 1)"
      viewBox="0 0 24 24"
      stroke="black"
      class="w-8 p-1 bg-red-500 rounded-full shadow-md cursor-pointer hover:shadow-xl "
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div> -->
  <div class="flex flex-row items-center justify-between w-full p-12">
    <div>
      <h1 class="w-full p-3 text-7xl">Form Editor</h1>
      <h4 class="w-full p-3 text-3xl">Category</h4>
      <!-- <Select
        solo
        items={[{ name: 'Assign Appointment', value: 'foo' }, { name: 'Status 2', value: 'bar' }, { name: 'Status 3', value: 'fizz' }, { name: 'Buzz', value: 'buzz' }]}
        value={['Assign Appointment']}
        placeholder="Solo"
      /> -->
    </div>
    <div>
      <h4 class="w-full p-3 text-xl text-right">Next Status is...</h4>
      <!-- <Select
        solo
        items={[{ name: 'Assign Appointment', value: 'foo' }, { name: 'Status 2', value: 'bar' }, { name: 'Status 3', value: 'fizz' }, { name: 'Buzz', value: 'buzz' }]}
        value={['Assign Appointment']}
        placeholder="Solo"
      /> -->
      <h1 class="w-full p-3 text-4xl text-right">Assign Appointment</h1>
    </div>
  </div>
  <div class="flex flex-row items-center justify-center -mt-10">
    <div class="w-full px-16">
      <ExpansionPanels inset flat>
        <ExpansionPanel>
          <span slot="header">Details</span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus obcaecati molestiae quas
          mollitia error modi atque aliquam esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          amet natus obcaecati molestiae quas mollitia error modi atque aliquam esse. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repellat amet natus obcaecati molestiae quas mollitia error modi atque aliquam
          esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus obcaecati molestiae quas
          mollitia error modi atque aliquam esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          amet natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
        </ExpansionPanel>
      </ExpansionPanels>
    </div>
  </div>
  <AddField bind:active={dialog} />
  <EditField bind:active={edit} />
  <DeleteConfirmation bind:active={confirmDelete} />
  <!-- markup (zero or more items) goes here -->
  <div
    class="flex flex-col items-center justify-start w-full"
    style="outline: none"
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as field, i (field.id)}
      <div class="w-full p-3" animate:flip={{ duration: flipDurationMs }}>
        <AddButton
          addPosition={i}
          on:add={({ detail }) => {
            dialog = !dialog;
            console.log(detail);
          }}
        />
        <div class="flex flex-row items-center justify-between w-full p-4 bg-green-500 rounded-md">
          <div class="flex flex-row items-center justify-between">
            <div class="p-3 -ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-9">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h2 class="text-4xl">{field.value}</h2>
          </div>
          <div>
            <Button
              class="text-white black"
              on:click={() => {
                edit = !edit;
              }}
            >
              Edit
            </Button>
            <Button
              class="red white-text"
              on:click={() => {
                confirmDelete = !confirmDelete;
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <AddButton
    addPosition={items.length}
    on:add={({ detail }) => {
      dialog = !dialog;
      console.log(detail);
    }}
  />
  <div class="flex flex-row items-center justify-around p-8">
    <Button class="text-white red">Back</Button>
    <Button>Preview</Button>
  </div>
</div>
