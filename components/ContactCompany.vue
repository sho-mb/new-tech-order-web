<template>
  <div class="flex h-full==">
    <div class="w-1/2 relative overflow-hidden z-2">
      <div class="zoom-container company">
        <img
          src="/img/company.png"
          class="zoom-image"
        >
      </div>
      <div class="absolute top-50% mt-[-20%] left-20%">
        <h2 class="text-4xl">
          Contact<br>for Company
        </h2>
        <p class="font-bold">
          Get inference to work together <br>Let's get in touch
        </p>
      </div>
    </div>

    <div class="w-1/2 relative overflow-hidden z-2">
      <div class="zoom-container influencer">
        <img
          src="/img/influencer.png"
          class="zoom-image"
        >
      </div>
      <div class="absolute top-50% mt-[-20%] left-20%">
        <h2 class="text-4xl">
          Contact<br>for influencer
        </h2>
        <p class="font-bold">
          Work together to get opportunities <br>Let's get in touch
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.zoom-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.company {
  border-radius: 45px 0 0 45px;
}

.influencer {
  border-radius: 0 45px 45px 0;
}

.zoom-image {
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
}

.zoom-image:hover {
  transform: scale(1.2);
}
</style>
