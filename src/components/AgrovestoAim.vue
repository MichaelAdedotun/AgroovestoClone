<template>
    <main class="bg-aim-bg bg-no-repeat bg-cover bg-fixed bg-dark-gray py-14 px-6 md:px-8 lg:px-16 xl:px-20 md:py-24">
      <div class="text-white md:mb-16">
        <h1 class="text-2xl font-bold md:text-4xl xl:text-5xl">
          Building a Sustainable <br>
          Agriculture for a Better World.
        </h1>
        <p class="py-4 text-xs md:py-6 md:text-sm">
          Welcome to Agrovesto, a platform built for individuals 
          and Businesses to thrive and succeed in African Agricultural 
          Sector, <br>
          make food Available and Affordable for everyone
        </p>
      </div>

      <section class="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div class="bg-white">
          <div class="relative">
            <img class="h-52 w-full object-cover" src="/src/assets/images/farm1.png" alt="farm picture">
            <router-link to="">
              <span class="absolute bottom-0 right-0 bg-green-700 text-white font-semibold px-4 py-1 ">
                BUY NOW
                <i class="fa-solid fa-angle-right ml-2.5"></i>
              </span>
            </router-link>
          </div>
          <div class="p-5">
            <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-1"></line>
            <h2 class="text-gray-900 text-lg font-bold mb-5">BUY FARM PRODUCE</h2>
            <p class="text-gray-500 text-sm mb-6">
              Select from wide varieties of good quality farm produce at
              lower cost directly from our verified farmers all across Nigeria.
            </p>
          </div>
        </div>

        <div class="bg-white">
          <div class="relative">
            <img class="h-52 w-full object-cover" src="/src/assets/images/farm2.png" alt="farm picture">
            <router-link to="">
              <span class="absolute bottom-0 right-0 bg-green-700 text-white font-semibold px-4 py-1">
                TRADE NOW
                <i class="fa-solid fa-angle-right ml-2.5"></i>
              </span>
            </router-link>
          </div>
          <div class="p-5">
            <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-1"></line>
            <h2 class="text-gray-900 text-lg font-bold mb-5">TRADE COMMODITIES</h2>
            <p class="text-gray-500 text-sm mb-6">
              Individuals or Corporate investors can buy profitable crops
              like Grains during harvest, or store in our designated
              warehouse for future sale to make good profit. All processes done online.
            </p>
          </div>
        </div>

        <div class="bg-white">
           <div class="relative">
            <img class="h-52 w-full object-cover" src="/src/assets/images/farm3.png" alt="farm picture">
            <router-link to="">
              <span class="absolute bottom-0 right-0 bg-green-700 text-white font-semibold px-4 py-1">
                REQUEST NOW
                <i class="fa-solid fa-angle-right ml-2.5"></i>
              </span>
            </router-link>
          </div>
          <div class="p-5">
            <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-1"></line>
            <h2 class="text-gray-900 text-lg font-bold mb-5">LOGISTICS</h2>
            <p class="text-gray-500 text-sm mb-6">
              We provide fully tech-driven logistics and supply chain management
              for your farm produce from farm to point of delivery.
            </p>
          </div>
        </div>

        <div class="bg-white">
           <div class="relative">
            <img class="h-52 w-full object-cover" src="/src/assets/images/farm4.png" alt="farm picture">
            <router-link to="">
              <span class="absolute bottom-0 right-0 bg-green-700 text-white font-semibold px-4 py-1">
                JOIN NOW
                <i class="fa-solid fa-angle-right ml-2.5"></i>
              </span>
            </router-link>
          </div>
          <div class="p-5">
            <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-2"></line>
            <h2 class="text-gray-900 text-lg font-bold mb-5 leading-none">FARM PARTNER'S COMMUNITY</h2>
            <p class="text-gray-500 text-sm mb-6">
              We work with large community of smallholder farmers in Nigeria,
              you can join and make huge profit as a partner in crop production.
              Sponsor a farm to make profit
            </p>
          </div>
        </div>
      </section>

      <div>
        <h3 class="grid w-full place-items-center mt-20">
          <router-link class="text-white text-sm font-semibold bg-yellow-500 px-14 py-3 rounded-3xl" to="">
            GET STARTED
          </router-link>
        </h3>
      </div>
    </main>
</template>

<script>
export default {
  name: "AgrovestoAim"
}
</script>

<style scoped>

</style>