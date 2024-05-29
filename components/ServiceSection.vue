<template>
  <div>
    <h2 class="font-montserrat text-4xl">
      Service
    </h2>
    <ServiceCategory
      v-for="service in services"
      :key="service.serviceTitle"
      :service-title="service.serviceTitle"
      :service-content="service.serviceContent"
      :cards="service.cards"
    />
  </div>
</template>

<script lang="ts" setup>
import { services as data } from '~/types/cards'

const initialData = {
  serviceTitle: '',
  serviceContent: '',
  cards: [{
    id: 0,
    isPop: false,
    height: 0,
    width: 0,
    backgroundUrl: '',
    title: '',
  }],
}
const services = ref([initialData])
services.value = data
</script>

<style>

</style>
