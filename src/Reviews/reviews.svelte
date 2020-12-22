<script lang="ts">
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
      reviewer:"HOLDEN CAULFIELD",
      title:  "Senior Product Designer"
    },
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
      reviewer:"HOLDEN CAULFIELD",
      title:  "Senior Product Designer"
    },
         {
      image: "https://dummyimage.com/302x302",
      alt: "testimonial",
      review:  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      reviewer:"HOLDEN CAULFIELD",
      title:  "Senior Product Designer"
    },
  ]
  // let image: string = "https://dummyimage.com/302x302"
  // let alt: string = "testimonial"
  // let review: string = "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
  // let reviewer: string = "HOLDEN CAULFIELD"
  // let title: string = "Senior Product Designer"
</script>
<style>

</style>

<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      {#each Review || [] as re }
        <div class="p-4 mb-6 lg:w-1/3 lg:mb-0">
          <div class="h-full text-center">
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
</section>