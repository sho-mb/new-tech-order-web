<template>
  <div data-aos="zoom-in">
    <div
      class="group group-hover:cursor-pointer"
      @click="handleClick"
    >
      <div
        class="rounded-[32px] relative border-white border-solid w-full h-full overflow-hidden"
      >
        <img
          :src="backgroundUrl"
          class="w-full"
          :height="height"
        >
        <div
          class="w-full h-full hover:bg-op-30 hover:bg-black group-hover:duration-300 top-0 left-0 absolute"
        />
        <div class="absolute text-3 top-5 left-5 md:top-8 md:left-8 md:text-4">
          Service-0{{ id }}
        </div>
        <div
          class="absolute bottom-6 left-6 md:left-8 md:bottom-8 text-3 md:text-4xl font-800"
          v-html="title"
        />

        <div
          v-if="isPop"
          class="w-9 h-9 md:w-14 md:h-14 rounded-full bg-black bg-op-20 absolute right-4 bottom-4 md:right-8 md:bottom-8 border-solid"
        >
          <div class="i-charm-arrow-right text-white text-xl md:text-4xl absolute m-a top-0 right-0 bottom-0 left-0 group-hover:animate-flash" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: Number,
  isPop: Boolean,
  backgroundUrl: String,
  title: String,
  height: Number,
})

const emit = defineEmits(['cardClicked', 'isClicked'])

const handleClick = () => {
  if (props.id !== 1) {
    emit('cardClicked', props.id, true)
  }
  else {
    navigateTo('https://www.instagram.com/pop_influencer_kh/', { external: true, open: {
      target: '_blank',
    } })
  }
}
</script>

<style>
 .swiper-wrapper{
  align-items: center;
 }
</style>
