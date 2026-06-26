import { useStorage } from '@vueuse/core';

const store = useStorage<{ theme: string }>('store', {
    theme: "bluestar"
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

export {
    initState, setTheme, store
};
