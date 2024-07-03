<template>
  <div class="bg-white w-90% h-320px md:w-[320px] md:h-[400px] rounded-3xl cursor-pointer">
    <div class="h-150px md:w-[320px] rounded-3xl text-center">
      <NuxtLink
        :to="url"
        target="_blank"
      >
        <img
          :src="img"
          class="object-cover h-full p-4"
        >
      </NuxtLink>
    </div>
    <div class="p-3 md:mt-8 md:p-6">
      <div class="text-gray-3 mb-4">
        {{ category }}
      </div>
      <div class="text-black text-3 md:mb-10 md:text-4">
        {{ content }}
      </div>
      <ul class="list-none flex p-0 flex-wrap text-sm text-gray-3">
        <li
          v-for="(item, index) in tag"
          :key="index"
          class="mr-1 m-0"
        >
          {{ '#' + item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  category: {
    type: String,
  },
  url: {
    type: String,
  },
  img: {
    type: String,
  },
  content: {
    type: String,
  },
  tag: {
    type: Array as PropType<string[]>,
  },
})
</script>

<style>

</style>
