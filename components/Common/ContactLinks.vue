<template>
  <div class="md:flex">
    <div class="md:w-1/2 contactCard">
      <NuxtLink to="/contact/company">
        <div class="zoom-container company">
          <img
            src="/img/company.png"
            class="zoom-image"
          >
        </div>
        <div class="contactMessage">
          <h2 class="text-4xl">
            Contact<br>for Company
          </h2>
          <p class="font-bold">
            Get inference to work together <br>Let's get in touch
          </p>
        </div>
      </NuxtLink>
    </div>

    <div class="md:w-1/2 contactCard">
      <NuxtLink to="/contact/influencer">
        <div class="zoom-container influencer">
          <img
            src="/img/influencer.png"
            class="zoom-image"
          >
        </div>
        <div class="contactMessage">
          <h2 class="text-4xl">
            Contact<br>for influencer
          </h2>
          <p class="font-bold">
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
  width: 100%;
  height: 100%;
}

.company {
  border-radius: 45px 45px 0 0;
}

.influencer {
  border-radius: 0 0 45px 45px;
}

.zoom-image {
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
}

.zoom-image:hover {
  transform: scale(1.2);
}

.contactCard {
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.contactMessage {
  position: absolute;
  top: 10%;
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

  .contactMessage {
    position: absolute;
    top: 50%;
    margin-top: -20%;
    left: 20%;
    color: white;
  }
}
</style>
