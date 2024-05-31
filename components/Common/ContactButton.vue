<template>
  <div class="">
    <button class="text-light-50 rounded-full py-2 px-6 bg-white bg-opacity-15 border border-white">
      <a href="/#contact">{{ buttonTitle }}</a>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  buttonTitle: String,
})
</script>

<style>

</style>
