<template>
  <div class="mb-[100px]">
    <div class="mb-12">
      <h3 class="font-normal text-3xl mb-4">
        {{ serviceTitle }}
      </h3>
      <p
        class="text-4"
        v-html="serviceContent"
      />
    </div>
    <div class="flex flex-wrap justify-between">
      <TopViewCard
        v-for="card in cards"
        :id="card.id"
        :key="card.id"
        :is-pop="card.isPop"
        :background-url="card.backgroundUrl"
        :title="card.title"
        :height="card.height"
        @card-clicked="handleCardClicked"
      />
    </div>

    <Transition name="dialog">
      <dialog
        v-if="showModal"
        class="modal bg-black bg-op-95"
        :class="{ 'modal-open': showModal }"
      >
        <div class="modal-box text-gray-300 xl:flex xl:gap-14 md:w-70% xl:w-6xl xl:items-center">
          <div class="xl:w-1/2 w-full m-a">
            <img
              class="object-contain md:w-full xl:w-140 xl:h-80"
              :src="data.url"
            >
          </div>
          <div class="xl:w-1/2 w-full m-a">
            <p class="md:text-4xl lg:text-5xl xl:text-4xl">
              {{ data.text }}
            </p>
            <p
              class="leading-normal md:text-xl lg:text-2xl xl:text-4"
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
      height: number
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
