<template>
  <div class="container py-20 max-w-[1240px]">
    <ContactCompanyForm v-if="currentPath === 'company'" />
    <ContactInfluencerForm v-else-if="currentPath === 'influencer'" />
    <div v-else>
      Error
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRoute()
const currentPath = ref()

if (router.params.path)
  currentPath.value = router.params.path
</script>

<style>

</style>
