<template>
  <div class="flex flex-col h-full w-full">
    <div class="w-full prim text-center p-3">
      Theme: <ThemeSwitcher></ThemeSwitcher>
    </div>
    <div class="w-full h-full">
      <StyleGuide></StyleGuide>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import StyleGuide from './components/StyleGuide.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import { initState } from './state.js';

onBeforeMount(() => initState())
</script>

<style lang="css">
@import "./styles/global.css";
</style>

<style lang="scss">
@use "./scss/main.scss";
</style>
