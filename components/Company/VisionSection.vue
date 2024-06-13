<template>
  <div>
    <div
      class="backgroundTitle1"
      data-aos="flip-up"
    >
      Vision
    </div>
    <div class="border-b-solid bg-white mt-4 w-90px md:hidden" />

    <div
      class="mt-50px w-410px ml-33% pt-300px md:block hidden"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1800"
    >
      <div
        class="text-5xl font-bold"
        v-html="companyText.vision.title"
      />
      <div class="border-b-solid bg-white h-1 mt-4" />
      <div
        class="mt-4"
        v-html="companyText.vision.contents"
      />
    </div>
    <div
      class="w-full mt-50px md:hidden"
    >
      <div
        class="text-2xl font-bold"
        v-html="companyText.vision.title"
      />
      <div
        class="mt-4 w-90%"
        v-html="companyText.vision.contents"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { companyText } from '~/types/company'
</script>

<style>
.backgroundTitle1 {
  width: fit-content;
  margin-top: 32px;
  opacity: 1;
  font-size: 28px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .backgroundTitle1 {
    position: absolute;
    opacity: 0.15;
    font-size: 394px;
    font-weight: bold;
    left: -80px;
  }
}
</style>
