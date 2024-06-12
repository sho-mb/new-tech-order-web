<template>
  <div>
    <div
      class="backgroundTitle"
      data-aos="flip-up"
    >
      Vision
    </div>
    <div
      class="w-410px ml-33% pt-300px"
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
  </div>
</template>

<script lang="ts" setup>
import { companyText } from '~/types/company'
</script>

<style>
.backgroundTitle {
  position: absolute;
  opacity: 0.15;
  font-size: 394px;
  font-weight: bold;
  left: -80px;
}
</style>
