<template>
    <section>
      <div class="bg-[url('/src/assets/images/ocean-page-title08.jpg')] bg-cover bg-no-repeat bg-center py-32 px-16 md:px-32 grid w-full place-items-center">
        <h2 class="bottom-28 text-3xl md:bottom-20 lg:bottom-24 md:text-4xl font-bold text-gray-900">
          Login
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-8 md:py-16 lg:px-16 xl:px-20">
        <section>
          <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-1"></line>
          <h2 class="text-2xl font-bold mb-10">LOGIN</h2>

          <form class="my-5">
            <label for="email" class="flex flex-col w-full mb-5 text-sm">
              Email:
              <input type="email" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
            </label>
            <label for="password" class="flex flex-col w-full mb-5 text-sm">
              Password:
              <input type="password" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
            </label>

            <div class="flex justify-between items-start mt-5">
              <section>
                <h3 class="text-sm mb-2 hover:text-blue-800"><router-link to="">Forgot your password?</router-link></h3>
                <label for="checkbox" class="text-sm">
                  <input type="checkbox" aria-checked="true"> Remember me
                </label>
              </section>
              <button class="px-10 py-3 bg-green-600 text-white text-sm font-semibold rounded-full">SUBMIT</button>
            </div>
          </form>
        </section>

        <section class="flex flex-col place-items-center md:place-items-start">
          <p class="text-sm mb-2 text-gray-600">Don't have an account?</p>
          <h3 class="text-sm text-green-600 hover:text-blue-800"><router-link to="/register">Register</router-link></h3>
        </section>
      </div>
    </section>
</template>

<script>
export default {
  name: "loginView"
}
</script>

<style scoped>

</style>