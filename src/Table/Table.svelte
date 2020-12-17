<script lang="ts">
  /////////////////////////////////
  // REQUIRED FOR MS GRAPH       //
  /////////////////////////////////

  import { Overlay, Snackbar, Button } from 'svelte-materialify';
  import { Select } from 'svelte-materialify/src';
  import Switch from 'svelte-materialify/src/components/Switch';

  /////////////////////////////////

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

<div class="tw-w-full tw-p-3 tw-overflow-auto tw-rounded-md tw-shadow-lg">
  <table class="tw-relative tw-w-full tw-border-collapse">
    <thead>
      <tr>
        {#each columnNames as columnTitle, columnIterator}
          <th
            class="tw-hidden tw-p-3 tw-font-bold tw-text-gray-600 tw-uppercase tw-bg-gray-200 tw-border tw-border-gray-300 tw-pointer-events-auto md:tw-table-cell"
            on:click={columnTitleClick(columnTitle, columnIterator)}
          >
            <div class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-pointer-events-auto">
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
          class="tw-flex tw-flex-row tw-flex-wrap tw-mb-10 tw-bg-white md:hover:tw-bg-gray-100 md:tw-table-row md:tw-flex-row md:tw-flex-no-wrap md:tw-mb-0"
        >
          {#each columnNames as columnName, _colI}
            <td
              on:mouseenter={() => throttle(() => {
                  recordUnderMouse = { row: _rowI, col: _colI, editable: false };
                }, 200)}
              class="tw-relative tw-block tw-w-full tw-p-3 tw-text-right tw-text-gray-800 tw-border tw-border-b tw-rounded md:tw-rounded-none sm:tw-text-center md:tw-w-auto md:tw-table-cell md:tw-static"
            >
              <span
                class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-px-2 tw-py-1 tw-text-xs tw-antialiased tw-font-bold tw-uppercase tw-bg-blue-200 tw-shadow-md md:tw-hidden"
              >{columnName}</span>
              <div
                class={extraLargeWidth ? 'tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-64' : largeWidth ? 'tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-48' : mediumWidth ? 'tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-32' : smallWidth ? 'tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-16' : 'tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-full'}
              >
                {#if getColumnDisplayType(columnName) === 'basic'}
                  <span
                    class={_rowI === recordUnderMouse.row && _colI === recordUnderMouse.col && recordUnderMouse.editable ? 'tw-relative tw-w-full tw-text-right sm:tw-text-center tw-border-2 tw-bg-gray-200 tw-rounded tw-transition-all tw-duration-150' : 'tw-relative tw-w-full tw-text-right sm:tw-text-center tw-transition-all tw-duration-150'}
                    contentEditable={recordUnderMouse.editable}
                    on:change={(value) => {
                      console.log({ value });
                    }}
                  >{getColumnData(columnName, row)}</span>
                {/if}
                {#if getColumnDisplayType(columnName) === 'date'}
                  <span
                    class={_rowI === recordUnderMouse.row && _colI === recordUnderMouse.col && recordUnderMouse.editable ? 'tw-relative tw-w-full tw-text-right sm:tw-text-center tw-border-2 tw-bg-gray-200 tw-rounded tw-transition-all tw-duration-150' : 'tw-relative tw-w-full tw-text-right sm:tw-text-center tw-transition-all tw-duration-150'}
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
                    class={_rowI === recordUnderMouse.row && _colI === recordUnderMouse.col && recordUnderMouse.editable ? 'h-fulltw- relativetw- tw-w-full tw-text-right sm:tw-text-center tw-border-2 tw-bg-gray-200 tw-rounded tw-transition-all tw-duration-150' : 'tw-h-full relative tw-w-full tw-text-right sm:tw-text-center tw-transition-all tw-duration-150'}
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
                        class="tw-absolute tw-right-0 tw-w-6 tw-p-1 tw-ml-6 tw-bg-white tw-border tw-rounded-full tw-cursor-pointer tw--mt-14 hover:tw-ring"
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
                        class="tw-absolute tw-right-0 tw-w-6 tw-p-1 tw-ml-6 tw-bg-white tw-border tw-rounded-full tw-cursor-pointer tw--mt-14 hover:tw-ring"
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
    <div class="tw-h-16" />
    <div class="tw-fixed tw-w-full tw-text-center tw-bottom-4">
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-center">
        <div
          class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-p-4 tw-space-x-5 tw-bg-gray-200 tw-rounded-full"
        >
          <div class="tw-px-4 tw-py-1 tw-bg-white tw-rounded-full tw-shadow-xl tw-cursor-pointer">First</div>
          <div class="tw-px-4 tw-py-1 tw-bg-blue-100 tw-rounded-full tw-shadow-xl">2</div>
          <div class="tw-px-4 tw-py-1 tw-bg-white tw-rounded-full tw-shadow-xl tw-cursor-pointer hover:tw-bg-blue-200">
            3
          </div>
          <div class="tw-px-4 tw-py-1 tw-bg-white tw-rounded-full tw-shadow-xl tw-cursor-pointer hover:tw-bg-blue-200">
            4
          </div>
          <div class="tw-px-4 tw-py-1 tw-bg-white tw-rounded-full tw-shadow-xl tw-cursor-pointer hover:tw-bg-blue-200">
            5
          </div>
          <div class="tw-px-4 tw-py-1 tw-bg-white tw-rounded-full tw-shadow-xl tw-cursor-pointer hover:tw-bg-blue-200">
            6
          </div>
          <div class="tw-px-4 tw-py-1 tw-bg-white tw-rounded-full tw-shadow-xl tw-cursor-pointer hover:tw-bg-blue-200">
            Last
          </div>
        </div>
      </div>
    </div>
  </table>
</div>
