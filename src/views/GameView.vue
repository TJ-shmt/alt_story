<template>
  <div class="gamebox">
    <div id="story-area" class="game-left">
      <p
        aria-label="This text is different from what you could read!"
        tabindex="0"
      >
        here should be some text
      </p>
      <p aria-label="I dont want to be read upon!" tabindex="0">
        here should be some text
      </p>
      <p>some other test text lets see</p>
    </div>
    <div id="interactive-area" class="game-right">
      <div id="desicions">
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
        <choice-button
          row-class="row-1"
          button-text="CHOICE "
          label="Choose Option 1. This option is Good."
          button-id="Choice1"
          :goTo="'You chose option 1'"
          :title="'Title 1'"
        />
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
        <choice-button
          row-class="row-2"
          button-text="CHOICE 02"
          label="Choose Option 2. This option is Neutral."
          button-id="Choice2"
          :goTo="'You chose option 2'"
          :title="'Title 2'"
        />
        <div class="deko-line">
          <plus-icon class="size" /><plus-icon class="size" />
        </div>
        <choice-button
          row-class="row-3"
          button-text="CHOICE 03"
          label="Choose Option 3. This option is Bad."
          button-id="Choice3"
          :goTo="'You chose option 3'"
          :title="'Title 3'"
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
            <button class="option-button dark-mode" />
            <div class="state-block">
              <span>Act.</span>
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
import { ref } from "vue";
import ChoiceButton from "@/components/ChoiceButton.vue";
import PlusIcon from "@/components/vueIcons/PlusIcon.vue";
// Font Size Button
const currentSize = ref(true);
// Screenreader Button
const activeSR = ref(true);
// Darkmode Button
const activeDM = ref(true);
// Lang.
const currentL = ref(true);
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
  color: $off-black-32;

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
    $off-black-8,
    $off-black-8 $stripe-thickness,
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
      background-color: $off-black;
      color: $off-white;
      cursor: pointer;

      clip-path: polygon(
        0 0,
        0 100%,
        calc(100% - 12px) 100%,
        100% calc(100% - 12px),
        100% 0
      );

      &:hover {
        color: $off-black-64;
        background-color: $off-black-16;
      }
      &.deactivated,
      .deactivated:hover {
        color: $off-black-64;
        background-color: $off-black-32;

        cursor: not-allowed;
      }
      &.font-size-up {
      }
      &.screenreader {
      }

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
      background-color: $off-black-16;

      &.active {
        color: $off-white;
        background-color: $light-coral;
        filter: drop-shadow(0 0 4px $light-coral-light);
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
  //background-color: $off-black-8;
  height: calc(100vh - 138px);
}

#story-area {
  height: 100%;
  max-width: 600px;
  min-width: 450px;
  margin: 6px;
  background-color: $off-black-16;

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

  //background-color: $off-black-8;
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
    $off-black-16,
    $off-black-16 $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );
  //
}
</style>
