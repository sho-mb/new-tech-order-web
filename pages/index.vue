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
        <TopHeroImage />
        <div class="container mx-auto md:px-0">
          <TopCompanySection
            id="company"
            class="mt-8 md:mt-0"
          />
          <div class="w-[300px] border-b-solid md:w-6xl m-a mt-15" />
          <TopServiceSection
            id="service"
            class="mt-[50px] md:mt-[100px]"
          />
          <TopWorksSection id="works" />
          <TopLinkBanner class="mt-[50px] md:mt-[100px]" />
          <TopDocumentDownloadButton class="mt-[50px] md:mt-[100px]" />
          <CommonContactSection
            id="contact"
            class="mt-[20px] md:mt-[60px]"
          />
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
  background-position:0% 120%;
}

@media (min-width: 360px) {
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 360px;
  }
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }

  .background2 {
    background-position:20% 150%;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1240px) {
  .container {
    max-width: 1240px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1240px
  }
}
</style>
