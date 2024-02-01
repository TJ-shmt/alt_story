// src/stores/useDarkModeStore.js
import { defineStore } from "pinia";

export const useSettings = defineStore("darkMode", {
  state: () => {
    return {
      isDarkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
      useScreenreader:
        JSON.parse(localStorage.getItem("useScreenreader")) || false,
      isJapanese: JSON.parse(localStorage.getItem("isJapanese")) || false,
      currentSize: 16,
    };
  },
  actions: {
    hardReset() {
      // Darkmode
      this.isDarkMode = false;
      localStorage.setItem("darkMode", JSON.stringify(this.isDarkMode));
      // Font Size
      this.currentSize = 16;
      // Language
      this.isJapanese = false;
      // Confirmation
      console.log("");
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(this.isDarkMode));
    },
    fontSizeUp(increment) {
      const newSize = this.currentSize + increment;
      if (newSize >= 12 && newSize <= 20) {
        this.currentSize = newSize;
      }
    },
    fontSizeDown(increment) {
      const newSize = this.currentSize - increment;
      if (newSize >= 12 && newSize <= 20) {
        this.currentSize = newSize;
      }
    },
    resetSize() {
      this.currentSize = 16;
    },
    toggleLanguage() {
      this.isJapanese = !this.isJapanese;
      console.log("Language set to Japanese: " + this.isJapanese);
    },
    toggleScreenreader() {
      this.useScreenreader = !this.useScreenreader;
      localStorage.setItem(
        "useScreenreader",
        JSON.stringify(this.useScreenreader)
      );
      console.log("Screenreader Mode: " + this.useScreenreader);
    },
  },
});
