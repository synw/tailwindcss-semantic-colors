import { useStorage } from '@vueuse/core';

const store = useStorage<{ theme: string, darkMode: boolean }>('store', {
    theme: "bluestar",
    darkMode: false,
});

function initState() {
    setTheme()
}

function setTheme(t?: string) {
    const currentTheme = store.value.theme;
    store.value.theme = t ?? currentTheme;
    const th = document.getElementsByTagName("html")[0];
    //console.log("Current theme", currentTheme);
    //console.log("Switching to theme:", store.value.theme);
    th?.classList.remove("theme-" + currentTheme);
    th?.classList.add("theme-" + store.value.theme);
}

function toggleDarkMode() {
    const th = document.getElementsByTagName("html")[0];
    if (store.value.darkMode) {
        th?.classList.remove("dark");
    } else {
        th?.classList.add("dark");
    }
    store.value.darkMode = !store.value.darkMode;
}

export {
    initState, setTheme, toggleDarkMode, store
};
