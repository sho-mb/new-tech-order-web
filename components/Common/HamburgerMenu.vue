<template>
  <div class="self-center">
    <button
      class="hamburger-button"
      :class="{ open: isOpen }"
      @click="toggleMenu"
    >
      <span class="hamburger-icon" />
      <span class="hamburger-icon" />
      <span class="hamburger-icon" />
    </button>
    <Transition name="humberger">
      <nav
        v-if="isOpen"
        class="hamburger-menu"
      >
        <div
          class="out-box"
          @click="toggleMenu"
        >
          <ul class="p-0">
            <li><a href="/#top">Top</a></li>
            <li><a href="/#company">Company</a></li>
            <li><a href="/#service">Service</a></li>
            <li><a href="/#works">Works</a></li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 2;
}

.hamburger-button:hover .hamburger-icon:nth-child(1){
  transform: translate(-12px, 0px);
}

.hamburger-button:hover .hamburger-icon:nth-child(3){
  transform: translate(12px, 0px);
}

.hamburger-icon {
  width: 24px;
  height: 2px;
  background-color: #f9f9f9;
  border-radius: 3px;
  transition: all 0.5s ease;
  position: relative;
}

.hamburger-button.open .hamburger-icon:nth-child(1) {
  transform: rotate(45deg) translate(4px, 7px);
}

.hamburger-button.open .hamburger-icon:nth-child(2) {
  transform: rotate(360deg) scale(0);
  opacity: 0;
}

.hamburger-button.open .hamburger-icon:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -7px);
}

.hamburger-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(28, 28, 28);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 0.9;
}

.humberger-enter-active,
.humberger-leave-active {
  transition: opacity 0.4s ease;
}

.humberger-enter,
.humberger-leave-to {
  opacity: 0;
}

.out-box {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hamburger-menu ul {
  list-style: none;
  text-align: center;
}

.hamburger-menu li {
  font-size: x-large;
  padding: 20px;
}

.hamburger-menu li a {
  text-decoration: none;
  color: #f1f1f1;
}

@media (min-width: 768px) {
  .hamburger-icon {
    width: 28px;
    height: 2px;
    background-color: #f9f9f9;
    border-radius: 3px;
    transition: all 0.5s ease;
    position: relative;
  }
}
</style>
