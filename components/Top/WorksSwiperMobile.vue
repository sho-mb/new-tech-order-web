<template>
  <div class="relative swiperWidth">
    <Swiper
      :width="280"
      :modules="[SwiperEffectCoverflow]"
      :slides-per-view="1"
      :centered-slides="true"
      :effect="'coverflow'"
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
</style>
