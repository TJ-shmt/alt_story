<template>
  <div class="admin-settings">
    <div class="options">
      <div class="option-row">
        <button class="hard-reset" @click="hardReset()">Hard Reset</button>
        <div class="state" />
      </div>
      <div class="option-row">
        <button class="" @click="settings.toggleLanguage()">
          Change Language
        </button>
        <div class="state">
          {{ settings.isJapanese ? "Japanese" : "English" }}
        </div>
      </div>
      <div class="option-row">
        <button class="" @click="toggleDarkMode()">Toggle Darkmode</button>
        <div class="state">Darkmode: {{ settings.isDarkMode }}</div>
      </div>
      <div class="option-row">
        <button class="" @click="settings.resetSize()">Reset Font Size</button>
        <div class="state">Current Font Size: {{ settings.currentSize }}</div>
      </div>
      <div class="option-row">
        <button class="" @click="settings.toggleScreenreader()">
          Toggle Screenreader Mode
        </button>
        <div class="state">{{ settings.useScreenreader }}</div>
      </div>
      <div class="option-row">
        <button class=""></button>
        <div class="state"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettings } from "@/stores/useSettings";
const settings = useSettings();

const toggleDarkMode = () => {
  settings.toggleDarkMode();
  document.documentElement.classList.toggle("dark-theme", settings.isDarkMode);
};
const hardReset = () => {
  settings.hardReset();
  document.documentElement.classList.toggle("dark-theme", settings.isDarkMode);
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: left;
  align-content: center;
  border: none;

  background-color: var(--off-text-64);
  color: var(--off-100);

  padding: 8px;
  width: 200px;

  &:hover {
    background-color: var(--off-text-32);
    color: var(--off-text-100);
  }
}
.admin-settings {
  max-width: 500px;
  margin: auto;
  padding: 12px;
}
.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.option-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: solid black 3px;
}
</style>
