<template>
  <div>
    <TopMainTitleAnimation />
    <div class="text-3 w-full md:text-4 lg:text-5 lg:w-80% xl:w-60% mt-6 md:mt-0">
      <p>To create a Next Cambodia that has never been seen before,</p>
      <p> we will continue to evolve and innovate.</p>
      <p> As technology advances, the form of media constantly changes. </p>
      <p>In an era where individuals can initiate movements</p>
      <p>and change the world, we will continue to drive these movements forward.</p>
      <div class="mt-8 md:text-5 w-fit">
        <div class="btnLearnMore">
          <NuxtLink
            to="/company"
            class="learn-more-link  text-white"
          >
            Learn more
            <i class="i-ep-arrow-right-bold" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.btnLearnMore {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 0.8rem;
  position: relative;
  padding: 0.6rem 1rem;
  border-radius: 100vh;
  color: #eeeded;
  background-color: #981616;
}

.btnLearnMore:hover {
  background-color: #c22929;
  color: #ffffff;
}

.learn-more-link {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* アイコンとテキストの間隔 */
  transition: color 0.3s, transform 0.3s;
}

.btnLearnMore:hover i {
  animation: moveRight 0.3s forwards;
}

@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(5px);
  }
}

@media (min-width: 768px) {
  .btnLearnMore {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>
