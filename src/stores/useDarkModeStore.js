// src/stores/useDarkModeStore.js
import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
    state: () => {
        return {
            isDarkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
        };
    },
    actions: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
        },
    },
});
