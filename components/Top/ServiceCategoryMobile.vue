<template>
  <div class="mb-25px">
    <div class="mb-8">
      <h3 class="font-normal text-4 mb-4">
        {{ serviceTitle }}
      </h3>
      <p
        class="text-3"
        v-html="serviceContent"
      />
    </div>
    <div>
      <Swiper
        :width="280"
        :modules="[SwiperEffectCoverflow]"
        :slides-per-view="1"
        :centered-slides="true"
        :effect="'coverflow'"
      >
        <SwiperSlide
          v-for="card in cards"
          :key="card.id"
        >
          <TopViewCard
            :id="card.id"
            :key="card.id"
            :is-pop="card.isPop"
            :background-url="card.backgroundUrl"
            :title="card.title"
            @card-clicked="handleCardClicked"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <Transition name="dialog">
      <dialog
        v-if="showModal"
        class="modal bg-black bg-op-95"
        :class="{ 'modal-open': showModal }"
      >
        <div class="modal-box text-gray-300">
          <div class="w-80% m-a">
            <p class="text-2xl">
              {{ data.text }}
            </p>
            <p
              class="text-sm"
              v-html="data.content"
            />
          </div>
        </div>
        <div
          class="w-full h-full absolute"
          @click="handleDialogClicked"
        />
      </dialog>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { servicesDetail } from '~/types/cards'

defineProps({
  serviceTitle: {
    type: String,
    required: true,
  },
  serviceContent: {
    type: String,
    required: true,
  },
  cards: {
    type: Array as PropType<Array<{
      id: number
      isPop: boolean
      backgroundUrl: string
      title: string
    }>>,
    required: true,
    default: () => [],
  },
})
const showModal = ref(false)
const array = ref(servicesDetail)
const data = ref({
  text: '',
  content: '',
  url: '',
})

const handleCardClicked = (id: number, isClicked: boolean) => {
  showModal.value = isClicked
  data.value = array.value[id - 1]
}

const handleDialogClicked = () => {
  showModal.value = false
}
</script>

<style>
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.5s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}
</style>
