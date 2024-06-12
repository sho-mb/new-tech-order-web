<template>
  <div class="bg-black fixed w-full z-3 py-2">
    <div class="container m-auto flex justify-between items-center max-w-[1240px] md:px-0">
      <CommonCompanyLogo />
      <div class="flex gap-4">
        <CommonContactButton
          button-title="Get in touch"
          class="hidden md:block"
        />
        <CommonHamburgerMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
