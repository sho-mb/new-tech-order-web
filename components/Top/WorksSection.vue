<template>
  <div class="relative top-0">
    <h2 class="font-montserrat text-4xl">
      WORKS
    </h2>
    <p class="w-md">
      Our influencer marketing service harnesses the power of influencers to convey the allure of products and services, attracting customer interest.
    </p>

    <div class="mt-10">
      <TopWorksSwiper :works="works" />
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
