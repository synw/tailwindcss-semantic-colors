<template>
    <select id="theme-select" v-model="selectedTheme" class="p-2 border border-light rounded" @change="onThemeSwitch()">
        <option v-for="theme in themes" :value="theme" :selected="theme == store.theme">
            {{ theme }}
        </option>
    </select>
</template>

<script setup lang="ts">
import { setTheme, store } from '../state.js';
import { themes } from '../conf.js';
import { ref, toRaw } from 'vue';


const selectedTheme = ref(toRaw(store.value.theme));

function onThemeSwitch() {
    setTheme(selectedTheme.value);
}
</script>