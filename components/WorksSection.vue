<template>
  <div class="relative top-0">
    <h2 class="font-montserrat text-4xl">
      WORKS
    </h2>
    <p class="w-md">
      Our influencer marketing service harnesses the power of influencers to convey the allure of products and services, attracting customer interest.
    </p>

    <div class="mt-10">
      <WorksSwiper :works="works" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/navigation'

const works = [
  {
    id: 1,
    category: 'Influencer marketing',
    content: 'New cloth brand “JAMBO” launch in Cambodia helped marketing and fashion show',
    tag: ['fashion', 'SNS', 'model', 'idols', 'inflencer'],
  },
  {
    id: 2,
    category: 'Influencer marketing',
    content: 'New cloth brand “JAMBO” launch in Cambodia helped marketing and fashion show',
    tag: ['fashion', 'SNS', 'model', 'idols', 'inflencer'],
  },
  {
    id: 3,
    category: 'Influencer marketing',
    content: 'New cloth brand “JAMBO” launch in Cambodia helped marketing and fashion show',
    tag: ['fashion', 'SNS', 'model', 'idols', 'inflencer'],
  },
  {
    id: 4,
    category: 'Influencer marketing',
    content: 'New cloth brand “JAMBO” launch in Cambodia helped marketing and fashion show',
    tag: ['fashion', 'SNS', 'model', 'idols', 'inflencer'],
  },
  {
    id: 5,
    category: 'Influencer marketing',
    content: 'New cloth brand “JAMBO” launch in Cambodia helped marketing and fashion show',
    tag: ['fashion', 'SNS', 'model', 'idols', 'inflencer'],
  },
  {
    id: 6,
    category: 'Influencer marketing',
    content: 'New cloth brand “JAMBO” launch in Cambodia helped marketing and fashion show',
    tag: ['fashion', 'SNS', 'model', 'idols', 'inflencer'],
  },
  {
    id: 7,
    category: 'Influencer marketing',
    content: 'New cloth brand “JAMBO” launch in Cambodia helped marketing and fashion show',
    tag: ['fashion', 'SNS', 'model', 'idols', 'inflencer'],
  },
]
</script>

<style>

</style>
