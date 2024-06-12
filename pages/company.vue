<template>
  <div>
    <CompanyHeroImage />
    <div class="container">
      <CompanyVisionSection />
      <CompanyMissionSection class="mt-40px" />
      <CompanyDetail class="mt-[100px]" />
      <CompanyOutlineInformation class="mt-[100px]" />
      <TopLinkBanner class="mt-[100px]" />
      <CommonContactSection class="mt-[60px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'About Campany Page',
})
</script>

<style></style>
