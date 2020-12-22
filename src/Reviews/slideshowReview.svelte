<script lang="ts">
	import { fade } from 'svelte/transition';

export let Review = [
    {
      image: "https://dummyimage.com/302x302",
      alt: "testimonial",
      review:  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      reviewer:"HOLDEN CAULFIELD",
      title:  "Senior Product Designer"
    },
       {
      image: "https://dummyimage.com/302x302",
      alt: "testimonial",
      review:  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      reviewer:"TEst",
      title:  "CHnage"
    },
       {
      image: "https://dummyimage.com/302x302",
      alt: "testimonial",
      review:  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      reviewer:"Test 2",
      title:  "Fade"
    },
         {
      image: "https://dummyimage.com/302x302",
      alt: "testimonial",
      review:  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      reviewer:"Test 3",
      title:  "please"
    },
         {
      image: "https://dummyimage.com/302x302",
      alt: "testimonial",
      review:  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      reviewer:"Test 4",
      title:  "Senior Product Designer"
    },
  ] 
  export let currentSlide = 0;
  let rev = [...Review]
  	$: rev = rev.slice(0, Review.length >= 9 ? 9 : Review.length);

  	var rotate = function (nums, k) {
		if (nums.length > k) {
			nums.unshift(...nums.splice(-k));
		} else {
			let i = 0;
			while (i < k) {
				nums.unshift(nums.splice(-1));
				i++;
			}
		}
		return [...nums];
  };
  
  
  let prevSlide = () => gotoSlide(currentSlide - 1);
  let nextSlide = () => gotoSlide(currentSlide + 1);
  let gotoSlide = (num) => {
    rev = [...rotate(Review, -num)];
  }
  let hasOnlyOneImage = false;
$: hasOnlyOneImage = Review.length === 1;
</script>
<style>

</style>


  <div class="overflow-hidden rounded-md shadow-inner" transition:fade={{duration: 250}}>
  <!-- large image on slides -->
   <div class="container px-5 py-24 mx-auto" transition:fade={{duration: 250}}>
    <div class="flex flex-wrap justify-center -m-4 " transition:fade={{duration: 250}}>
	{#each [rev[currentSlide]] as re (currentSlide)}
		 <div class="p-4 mb-6 lg:w-1/3 lg:mb-0" >
          <div class="h-full text-center ">
            <img alt="{re.alt}" class="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="{re.image}">
            <p class="leading-relaxed">{re.review}</p>
            <span class="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded"></span>
            <h2 class="text-sm font-medium tracking-wider text-gray-500 title-font">{re.reviewer}</h2>
            <p class="text-gray-500">{re.title}</p>
          </div>
        </div>
  {/each}
  </div>
  </div>
	{#if !hasOnlyOneImage}
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
      class="absolute inset-y-0 left-0 flex items-center px-4 text-3xl font-extrabold text-gray-300 cursor-pointer hover:text-white"
      on:click={prevSlide}>❮</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
      class="absolute inset-y-0 right-0 flex items-center px-4 text-3xl font-extrabold text-gray-300 cursor-pointer hover:text-white"
      on:click={nextSlide}>❯</a>
	{/if}
  </div>


