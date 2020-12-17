<script lang="ts">
  import { description, title } from './Card';
</script>

<style lang="postcss" src="./Card.postcss">
</style>

<div class="card-container">
  <div class="bg-white hover:shadow-xl">
    <div class="">
      <img
        src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        class="image-container"
      />
    </div>
    <div class="px-4 py-4 md:px-10">
      <h1 class="text-lg font-bold">{title}</h1>
      <p class="py-4">{description}</p>
      <div class="flex flex-wrap pt-8">
        <div class="w-full text-sm font-medium md:w-1/3">NOVEMBER 1,2019</div>
        <div class="2/3">
          <div class="text-sm font-medium">
            SHARE:
            <a href="" class="px-1 text-blue-700 "> FACEBOOk </a>
            <a href="" class="px-1 text-blue-500 "> TWITTER </a>
            <a href="" class="px-1 text-red-600 "> GOOGLE+ </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
