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
        <div class="option-block">
          <button class="option-button font-size font-size-up" />
          <div class="font-size font-size-current"></div>
          <button class="option-button font-size font-size-down" />
        </div>
        <div class="option-block">
          <button class="option-button screenreader" />
          <div>Act.</div>
        </div>
        <div class="option-block">
          <button class="option-button dark-mode" />
          <div>Act.</div>
        </div>
        <div class="option-block">
          <button class="option-button" />
          <div>Act.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ChoiceButton from "@/components/ChoiceButton.vue";
import PlusIcon from "@/components/vueIcons/PlusIcon.vue";
export default {
  components: { ChoiceButton, PlusIcon },
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
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  .option-block {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 4px;

    .font-size {
      box-sizing: border-box;
      height: 32px;
    }
  }
}

.option-button {
  border: solid $off-black-64 2px;
  height: 64px;
  width: 64px;
  &.font-size-up {
  }
  &.screenreader {
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
  height: 100%;
  max-width: 600px;
  min-width: 450px;
  margin: 6px;

  //background-color: $off-black-8;
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
