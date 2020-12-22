<script lang="ts">
  import { Select } from 'svelte-materialify/src';

  import { circIn } from 'svelte/easing';
  import query from 'json-query';
  import { createEventDispatcher } from 'svelte';
  import { fade, slide } from 'svelte/transition';

  import throttle from 'lodash/throttle';

  // INPUT:
  export let columns: {
    name: string;
    path: string;
    type: 'basic' | 'select' | 'people-picker' | 'date';
  }[] = [];
  export let contents: any[] = [];
  export let smallWidth = false;
  export let mediumWidth = false;
  export let largeWidth = false;
  export let extraLargeWidth = false;

  // STATE:
  let columnNames = columns.map(({ name, path }) => name);
  let recordUnderMouse = {
    row: -1,
    col: -1,
    editable: false,
  };

  // ACTIONS:
  const dispatch = createEventDispatcher();
  // TODO: Reduce Complexity
  function getColumnData(name: string, data: any) {
    const possiblePath = columns.find((row) => name === row.name);
    if (possiblePath) {
      const path = possiblePath.path;
      const result = query(path, {
        data,
      });
      if (result.value) {
        if (possiblePath.type === 'date')
          return (
            new Date(result.value * 1000).toLocaleDateString() +
            '-' +
            new Date(result.value * 1000).toLocaleTimeString()
          ); // new Date(Math.floor(result.value / 1000)).toString()
        return result.value;
      } else return 'unknown';
    } else {
      return 'unknown';
    }
  }

  const getColumnDisplayType = (name: string) => {
    const possiblePath = columns.find((row) => name === row.name);
    if (possiblePath) {
      return possiblePath.type;
    } else {
      return 'basic';
    }
  };

  const columnTitleClick = (column: string, iterator: number) => () => {
    dispatch('col-click', {
      column,
      iterator,
    });
  };
</script>

