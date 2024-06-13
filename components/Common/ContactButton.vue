<template>
  <div class="">
    <a
      href="/#contact"
      class="btn btn-contact"
    >
      <svg
        width="277"
        height="62"
      >
        <defs>
          <linearGradient id="grad1">
            <stop
              offset="0%"
              stop-color="#FF8292"
            />
            <stop
              offset="100%"
              stop-color="#A40000"
            />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          rx="25"
          fill="none"
          stroke="url(#grad1)"
          width="240"
          height="42"
        />
      </svg>
      <span>Get in touch with us</span>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  buttonTitle: String,
})
</script>

<style>
.btn-contact {
    position: relative;
    display: inline-block;
    width: 220px;
    height: 32px;
    font-size: 1em;
    font-weight: normal;
    line-height: 52px;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration:none;
    font-size:14px;
    letter-spacing: 0.045em;
}

.btn-contact svg {
  position: absolute;
  top: 0;
  left: 0;
}

.btn-contact svg rect {
  stroke-width: 2;
  stroke-dasharray: 380, 0;
  stroke-dashoffset: 0;
  -webkit-transition: all 600ms ease;
  transition: all 600ms ease;
}

.btn-contact span{
  background: rgb(255,130,130);
  background: -moz-linear-gradient(left,  hsl(0, 0%, 97%) 0%, hsl(0, 0%, 97%) 100%);
  background: -webkit-linear-gradient(left,  hsl(0, 0%, 97%) 0%,hsl(0, 0%, 97%)100%);
  background: linear-gradient(to right,  hsl(0, 0%, 97%) 0%,hsl(0, 0%, 97%)100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8282', endColorstr='#e178ed',GradientType=1 );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-contact:hover svg rect {
    stroke-width: 2;
    stroke-dasharray: 196, 472;
    stroke-dashoffset: 410;
}
</style>
