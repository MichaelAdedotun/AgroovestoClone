<template>
  <section>
    <div class="bg-[url('/src/assets/images/ocean-page-title08.jpg')] bg-cover bg-no-repeat bg-center py-32 px-16 md:px-32 grid w-full place-items-center">
      <h2 class="bottom-28 text-3xl md:bottom-20 lg:bottom-24 md:text-4xl font-bold text-gray-900">
        Register
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-8 md:py-16 lg:px-16 xl:px-20">
      <section class="">
        <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-1"></line>
        <h2 class="text-2xl font-bold mb-10">SIGN UP WITH AGROVESTO</h2>

        <form class="my-5">
          <label for="text" class="text-sm ">Register as:</label>
          <select name="type" id="type"
                  class="w-full border border-gray-300 rounded text-sm outline-0 px-5 py-2.5 mb-5 mt-2"
          >
            <option class="text-sm" value="">Select a Registration Type</option>
            <option class="text-sm" value="">Individual</option>
            <option class="text-sm" value="">Business</option>
          </select>
          
          <label for="password" class="flex flex-col w-full mb-5 text-sm">
            Password:
            <input type="email" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>
          <label for="text" class="flex flex-col w-full mb-5 text-sm">
            Referral Code:
            <input type="text" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>

         <div class="flex justify-end">
           <button class="px-10 py-3 bg-green-600 text-white text-sm font-semibold rounded-full">SUBMIT</button>
         </div>
        </form>
      </section>

      <section class="flex flex-col place-items-center md:place-items-start">
        <p class="text-sm mb-2 text-gray-600">Already have an account?</p>
        <h3 class="text-sm text-green-600 hover:text-blue-800"><router-link to="/login">Login</router-link></h3>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>

</style>