<script>
  import { Button } from 'svelte-materialify/src';
  import KanBanItem from './KanbanItem.svelte';
  // your script goes here
</script>

<style>
  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7); */
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #00000098;
  }
</style>

<div class="relative overflow-hidden">
  <div
    class="flex flex-col items-center justify-center w-full h-screen overflow-auto overflow-x-hidden bg-gray-500 rounded-md "
  >
    <div class="flex flex-row items-center justify-center w-full p-3">
      <h1 class="w-full text-6xl text-center">KanBan</h1>
    </div>
    <div class="flex flex-row items-start justify-start w-full overflow-x-scroll">
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 1</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 2</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 3</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 4</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 5</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 6</span>
        </div>
        <div class="h-full overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 6</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 7</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full">
        <div class="flex flex-row items-center justify-center p-3">
          <span class="px-4 py-2 text-2xl bg-gray-800 rounded-full">Status 8</span>
        </div>
        <div class="h-full overflow-x-hidden overflow-y-scroll">
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
          <KanBanItem />
        </div>
      </div>
    </div>
  </div>
</div>
