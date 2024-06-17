<template>
  <div
    class="md:flex justify-between"
    data-aos="zoom-in"
  >
    <div class="md:px-20 lg:px-30 xl:px-40 text-center">
      <img
        src="~/assets/svg/white.svg"
        alt="New tech order logo"
        class="w-160px md:w-180px lg:w-200px xl:w-320px"
      >
    </div>
    <div class="md:w-[50%] mt-80px md:mt-0">
      <div class="md:w-340px xl:w-320px md:text-left">
        <div
          class="text-2xl md:text-4xl lg:text-5xl font-bold md:leading-13"
          v-html="companyText.logo.title"
        />
        <div class="border-b-solid bg-white w-125px md:w-full md:h-1 mt-4" />
        <div
          class="mt-4"
          v-html="companyText.logo.contents"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { companyText } from '~/types/company'
</script>

<style>

</style>
