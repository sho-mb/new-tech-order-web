<template>
  <div>
    <div
      class="background"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <div
        class="background2"
        :style="{ backgroundImage: `url(${backgroundFlip})` }"
      >
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import background from '~/public/img/background.jpg'
import backgroundFlip from '~/public/img/backgroundFlip.png'

definePageMeta({
  title: 'Top Page',
})
</script>

<style>
.background, .background2 {
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-size:contain;
}

.background {
  background-position:0% 0%;
}

.background2 {
  background-position:20% 150%;
}
</style>
