<template>
  <div class="gamebox">
    <div
      id="story-area"
      class="game-left"
      :class="{ 'show-gradient': showGradient }"
      ref="storyArea"
      tabindex="-1"
      @scroll="checkScroll"
      :title="currentPathData.text.alt"
    >
      <div
        class="text-wrap"
        :aria-label="currentPathData.text.screenreader"
        tabindex="0"
      >
        <p
          id="visual-text"
          :aria-label="currentPathData.text.screenreader"
          :style="{ fontSize: settings.currentSize + 'px' }"
          v-for="(line, index) in dynamicText"
          :key="index"
          tabindex="-1"
        >
          {{ line }}
        </p>
      </div>
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
            <button
              class="option-button font-size font-size-up"
              @click="fontSizeUp(4)"
            >
              <up-icon />
            </button>
            <div class="state-block font-size font-size-current">
              aA: {{ sizeStore.currentSize }}
            </div>
            <button
              class="option-button font-size font-size-down"
              @click="fontSizeDown(4)"
            >
              <down-icon />
            </button>
          </div>
          <div class="option-block">
            <button
              class="option-button screenreader deactivated"
              title="Can only be changed by an Admin"
            >
              <speaker-icon />
            </button>
            <div
              class="state-block"
              :class="{ active: darkModeStore.useScreenreader }"
            >
              <span>{{ darkModeStore.useScreenreader ? "ON" : "OFF" }}</span>
            </div>
          </div>
          <div class="option-block">
            <button class="option-button dark-mode" @click="toggleDarkMode">
              <darkmode-icon />
            </button>
            <div
              class="state-block"
              :class="{ active: darkModeStore.isDarkMode }"
            >
              <span>{{ darkModeStore.isDarkMode ? "ON" : "OFF" }}</span>
            </div>
          </div>
          <div class="option-block">
            <button class="option-button" @click="toggleState('Lang.')">
              <language-icon />
            </button>
            <div
              class="state-block"
              :class="{ active: languageStore.isJapanese }"
            >
              <span>{{ languageStore.isJapanese ? "日本語" : "ENG" }}</span>
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
import { ref, watch, computed, onMounted } from "vue"; // , onMounted
import { useRoute } from "vue-router";
import { useSettings } from "@/stores/useSettings";
import gameData from "@/assets/gamepath.json";
import ChoiceButton from "@/components/ChoiceButton.vue";
import PlusIcon from "@/components/vueIcons/PlusIcon.vue";
import UpIcon from "@/components/vueIcons/UpIcon.vue";
import DownIcon from "@/components/vueIcons/DownIcon.vue";
import LanguageIcon from "@/components/vueIcons/LanguageIcon.vue";
import DarkmodeIcon from "@/components/vueIcons/DarkmodeIcon.vue";
import SpeakerIcon from "@/components/vueIcons/SpeakerIcon.vue";
//const router = useRouter();
const route = useRoute();
const settings = useSettings();

// Story area Logic
const storyArea = ref(null);
const showGradient = ref(true);

const checkScroll = () => {
  if (storyArea.value) {
    const { scrollTop, scrollHeight, clientHeight } = storyArea.value;
    showGradient.value = scrollTop + clientHeight < scrollHeight;
  }
};

onMounted(() => {
  window.addEventListener("resize", checkScroll);
  checkScroll();
});

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
const sizeStore = useSettings();
const fontSizeUp = (increment: number) => {
  sizeStore.fontSizeUp(increment);
  console.log(sizeStore.currentSize);
};
const fontSizeDown = (decrement: number) => {
  sizeStore.fontSizeDown(decrement);
  console.log(sizeStore.currentSize);
};
const dynamicText = computed(() => {
  const sizeKey = `size${settings.currentSize}`;

  if (settings.isDarkMode && settings.currentSize === 16) {
    if (settings.isJapanese) {
      return currentPathData.value.text.visual.darkmodeJap;
    } else {
      return currentPathData.value.text.visual.darkmode;
    }
  } else if (settings.isJapanese && settings.currentSize === 16) {
    return currentPathData.value.text.visual.japanese;
  }
  return currentPathData.value.text.visual[sizeKey];
});
// Screenreader Button
//const activeSR = ref(true);
// Darkmode Button
const darkModeStore = useSettings();
const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
  document.documentElement.classList.toggle(
    "dark-theme",
    darkModeStore.isDarkMode
  );
};
// Lang.
const languageStore = useSettings();
const toggleState = () => {
  languageStore.toggleLanguage();
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
      display: flex;
      align-content: center;
      justify-content: center;
      padding-left: 12px;
      padding-right: 12px;

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
  box-sizing: border-box;
  height: 100%;
  max-width: 450px;
  min-width: 450px;
  margin: 6px;
  background-color: var(--off-text-16);
  padding: 12px;
  // shape
  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 48px) 100%,
    100% calc(100% - 50px),
    100% 0
  );
  // text
  text-align: left;
  overflow-y: scroll;
  word-wrap: break-word;
  white-space: normal;

  &#story-area::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 150px; /* Adjust the height as needed */
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      var(--off-64)
    ); /* Adjust colors to match your design */
    pointer-events: none; /* Make the gradient non-interactive */
  }
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
