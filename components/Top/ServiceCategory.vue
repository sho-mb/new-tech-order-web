<template>
  <div class="mb-[100px]">
    <div class="mb-12">
      <h3 class="font-normal text-4 md:text-3xl mb-4">
        {{ serviceTitle }}
      </h3>
      <p
        class="text-3"
        v-html="serviceContent"
      />
    </div>
    <div class="flex flex-wrap justify-between ">
      <TopViewCard
        v-for="card in cards"
        :id="card.id"
        :key="card.id"
        :is-pop="card.isPop"
        :height="card.height"
        :width="card.width"
        :background-url="card.backgroundUrl"
        :title="card.title"
        @card-clicked="handleCardClicked"
      />
    </div>

    <Transition name="dialog">
      <dialog
        v-if="showModal"
        class="modal bg-black bg-op-95"
        :class="{ 'modal-open': showModal }"
      >
        <div class="modal-box text-gray-300 flex gap-14 w-6xl items-center">
          <div class="w-1/2">
            <img
              class="object-contain w-140 h-80"
              :src="data.url"
            >
          </div>
          <div class="w-1/2">
            <p class="text-4xl">
              {{ data.text }}
            </p>
            <p
              class="leading-normal"
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
      width: number
      height: number
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
