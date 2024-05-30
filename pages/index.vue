<template>
  <div>
    <HeroImage />
    <div class="container mx-auto max-w-[1240px]">
      <CompanySection />
      <div class="border-b-solid w-6xl m-a mt-15" />
      <ServiceSection class="mt-[100px]" />
      <WorksSection />
      <LinkBanner />
      <ContactSection class="mt-[100px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Top Page',
})
</script>

<style></style>
