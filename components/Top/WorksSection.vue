<template>
  <div class="relative top-0">
    <h2 class="font-montserrat md:text-4xl">
      WORKS
    </h2>
    <p class="text-3 md:text-4">
      Our influencer marketing service harnesses the power of influencers to convey the allure of products and services, attracting customer interest.
    </p>

    <div class="mt-10">
      <TopWorksSwiper
        :works="works"
        class="hidden md:block"
      />
      <TopWorksSwiperMobile
        :works="works"
        class="md:hidden"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/navigation'
import { works } from '~/types/works'
</script>

<style>

</style>
