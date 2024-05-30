<template>
  <div class="relative">
    <div class="w-full h-[450px] backgroundFooter flex justify-center items-center">
      <div class="container max-w-[1240px]">
        <div class="flex py-24">
          <div class="flex justify-between w-[45%] items-start">
            <div>
              <CompanyLogo />
              <div class="mt-1 ml-2">
                <NuxtLink
                  class="text-white"
                  target="_blank"
                  href="https://www.instagram.com/newtechorder_official/"
                >
                  <div class="i-fa-brands:instagram w-1em h-1em mr-2" />
                </NuxtLink>
                <NuxtLink
                  class="text-white"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61557019373984&locale=ja_JP"
                >
                  <div class="i-fa-brands:facebook w-1em h-1em" />
                </NuxtLink>
              </div>
            </div>
            <div>
              <div>Phnom penh, Cambodia 120100 </div>
              <div class="mt-2">
                Smart : +855 87 625 206
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="ml-20">
              <ul class="list-none m-0">
                <li><a href="#top">Top</a></li>
                <li><a href="#company">Company</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#works">Works</a></li>
                <li class="m-0">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div class="ml-40">
              <div>Our corporate company page</div>
              <div class="mt-2 text-md">
                <div class="i-heroicons:arrow-top-right-on-square-20-solid w-1em h-1em" />
                POP
              </div>
            </div>
          </div>
        </div>
        <div class="text-right">
          <small>©NEW TECH ORDER inc. all rights reserved.</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.backgroundFooter {
  background: #A40000;
}

a {
  text-decoration: none;
  color: white;
}

li {
  margin-bottom: 16px;
}
</style>
