<template>
  <div class="relative swiperWidth">
    <Swiper
      class="drop-shadow-xl shadow-black"
      :modules="[SwiperNavigation, SwiperFreeMode]"
      :pagination="{ clickable: true }"
      :slides-per-view="'auto'"
      :space-between="24"
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
          :img="work.img"
          :url="work.url"
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
  url: string
  img: string
  content: string
  tag: string[]
}

defineProps<{ works: Work[] }>()
</script>

<style>
.swiper-slide {
  width: fit-content;
}

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
