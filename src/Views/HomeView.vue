<template>
  <AgrovestoAim />
  <AgrovestoOffer />
  <AgrovestoCategory />
</template>

<script>
export default {
  name: "HomeView",
  components: {
    AgrovestoAim,
    AgrovestoOffer,
    AgrovestoCategory,
  },
}

import AgrovestoAim from "../components/AgrovestoAim.vue";
import AgrovestoOffer from "../components/AgrovestoOffer.vue";
import AgrovestoCategory from "../components/AgrovestoCategory.vue";
</script>

<style scoped>

</style>