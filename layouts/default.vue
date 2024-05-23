<template>
<div class="container m-auto">
  <Header />
  <slot />
</div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [
    { property: 'og:title', content: `%s - ${route.meta.title}` },
    { property: 'og:description', content: 'New Tech Order website' },
    { name: 'description', content: 'New Tech Order website'}
]
})
</script>

<style>
body {
  font-family: 'Helvetica', sans-serif;
}
</style>