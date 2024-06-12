<template>
  <div
    class="flex justify-between"
    data-aos="zoom-out"
  >
    <div class="px-40">
      <img
        src="~/assets/svg/white.svg"
        alt="New tech order logo"
        width="320"
      >
    </div>
    <div class="w-[50%]">
      <div class="w-320px">
        <div
          class="text-5xl font-bold leading-13"
          v-html="companyText.logo.title"
        />
        <div class="border-b-solid bg-white h-1 mt-4" />
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
