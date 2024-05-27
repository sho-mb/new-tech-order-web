<template>
  <div class="bg-black py-2">
    <div class="container m-auto flex justify-between items-center">
      <div class="flex items-center">
        <img
          width="50"
          src="~/assets/svg/white.svg"
          alt="New tech order logo"
        >
        <div class="tracking-widest">
          <div class="font-bold">
            EW TECH ORDER
          </div>
          <div class="text-xs">
            CAMBODIA
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <ContactButton button-title="Get in touch" />
        <HamburgerMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
