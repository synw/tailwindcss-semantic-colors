<template>
  <div class="flex flex-col h-full w-full background">
    <div class="w-full prim flex justify-center p-3 items-center flex-row space-x-5">
      <div>
        <button class="btn sec" @click="toggleDarkMode()">{{
          store.darkMode === true ? 'Normal mode' : 'Dark mode'
          }}</button>
      </div>
      <div>Theme: <ThemeSwitcher></ThemeSwitcher>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <StyleGuide></StyleGuide>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import StyleGuide from './components/StyleGuide.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import { initState, store, toggleDarkMode } from './state.js';

onBeforeMount(() => initState())
</script>

<style lang="css">
@import "./styles/global.css";
</style>

<style lang="scss">
@use "./scss/main.scss";
</style>
