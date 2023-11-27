<template>
    <footer class="bg-footer-bg bg-no-repeat bg-left bg-dark-gray text-gray-400 py-10 px-6 md:px-8 lg:px-16 xl:px-20">
        <section class="grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-3 py-10">
            <div class="">
              <h2 class="text-white text-lg font-semibold">
                NEWSLETTER SUBSCRIBE
              </h2>
              <P class="my-5 text-sm">
                Subscribe to our newsletter <br>
                and we will inform you about <br>
                newest projects and promotions.
              </P>
              <form class="flex justify-start mt-7">
                <input class="px-5 py-2 text-sm bg-gray-500 rounded-tl rounded-bl outline-0" type="email" placeholder="Your email...">
                <a href="" class="px-3 py-2 bg-green-600 text-white text-sm rounded-tr rounded-br"><i class="fa-solid fa-envelope"></i></a>
              </form>
            </div>

            <div class="">
              <h2 class="text-white text-lg font-semibold mb-5">QUICK LINKS</h2>
              <ul>
                <li class="mb-3 text-sm"><i class="fa-solid fa-angle-right"></i><router-link class="ml-2.5 hover:text-green-600" to="">About us</router-link></li>
                <li class="mb-3 text-sm"><i class="fa-solid fa-angle-right"></i><router-link class="ml-2.5 hover:text-green-600" to="">Farm/Product Sourcing</router-link></li>
                <li class="mb-3 text-sm"><i class="fa-solid fa-angle-right"></i><router-link class="ml-2.5 hover:text-green-600" to="">Supply Chain Management</router-link></li>
                <li class="mb-3 text-sm"><i class="fa-solid fa-angle-right"></i><router-link class="ml-2.5 hover:text-green-600" to="">Warehousing</router-link></li>
                <li class="mb-3 text-sm"><i class="fa-solid fa-angle-right"></i><router-link class="ml-2.5 hover:text-green-600" to="">Company news</router-link></li>
                <li class="mb-3 text-sm"><i class="fa-solid fa-angle-right"></i><router-link class="ml-2.5 hover:text-green-600" to="">Online driver application</router-link></li>
                <li class="text-sm"><i class="fa-solid fa-angle-right"></i><router-link class="ml-2.5 hover:text-green-600" to="">Career</router-link></li>
              </ul>
            </div>

            <div class="">
              <h2 class="text-white text-lg font-semibold mb-5">CONTACT US</h2>
              <P>
                Plot 770 Innovation Plaza,
                Wuye, Abuja
              </P>
              <P class="my-2 text-white">
                +234 9010674515
              </P>
              <a href="" class="hover:text-green-600">
                info@agrovesto.com
              </a>
              <ul class="flex items-center mt-5">
                <li class="mr-2"><a class="py-2 px-3 bg-gray-600 rounded text-white hover:bg-green-600" href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li class="mr-2"><a class="py-2 px-2.5 bg-gray-600 rounded text-white hover:bg-green-600" href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li class="mr-2"><a class="py-2 px-2.5 bg-gray-600 rounded text-white hover:bg-green-600" href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li class="mr-2"><a class="py-2 px-2.5 bg-gray-600 rounded text-white hover:bg-green-600" href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a class="py-2 px-2.5 bg-gray-600 rounded text-white hover:bg-green-600" href=""><i class="fa-brands fa-whatsapp"></i></a></li>
              </ul>
            </div>
        </section>

      <p class="border-t border-t-gray-600 text-xs pl-4">Agrovesto.</p>
    </footer>
</template>

<script>
export default {
  name: "AgrovestoFooter"
}
</script>

<style scoped>

</style>