<template>
  <div>
    <CommonHeaderNav />
    <slot />
    <CommonFooterNav />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [
    { property: 'og:title', content: `%s - ${route.meta.title}` },
    { property: 'og:description', content: 'New Tech Order website' },
    { name: 'description', content: 'New Tech Order website' },
  ],
})
</script>

<style>
body {
  font-family: "Helvetica", sans-serif;
  margin: 0;
  color: rgb(239, 239, 239);
  height: 100%;
  background: #050202;
}
</style>
