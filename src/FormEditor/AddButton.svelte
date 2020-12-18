<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { slide, fly } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let addPosition: number = 0;

  let mouseOver = false;

  const mouseEnters = () => {
    mouseOver = true;
  };

  const mouseLeaves = () => {
    mouseOver = false;
  };

  const addClicked = () =>
    dispatch('add', {
      position: addPosition,
    });
</script>

<style>
  /* your styles go here */
</style>

<div
  on:mouseleave={mouseLeaves}
  class="flex flex-row items-center justify-end w-full h-12 px-4 -mt-5 transition-opacity duration-100 opacity-0 hover:opacity-100"
>
  {#if mouseOver}
    <div
      class="pl-2 pr-6 -mr-4 text-base text-black bg-white rounded-full cursor-pointer"
      transition:fly={{ x: 25, duration: 250 }}
      on:click={addClicked}
    >
      Add Field
    </div>
  {/if}
  <svg
    on:mouseenter={mouseEnters}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="black"
    class="z-20 w-6 bg-white rounded-full cursor-pointer"
    on:click={addClicked}
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</div>
