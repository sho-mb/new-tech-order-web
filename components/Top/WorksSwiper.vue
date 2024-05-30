<template>
  <div class="relative swiperWidth">
    <Swiper
      class="drop-shadow-xl shadow-black"
      :modules="[SwiperEffectCreative, SwiperNavigation, SwiperFreeMode]"
      :pagination="{ clickable: true }"
      :space-between="70"
      :slides-per-view="3.8"
      :free-mode="true"
      :navigation="true"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '24px',
      }"
    >
      <SwiperSlide
        v-for="work in works"
        :key="work.id"
      >
        <TopWorksCard
          :category="work.category"
          :content="work.content"
          :tag="work.tag"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
interface Work {
  id: number
  category: string
  content: string
  tag: string[]
}

defineProps<{ works: Work[] }>()
</script>

<style>
.swiperWidth {
  width: calc(100% + (100vw - 100%) / 2);
}

.swiper-button-next:after {
  background-color: black;
  padding: 16px 24px;
  border-radius: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.swiper-button-next:hover:after {
  opacity: 0.8;
}

.swiper-button-prev:after {
  background-color: black;
  padding: 16px 24px;
  border-radius: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.swiper-button-prev:hover:after {
  opacity: 0.8;
}
</style>
