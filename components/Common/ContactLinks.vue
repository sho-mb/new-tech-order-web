<template>
  <div class="flex">
    <div class="w-1/2 contactCard ">
      <NuxtLink to="/contact/company">
        <div class="zoom-container company">
          <img
            src="/img/company.png"
            class="zoom-image"
          >
        </div>
        <div class="contactMessage">
          <h2 class="text-5 md:text-4xl">
            Contact<br>for Company
          </h2>
          <p class="font-bold hidden md:block">
            Get inference to work together <br>Let's get in touch
          </p>
        </div>
      </NuxtLink>
    </div>

    <div class="w-1/2 contactCard">
      <NuxtLink to="/contact/influencer">
        <div class="zoom-container influencer">
          <img
            src="/img/influencer.jpg"
            class="zoom-image"
          >
        </div>
        <div class="contactMessage">
          <h2 class="text-5 md:text-4xl">
            Contact<br>for influencer
          </h2>
          <p class="font-bold hidden md:block">
            Work together to get opportunities <br>Let's get in touch
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.zoom-container {
  overflow: hidden;
  margin: auto;
  width: 100%;
  height: 160px;
  border: white 1px solid;
}
.company {
   border-radius: 24px 0 0 24px;
  }

  .influencer {
    border-radius: 0 24px 24px 0;
  }

.zoom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}

.zoom-image:hover {
  transform: scale(1.2);
}

.contactCard {
  position: relative;
  z-index: 2;
}

.contactMessage {
    position: absolute;
    top: 50%;
    margin-top: -20%;
    left: 20%;
    color: white;
  }

@media (min-width: 768px) {
  .company {
   border-radius: 45px 0 0 45px;
  }

  .influencer {
    border-radius: 0 45px 45px 0;
  }

  .zoom-container {
    overflow: hidden;
    margin: auto;
    width: 100%;
    height: 100%;
    border: white 1px solid;
  }
}
</style>
