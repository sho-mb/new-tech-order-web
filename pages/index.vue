<template>
  <div>
    <h1 class="font-montserrat">Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>
    <NuxtLink to="/campany">Go to campany page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Top Page'
})
</script>

<style>

</style>