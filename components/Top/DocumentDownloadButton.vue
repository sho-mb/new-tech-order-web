<template>
  <div class="text-center">
    <a
      href="/docs/POP service docs.pdf"
      class="btn btn--orange btn-c drop-shadow font-bold"
      download
    ><i class="i-charm-notes" />Download Document</a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
a.btn--orange {
  color: #eeeded;
  background-color: #880505;
}

a.btn--orange:hover {
  color: #fff;
  background: #c00202;
}

a.btn-c {
  font-size: 1rem;
  position: relative;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  border-radius: 100vh;
}

a.btn-c .i-charm-notes {
  margin-right: 1rem;
}

@media (min-width: 640px) {
    a.btn-c {
    font-size: 1.8rem;
    position: relative;
    padding: 1.5rem 2rem 1.5rem 2rem;
    border-radius: 100vh;
  }
}
</style>
