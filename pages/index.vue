<template>
  <div>
    <HeroImage />
    <div class="container mx-auto max-w-[1240px]">
      <CompanySection id="company" />
      <div class="border-b-solid w-6xl m-a mt-15" />
      <ServiceSection
        id="service"
        class="mt-[100px]"
      />
      <WorksSection id="works" />
      <LinkBanner class="mt-[100px]" />
      <ContactSection class="mt-[60px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Top Page',
})
</script>

<style></style>
