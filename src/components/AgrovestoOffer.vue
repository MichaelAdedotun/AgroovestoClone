<template>
    <section class="my-14 px-28">
      <div class="grid w-full place-items-center my-10 mt-16">
        <h1 class="text-3xl font-bold">What we Offer</h1>
        <p class="text-xs text-gray-500 mb-2">TAILORED SERVICES FOR AGRIBUSINESS OFFERINGS</p>
        <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400"></line>
      </div>
      <section class="grid grid-cols-2 gap-7">
        <div class="bg-gray-50 flex p-10">
          <img src="/src/assets/images/farmProduce.png" alt=""
               class="w-24 mr-5"
          >
          <section class="ml-3">
            <h2 class="text-2xl text-gray-800 font-bold mb-4">
              Farm Produce Marketplace
            </h2>
            <p class="text-sm">
              We offer varieties of farm produce directly from farm to buyers;
              Retailers, Agri-SMEs, Agro-processors, and commodity dealers/exporters
            </p>
          </section>
        </div>

        <div class="bg-gray-50 flex p-10">
          <img src="/src/assets/images/agroCommodity.png" alt=""
               class="w-24 mr-5"
          >
          <section class="ml-3">
            <h2 class="text-2xl text-gray-800 font-bold mb-4">
              Agro-commodity Trading
            </h2>
            <p class="text-sm">
              We offer commodities trading oportunities on Agrovesto platform;
              you can buy/trade farm produce for profit.
            </p>
          </section>
        </div>

        <div class="bg-gray-50 flex p-10">
          <img src="/src/assets/images/wareHouse.png" alt=""
               class="w-24 mr-5"
          >
          <section class="ml-3">
            <h2 class="text-2xl text-gray-800 font-bold mb-4">
              Warehousing and Logistics
            </h2>
            <p class="text-sm">
              We offer tailor-made warehousing receipt system and logistics for your produce.
              Individual or corporate who want wants to buy and make profit in grains during
              harvest can store produce, store/transport produce to designated location.
            </p>
          </section>
        </div>

        <div class="bg-gray-50 flex p-10">
           <img src="/src/assets/images/farmFinancing.png" alt=""
                class="w-20 h-2/3 mr-5 mt-3"
           >
          <section class="ml-3">
            <h2 class="text-2xl text-gray-800 font-bold mb-4">
              Farm Financing
            </h2>
            <p class="text-sm">
              We offer farm financing to smallholder farmers in our network to boost
              and scale food production across Africa.
            </p>
          </section>
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