<div class="w-full p-3 overflow-auto rounded-md shadow-lg">
  <table class="relative w-full border-collapse">
    <thead>
      <tr>
        {#each columnNames as columnTitle, columnIterator}
          <th
            class="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 pointer-events-auto md:table-cell"
            on:click={columnTitleClick(columnTitle, columnIterator)}
          >
            <div class="flex flex-row items-center justify-center pointer-events-auto">
              {columnTitle}
              <!-- <SortButton small direction="down" /> -->
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody
      on:mouseleave={() => {
        recordUnderMouse = { row: -1, col: -1, editable: false };
      }}
    >
      {#each contents as row, _rowI}
        <tr
          class="flex flex-row flex-wrap mb-10 bg-white md:hover:bg-gray-100 md:table-row md:flex-row md:flex-no-wrap md:mb-0"
        >
          {#each columnNames as columnName, _colI}
            <td
              on:mouseenter={() => throttle(() => {
                  recordUnderMouse = { row: _rowI, col: _colI, editable: false };
                }, 200)}
              class="relative block w-full p-3 text-right text-gray-800 border border-b rounded md:rounded-none sm:text-center md:w-auto md:table-cell md:static"
            >
              <span
                class="absolute top-0 left-0 z-10 px-2 py-1 text-xs antialiased font-bold uppercase bg-blue-200 shadow-md md:hidden"
              >{columnName}</span>
              <div
                class={extraLargeWidth ? 'relative flex flex-row items-center justify-center w-64' : largeWidth ? 'relative flex flex-row items-center justify-center w-48' : mediumWidth ? 'relative flex flex-row items-center justify-center w-32' : smallWidth ? 'relative flex flex-row items-center justify-center w-16' : 'relative flex flex-row items-center justify-center w-full'}
              >
                {#if getColumnDisplayType(columnName) === 'basic'}
                  <span
                    class={_rowI === recordUnderMouse.row && _colI === recordUnderMouse.col && recordUnderMouse.editable ? 'relative w-full text-right sm:text-center border-2 bg-gray-200 rounded transition-all duration-150' : 'relative w-full text-right sm:text-center transition-all duration-150'}
                    contentEditable={recordUnderMouse.editable}
                    on:change={(value) => {
                      console.log({ value });
                    }}
                  >{getColumnData(columnName, row)}</span>
                {/if}
                {#if getColumnDisplayType(columnName) === 'date'}
                  <span
                    class={_rowI === recordUnderMouse.row && _colI === recordUnderMouse.col && recordUnderMouse.editable ? 'relative w-full text-right sm:text-center border-2 bg-gray-200 rounded transition-all duration-150' : 'relative w-full text-right sm:text-center transition-all duration-150'}
                    contentEditable={recordUnderMouse.editable}
                    on:change={(value) => {
                      console.log({ value });
                    }}
                  >
                    {getColumnData(columnName, row).split('-')[0]}
                    <br />
                    {getColumnData(columnName, row).split('-')[1]}
                  </span>
                {/if}
                {#if getColumnDisplayType(columnName) === 'people-picker'}
                  <Select
                    class="z-20"
                    items={[{ name: 'Choose', value: 'fit' }, { name: 'Person', value: 'fit' }]}
                  >
                    Multiple
                  </Select>
                  <!-- <span
                    class={_rowI === recordUnderMouse.row && _colI === recordUnderMouse.col && recordUnderMouse.editable ? 'relative w-full text-right sm:text-center border-2 bg-gray-200 rounded transition-all duration-150' : 'relative w-full text-right sm:text-center transition-all duration-150'}
                    contentEditable={recordUnderMouse.editable}
                    on:change={(value) => {
                      console.log({ value });
                    }}>{getColumnData(columnName, row)}</span> -->
                  <!-- <mgt-people user-id={getColumnDisplayType(columnName)} person-card="hover"></mgt-people> -->
                {/if}
                {#if getColumnDisplayType(columnName) === 'select'}
                  <span
                    class={_rowI === recordUnderMouse.row && _colI === recordUnderMouse.col && recordUnderMouse.editable ? 'h-full relative w-full text-right sm:text-center border-2 bg-gray-200 rounded transition-all duration-150' : 'h-full relative w-full text-right sm:text-center transition-all duration-150'}
                    contentEditable={recordUnderMouse.editable}
                    on:change={(value) => {
                      console.log({ value });
                    }}
                  >{getColumnData(columnName, row)}</span>
                {/if}
                {#if getColumnDisplayType(columnName) !== 'people-picker'}
                  {#if _rowI === recordUnderMouse.row && _colI === recordUnderMouse.col}
                    {#if recordUnderMouse.editable}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="absolute right-0 w-6 p-1 ml-6 bg-white border rounded-full cursor-pointer -mt-14 hover:ring"
                        on:click={() => {
                          recordUnderMouse = { row: _rowI, col: _colI, editable: false };
                        }}
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    {:else}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="absolute right-0 w-6 p-1 ml-6 bg-white border rounded-full cursor-pointer -mt-14 hover:ring"
                        transition:slide={{ delay: 0, duration: 75, easing: circIn }}
                        on:click={() => {
                          recordUnderMouse = { row: _rowI, col: _colI, editable: true };
                        }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    {/if}
                  {/if}
                {/if}
              </div>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
    <div class="h-16" />
    <div class="fixed w-full text-center bottom-4">
      <div class="flex flex-row items-center justify-center">
        <div class="flex flex-row items-center justify-center p-4 space-x-5 bg-gray-200 rounded-full">
          <div class="px-4 py-1 bg-white rounded-full shadow-xl cursor-pointer">First</div>
          <div class="px-4 py-1 bg-blue-100 rounded-full shadow-xl">2</div>
          <div class="px-4 py-1 bg-white rounded-full shadow-xl cursor-pointer hover:bg-blue-200">3</div>
          <div class="px-4 py-1 bg-white rounded-full shadow-xl cursor-pointer hover:bg-blue-200">4</div>
          <div class="px-4 py-1 bg-white rounded-full shadow-xl cursor-pointer hover:bg-blue-200">5</div>
          <div class="px-4 py-1 bg-white rounded-full shadow-xl cursor-pointer hover:bg-blue-200">6</div>
          <div class="px-4 py-1 bg-white rounded-full shadow-xl cursor-pointer hover:bg-blue-200">Last</div>
        </div>
      </div>
    </div>
  </table>
</div>
