<template>
  <div>
    <div
      class="backgroundTitle2"
      data-aos="flip-left"
    >
      Mission
    </div>
    <div class="border-b-solid bg-white mt-4 w-110px md:hidden" />
    <div
      class="mt-50px w-380px pt-140px md:block hidden"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1800"
    >
      <div
        class="text-5xl font-bold leading-13"
        v-html="companyText.mission.title"
      />
      <div class="border-b-solid bg-white h-1 mt-4" />
      <div
        class="mt-4"
        v-html="companyText.mission.contents"
      />
    </div>
    <div
      class="w-full mt-50px md:hidden"
    >
      <div
        class="text-2xl font-bold"
        v-html="companyText.mission.title"
      />
      <div
        class="mt-4"
        v-html="companyText.mission.contents"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { companyText } from '~/types/company'
</script>

<style>
.backgroundTitle2 {
  width: fit-content;
  margin-top: 32px;
  opacity: 1;
  font-size: 28px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .backgroundTitle2 {
    position: absolute;
    opacity: 0.15;
    font-size: 394px;
    font-weight: bold;
    left: -80px;
  }
}
</style>
