<template>
  <div class="flex justify-between">
    <h2 class="text-6xl font-montserrat m-0">
      Outline
    </h2>

    <div class="w-[60%]">
      <div
        v-for="info in informations"
        :key="info.head"
      >
        <div class="border-b-solid border-white" />
        <div class="flex items-center py-6 justify-between">
          <div class="text-xl mr-30 font-semibold">
            {{ info.head }}
          </div>
          <div class="text-xl w-[60%]">
            {{ info.data }}
          </div>
        </div>
      </div>
      <div class="border-b-solid border-white" />
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
