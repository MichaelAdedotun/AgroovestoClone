<template>
  <header class="bg-white sticky top-0 border-y border-b-gray-300 shadow-lg ">
    <section class="my-5 mx-28 flex justify-between items-center">
      <div>
        <router-link to=""><img src="/src/assets/images/logo3.png" alt="Agrovesto logo"></router-link>
      </div>
      <ul class="flex font-semibold text-gray-700 text-sm">
        <li class=""><router-link class="pb-4 hover:border-b-green-600 hover:border-b-4" to="/">HOME</router-link></li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-4" to="/about">ABOUT</router-link></li>
        <li
            class="dropdown  ml-7 relative"
        >
          <a
              class="cursor-pointer pb-4 hover:border-b-green-600 hover:border-b-4"
          >
            SERVICES
            <ul
                class="dropdown-content  absolute bg-white top-14 w-48 border rounded shadow-xl"
            >
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
          </a>
        </li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-4" to="">BLOG</router-link></li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-4" to="/login">LOGIN | REGISTER</router-link></li>
        <li class="ml-7"><router-link class="pb-4 hover:border-b-green-600 hover:border-b-4" to="/contact">CONTACT</router-link></li>
      </ul>
    </section>
  </header>
</template>

<script>
  export default {
    name: 'AgrovestoHeader',

  }
</script>

<style scoped>


.dropdown .dropdown-content{
  display: none;
}

.dropdown:hover .dropdown-content{
  display: block;
}

</style>