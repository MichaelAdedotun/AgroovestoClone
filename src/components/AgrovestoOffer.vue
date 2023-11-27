<template>
    <section class="py-4 px-6 md:px-8 lg:px-16 xl:px-20 md:py-24">
      <div class="grid w-full place-items-center my-10 mt-16">
        <h1 class="text-3xl font-bold">What we Offer</h1>
        <p class="text-xs text-gray-500 mb-2">TAILORED SERVICES FOR AGRIBUSINESS OFFERINGS</p>
        <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400"></line>
      </div>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-7">
        <div class="bg-gray-50 flex justify-center place-items-center p-5 xl:p-7">
          <div class="w-1/4 mr-6">
            <img src="/src/assets/images/farmProduce.png" alt=""
                 class=""
            >
          </div>
          <div class="w-3/4">
            <h2 class="text-lg text-gray-800 font-bold mb-3 xl:mb-4 xl:text-2xl">
              Farm Produce Marketplace
            </h2>
            <p class="text-xs xl:text-sm">
              We offer varieties of farm produce directly from farm to buyers;
              Retailers, Agri-SMEs, Agro-processors, and commodity dealers/exporters
            </p>
          </div>
        </div>

        <div class="bg-gray-50 flex justify-center place-items-center p-5 xl:p-7">
          <div class="w-1/4 mr-6">
            <img src="/src/assets/images/agroCommodity.png" alt=""
                 class=""
            >
          </div>
          <div class="w-3/4">
            <h2 class="text-lg text-gray-800 font-bold mb-3 xl:mb-4 xl:text-2xl">
              Agro-commodity Trading
            </h2>
            <p class="text-xs xl:text-sm">
              We offer commodities trading oportunities on Agrovesto platform;
              you can buy/trade farm produce for profit.
            </p>
          </div>
        </div>

        <div class="bg-gray-50 flex justify-center place-items-center p-5 xl:p-7">
          <div class="w-1/4 mr-6">
            <img src="/src/assets/images/wareHouse.png" alt=""
                 class=""
            >
          </div>
          <div class="w-3/4">
            <h2 class="text-lg text-gray-800 font-bold mb-3 xl:mb-4 xl:text-2xl">
              Warehousing and Logistics
            </h2>
            <p class="text-xs xl:text-sm">
              We offer tailor-made warehousing receipt system and logistics for your produce.
              Individual or corporate who want wants to buy and make profit in grains during
              harvest can store produce, store/transport produce to designated location.
            </p>
          </div>
        </div>

        <div class="bg-gray-50 flex justify-center place-items-center p-5 xl:p-7">
          <div class="w-1/4 mr-6">
            <img src="/src/assets/images/farmFinancing.png" alt=""
                class="w-full object-cover"
            >
          </div>
          <div class="w-3/4">
            <h2 class="text-lg text-gray-800 font-bold mb-3 xl:mb-4 xl:text-2xl">
              Farm Financing
            </h2>
            <p class="text-xs xl:text-sm">
              We offer farm financing to smallholder farmers in our network to boost
              and scale food production across Africa.
            </p>
          </div>
        </div>
      </section>
    </section>
</template>

<script>
export default {
  name: "AgrovestoOffer"
}
</script>

<style scoped>

</style>