<template>
  <section>
    <div class="relative">
      <img src="/src/assets/images/ocean-page-title08.jpg" alt="ocean view">
      <h2 class="absolute grid w-full place-items-center bottom-24 text-4xl font-bold">
        Register
      </h2>
    </div>

    <div class="flex px-28 py-16">
      <section class="w-1/2">
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

      <section class="ml-10 mt-4">
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