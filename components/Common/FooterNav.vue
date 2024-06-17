<template>
  <div class="relative">
    <div class="w-full md:h-[450px] backgroundFooter flex justify-center items-center">
      <div class="container max-w-[1240px]">
        <div class="md:flex py-24">
          <div class="xl:flex xl:justify-between w-[45%] items-start">
            <div>
              <CommonCompanyLogo class="hidden md:block" />
              <div class="mt-1 ml-2 flex md:block">
                <NuxtLink
                  class="text-white"
                  target="_blank"
                  href="https://www.instagram.com/newtechorder_official?igsh=em50MDlqa3cxcw%3D%3D&utm_source=qr"
                >
                  <div class="i-fa-brands:instagram w-1em h-1em mr-2" />
                </NuxtLink>
                <NuxtLink
                  class="text-white"
                  target="_blank"
                  href="https://www.facebook.com/share/y3SZZNaHFQGgE2cV/?mibextid=LQQJ4d"
                >
                  <div class="i-fa-brands:facebook w-1em h-1em" />
                </NuxtLink>
              </div>
            </div>
            <div class="hidden md:block md:mt-4 xl:mt-0">
              <div>Phnom penh, Cambodia 120100 </div>
              <div class="mt-2">
                Smart : +855 87 625 206
              </div>
            </div>
          </div>
          <div class="md:flex md:justify-between mt-4 md:mt-0">
            <div class="md:ml-20">
              <ul class="list-none m-0 p-0">
                <li><a href="/#top">Top</a></li>
                <li><a href="/#company">Company</a></li>
                <li><a href="/#service">Service</a></li>
                <li><a href="/#works">Works</a></li>
                <li class="m-0">
                  <a href="/#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div class="ml-20 xl:ml-40 mt-4 md:mt-0">
              <div>Our corporate company page</div>
              <div class="mt-4 text-md">
                <div class="i-heroicons:arrow-top-right-on-square-20-solid w-1em h-1em" />
                POP
              </div>
            </div>
          </div>
        </div>
        <div class="md:text-right text-left pb-4 md:pb-0">
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
