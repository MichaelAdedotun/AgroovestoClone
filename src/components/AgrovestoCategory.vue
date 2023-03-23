<template>
  <section class="grid grid-cols-2">
    <div class="bg-gray-800 pl-72 py-24 text-white">
      <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-2"></line>
      <h2 class="text-xl font-bold mb-5">CATEGORIES OF COVERAGE</h2>
      <p class="text-sm mb-5">
        We cover different categories from grains,
        fresh foods, livestock, packaged food items and seedlings.
      </p>

      <ul class="my-5">
        <li class="flex justify-start items-center">
          <img src="/src/assets/images/icons8-grains-64.png" class="w-14 mr-5" alt="">
          <p class="text-lg ml-10">Grains</p>
        </li>
        <li class="flex justify-start items-center mt-5">
          <img src="/src/assets/images/icons8-natural-food-80.png" class="w-14 mr-5" alt="">
          <p class="text-lg ml-10">Fresh Foods</p>
        </li>
        <li class="flex justify-start items-center mt-5">
          <img src="/src/assets/images/icons8-livestock-50.png" class="w-14 mr-5" alt="">
          <p class="text-lg ml-10">Livestock</p>
        </li>
        <li class="flex justify-start items-center mt-5">
          <img src="/src/assets/images/icons8-packing-50.png" class="w-14 mr-5" alt="">
          <p class="text-lg ml-10">Packaged Foods</p>
        </li>
        <li class="flex justify-start items-center mt-5">
          <img src="/src/assets/images/icons8-seeding-80.png" class="w-14 mr-5" alt="">
          <p class="text-lg ml-10">Seedlings & Chemicals</p>
        </li>
      </ul>
    </div>
    <div class="h-full">
      <img src="/src/assets/images/farmworkarea.png"
           class="h-full" alt=""
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "AgrovestoCategory"
}
</script>

<style scoped>

</style>