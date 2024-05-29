<template>
  <div class="bg-white w-[320px] h-[400px] rounded-3xl cursor-pointer">
    <div class="bg-white w-[320px] h-[200px] rounded-3xl">
      <img
        src="/img/works.png"
        class="object-cover"
      >
    </div>
    <div class="p-6">
      <div class="text-gray-3 mb-4">
        {{ category }}
      </div>
      <div class="text-black mb-10">
        {{ content }}
      </div>
      <ul class="list-none flex p-0 flex-wrap text-sm text-gray-3">
        <li
          v-for="(item, index) in tag"
          :key="index"
          class="mr-1"
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
