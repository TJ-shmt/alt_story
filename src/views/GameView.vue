<template>
  <div class="gamebox">
    <div id="story-area" class="game-left">
      <p
        id="visual-text"
        :aria-label="currentPathData.text.screenreader"
        :title="currentPathData.text.alt"
        tabindex="0"
      >
        {{ currentPathData.text.visual }}
      </p>
      <p id="screenreader-text">{{ darkModeStore.isDarkMode }}</p>
    </div>
    <div id="interactive-area" class="game-right">
      <div id="desicions">
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
        <choice-button
          row-class="row-1"
          button-text="CHOICE "
          button-id="Choice1"
          :routeToID="currentPathData.choices.first.routeToID"
          :title="currentPathData.choices.first.alt"
          :labelText="currentPathData.choices.first.screenreader"
        />
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
        <choice-button
          row-class="row-2"
          button-text="CHOICE 02"
          button-id="Choice2"
          :routeToID="currentPathData.choices.second.routeToID"
          :title="currentPathData.choices.second.alt"
          :labelText="currentPathData.choices.second.screenreader"
        />
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
        <choice-button
          row-class="row-3"
          button-text="CHOICE 03"
          button-id="Choice3"
          :routeToID="currentPathData.choices.third.routeToID"
          :title="currentPathData.choices.third.alt"
          :labelText="currentPathData.choices.third.screenreader"
        />
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
      </div>
      <div id="options">
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
        <div id="options-box">
          <div class="option-block">
            <button class="option-button font-size font-size-up" />
            <div class="state-block font-size font-size-current"></div>
            <button class="option-button font-size font-size-down" />
          </div>
          <div class="option-block">
            <button class="option-button screenreader deactivated" />
            <div class="state-block">
              <span>Act.</span>
            </div>
          </div>
          <div class="option-block">
            <button class="option-button dark-mode" @click="toggleDarkMode" />
            <div
              class="state-block"
              :class="{ active: darkModeStore.isDarkMode }"
            >
              <span>{{ darkModeStore.isDarkMode ? "ON" : "OFF" }}</span>
            </div>
          </div>
          <div class="option-block">
            <button class="option-button" @click="toggleState('Lang.')" />
            <div class="state-block" :class="{ active: currentL }">
              <span>{{ currentL ? "ON" : "OFF" }}</span>
            </div>
          </div>
        </div>
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue"; // , onMounted
import { useRoute } from "vue-router";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import gameData from "@/assets/gamepath.json";
import ChoiceButton from "@/components/ChoiceButton.vue";
import PlusIcon from "@/components/vueIcons/PlusIcon.vue";
//const router = useRouter();
const route = useRoute();

// Game Data
const currentPathID = ref(route.params.path as string);
const currentPathData = computed(() => {
  const loadData = gameData[currentPathID.value as keyof typeof gameData];
  if (!loadData) {
    return gameData.error;
  }
  return loadData;
});
// Watch for changes in the route parameter
watch(
  () => route.params.path as string,
  (newPathID) => {
    currentPathID.value = newPathID;
    console.log("New Path: " + newPathID);
  }
);
// Font Size Button
//const currentSize = ref(true);
// Screenreader Button
//const activeSR = ref(true);
// Darkmode Button
const darkModeStore = useDarkModeStore();
const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
  document.documentElement.classList.toggle(
    "dark-theme",
    darkModeStore.isDarkMode
  );
};
// Lang.
const currentL = ref(false);
const toggleState = (buttonType: string) => {
  currentL.value = !currentL.value;
  console.log(buttonType + ": " + currentL.value);
};
</script>

<style lang="scss" scoped>
.deko-line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  height: 24px;

  fill: currentColor;
  color: var(--off-text-32);

  .size {
    width: 24px;
  }
}

#options {
  display: flex;
  flex-direction: column;
  gap: 8px;

  $offset: 36px;
  $offset-position: calc($offset / 2);
  background-repeat: no-repeat;
  background-size: calc(100% - $offset) calc(100% - $offset);
  background-position: $offset-position $offset-position;
  $stripe-thickness: 26px;
  background-image: repeating-linear-gradient(
    45deg,
    var(--off-text-8),
    var(--off-text-8) $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );
}
#options-box {
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  .option-block {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 4px;

    .option-button {
      z-index: 1;
      border: none;
      height: 64px;
      width: 64px;
      background-color: var(--off-text-100);
      color: var(--off-100);
      cursor: pointer;

      clip-path: polygon(
        0 0,
        0 100%,
        calc(100% - 12px) 100%,
        100% calc(100% - 12px),
        100% 0
      );

      &:hover {
        color: var(--off-text-64);
        background-color: var(--off-text-16);
      }
      &.deactivated,
      .deactivated:hover {
        color: var(--off-text-64);
        background-color: var(--off-text-32);

        cursor: not-allowed;
      }
      /*
      &.font-size-up {
      }
      &.screenreader {
      }
      */
      backdrop-filter: brightness(100%) blur(3px);
    }
    .font-size {
      box-sizing: border-box;
      height: 32px;
    }
    .state-block {
      z-index: 0;

      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 4px;
      height: 32px;
      font-weight: 600;
      background-color: var(--off-text-16);

      &.active {
        color: var(--off-text-remain);
        background-color: var(--acent-primary);
        filter: drop-shadow(0 0 4px var(--shadow-acent-primary));
      }

      backdrop-filter: brightness(100%) blur(12px);
    }
  }
}

.gamebox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  max-width: calc(100vw - 12px);
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  margin-top: 84px;
  //background-color: var(--off-text-8);
  height: calc(100vh - 138px);
}

#story-area {
  height: 100%;
  max-width: 600px;
  min-width: 450px;
  margin: 6px;
  background-color: var(--off-text-16);

  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 48px) 100%,
    100% calc(100% - 50px),
    100% 0
  );
}

#interactive-area {
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
  height: 100%;
  max-width: 600px;
  min-width: 400px;
  margin: 6px;

  //background-color: var(--off-text-8);
  .button-row {
    margin: 0 32px 0 32px;
  }
}

#desicions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.button-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 32px;
}

.grids {
  width: 45px;
  min-height: 56px;
  //
  $stripe-thickness: 12px;
  background-image: repeating-linear-gradient(
    45deg,
    var(--off-text-16),
    var(--off-text-16) $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );
  //
}
</style>
