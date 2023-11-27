<template>
  <section>
    <div class="bg-[url('/src/assets/images/ocean-page-title08.jpg')] bg-cover bg-no-repeat bg-center py-32 px-16 md:px-32 grid w-full place-items-center">
      <h2 class="bottom-28 text-3xl md:bottom-20 lg:bottom-24 md:text-4xl font-bold text-gray-900">
        Contact
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-8 md:py-16 lg:px-16 xl:px-20">
      <section class="">
        <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-1"></line>
        <h2 class="text-xl font-bold mb-7">YOUR ENQUIRY</h2>
        <p class="text-sm text-gray-600 ">
          For all enquiries about any of our services, you can reach out to
          us directly via the company information or send your request to us
          by filling the form below.
        </p>

        <form class="my-5 text-gray-600">
          <label for="text" class="text-sm">Your request:</label>
          <select name="type" id="type"
                  class="w-full border border-gray-300 rounded text-sm outline-0 px-5 py-2.5 mb-5 mt-2"
          >
            <option class="text-sm" value="">Logistics</option>
            <option class="text-sm" value="">By Produce</option>
            <option class="text-sm" value="">Trade</option>
            <option class="text-sm" value="">Farm Financing</option>
            <option class="text-sm" value="">Others</option>
          </select>
          <label for="text" class="flex flex-col w-full mb-5 text-sm">
            First Name:
            <input type="text" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>
          <label for="text" class="flex flex-col w-full mb-5 text-sm">
            Last Name:
            <input type="text" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>
          <label for="email" class="flex flex-col w-full mb-5 text-sm">
            Email:
            <input type="email" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>
          <label for="text" class="flex flex-col w-full mb-5 text-sm">
            Message:
            <textarea class="w-full h-36 rounded outline-0 px-5 border border-gray-300 mt-2">

            </textarea>
          </label>

          <div class="flex justify-end mt-5">
            <button class="px-10 py-3 bg-green-600 text-white text-sm font-semibold rounded-full">SUBMIT</button>
          </div>
        </form>
      </section>

      <section class="hidden md:block">
        <line class="flex border border-yellow-400 w-12 h-1 bg-yellow-400 mb-1"></line>
        <h2 class="text-lg font-bold mb-7">COMPANY INFORMATION</h2>
        <p class="text-sm mb-2 text-gray-600">
          Plot 770 Innovation Plaza, <br>
          Wuye, Abuja
        </p>
        <span class="my-2 text-sm text-green-500 block">
          +234 9010674515
        </span>
        <a href="#" class="text-sm text-gray-600 hover:text-blue-600">
          info@agrovesto.com
        </a>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactView"
}
</script>

<style scoped>

</style>