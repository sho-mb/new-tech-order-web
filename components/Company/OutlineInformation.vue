<template>
  <div class="xl:flex xl:justify-between">
    <h2 class="text-4xl md:text-6xl font-montserrat m-0">
      Outline
    </h2>

    <div class="w-full xl:w-[60%] mt-20 xl:mt-0">
      <div
        v-for="info in informations"
        :key="info.head"
      >
        <div class="border-b-solid border-b-white" />
        <div class="flex items-center py-6 justify-between">
          <div class="text-14px md:text-xl md:mr-30 font-semibold">
            {{ info.head }}
          </div>
          <div class="text-14px md:text-xl w-[60%]">
            {{ info.data }}
          </div>
        </div>
      </div>
      <div class="border-b-solid border-b-white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const informations = [
  { head: 'Company name', data: 'New Tech Order' },
  { head: 'Established', data: '22 FEB 2024' },
  { head: 'Address', data: 'PTH Modern apartment #22D st.368,BKK3,Phnompenh ,Cambodia' },
  { head: 'CEO', data: 'Outa Fujita' },
  { head: 'Bussiness', data: 'Marketing / Production / Influencer' },
  { head: 'Contact', data: 'outa0608@ntwcambodia.com' },
]
</script>

<style>

</style>
