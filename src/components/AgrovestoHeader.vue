<template>
  <header class="bg-white sticky top-0 border-y border-b-gray-300 shadow-lg z-10">
    <section class="py-2 px-6 md:px-8 lg:px-16 xl:px-20 flex justify-between items-center ">
      <div>
        <router-link to=""><img src="/src/assets/images/logo3.png" class="w-36 object-cover" alt="Agrovesto logo"></router-link>
      </div>
      <ul class="hidden md:flex font-semibold text-gray-700 text-sm">
        <li class=""><router-link class="pb-4 hover:border-b-green-600 hover:border-b-2" to="/">HOME</router-link></li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-2" to="/about">ABOUT</router-link></li>
        <li class="ml-7 relative cursor-pointer group">
          <div class="group" onclick="">
            <div>
              <a class="pb-6 hover:border-b-green-600 hover:border-b-2">
                SERVICES
              </a>
            </div>
            <div class="invisible absolute z-50 bg-white top-11 w-48 border rounded shadow-xl group-hover:visible">
              <ul>
                <li class="mx-3 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Buy Farm Produce</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Trade Commodities</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Farm Financing</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Source Product</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Warehousing</a></li>
                <li class="mx-3 mt-2 py-2">
                  <a class="hover:text-green-500" href="">Logistics</a>
                  <span></span>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-2" to="">BLOG</router-link></li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-2" to="/login">LOGIN | REGISTER</router-link></li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-2" to="/contact">CONTACT</router-link></li>
      </ul>
      <div class="text-3xl md:hidden" @click="open">
        <button><i class="fa-solid fa-bars"></i></button>
      </div>
    </section>

<!--    Mobile nav section-->
    <section class="absolute w-1/2 md:hidden right-0" v-if="option">
      <ul class="bg-white py-5 px-5 font-semibold text-gray-700 text-sm">
        <li class="py-1 pl-2 border-b border-gray-700" @click="open"><router-link class="hover:text-green-500" to="/">HOME</router-link></li>
        <li class="py-1 pl-2 border-b border-gray-700" @click="open"><router-link class="hover:text-green-500" to="/about">ABOUT</router-link></li>
        <li class="py-1 pl-2 border-b border-gray-700 group relative">
          <div class="" onclick="">
            <div>
              <a class="hover:text-green-500 cursor-pointer">
                SERVICES
              </a>
            </div>
            <div class="invisible absolute z-50 bg-white top-[29px] w-full border rounded shadow-xl group-hover:visible">
              <ul>
                <li class="mx-3 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Buy Farm Produce</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Trade Commodities</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Farm Financing</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Source Product</a></li>
                <li class="mx-3 mt-2 py-2 border-b border-b-gray-300"><a class="hover:text-green-500" href="">Warehousing</a></li>
                <li class="mx-3 mt-2 py-2">
                  <a class="hover:text-green-500" href="">Logistics</a>
                  <span></span>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="py-1 pl-2 border-b border-gray-700" @click="open"><router-link class="hover:text-green-500" to="">BLOG</router-link></li>
        <li class="py-1 pl-2 border-b border-gray-700" @click="open"><router-link class="hover:text-green-500" to="/login">LOGIN | REGISTER</router-link></li>
        <li class="py-1 pl-2 border-b border-gray-700" @click="open"><router-link class="hover:text-green-500" to="/contact">CONTACT</router-link></li>
      </ul>
    </section>
  </header>
</template>

<script>
  export default {
    name: 'AgrovestoHeader',

    data(){
      return{
        option: false
      }
    },

    methods: {
      open(){
        this.option = ! this.option
      }
    }
  }

</script>

<style scoped>

</style>