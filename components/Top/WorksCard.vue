<template>
  <div class="bg-white w-90% h-350px md:w-[320px] md:h-[400px] rounded-3xl cursor-pointer">
    <div class="w-full h-165px md:w-[320px] rounded-3xl">
      <img
        src="/img/works.png"
        class="object-cover w-full"
      >
    </div>
    <div class="p-3 mt-8 md:p-6">
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
