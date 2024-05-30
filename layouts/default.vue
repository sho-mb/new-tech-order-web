<template>
  <div>
    <HeaderNav />
    <div
      class="background"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <div
        class="background2"
        :style="{ backgroundImage: `url(${backgroundFlip})` }"
      >
        <slot />
        <FooterNav />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import background from '~/public/img/background.jpg'
import backgroundFlip from '~/public/img/backgroundFlip.png'

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
  background: #110806;
}

.background, .background2 {
  width: 100vw;
  height: 4800px;
  background-repeat: no-repeat;
  background-size:contain;
}

.background {
  background-position:50% 0%;
}

.background2 {
  background-position:50% 110%;
}
</style>
