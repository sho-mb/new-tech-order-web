<template>
  <div data-aos="zoom-in">
    <div
      class="group group-hover:cursor-pointer"
      @click="handleClick"
    >
      <div
        class="rounded-[32px] relative border-white border-solid w-full md:h-full h-240px overflow-hidden"
      >
        <img
          :src="backgroundUrl"
          style="object-fit: cover;"
          class="w-full h-fullb md:h-240px lg:h-290px xl:h-390px"
        >
        <div
          class="w-full h-full hover:bg-op-30 hover:bg-black group-hover:duration-300 top-0 left-0 absolute"
        />
        <div class="absolute text-3 top-5 left-5 md:top-6 md:left-6 lg:top-8 lg:left-8 md:text-3 lg:text-4">
          Service-0{{ id }}
        </div>
        <div
          class="absolute bottom-6 left-6 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 text-3 md:text-xl lg:text-3xl xl:text-4xl font-800"
          v-html="title"
        />

        <div
          v-if="isPop"
          class="w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 rounded-full bg-black bg-op-20 absolute right-4 bottom-4 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 border-solid"
        >
          <div class="i-charm-arrow-right text-white text-xl md:text-2xl lg:text-4xl absolute m-a top-0 right-0 bottom-0 left-0 group-hover:animate-flash" />
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
