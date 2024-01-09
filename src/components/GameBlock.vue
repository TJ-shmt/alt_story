<template>
  <div class="game-block">
    <story-display :text="storyText" />
    <div class="choices-container">
      <choice-button
        v-for="(option, index) in options"
        :key="index"
        :text="option.text"
        @choose="onChoice(option.nextId)"
      />
    </div>
    <div>
      <p class="p1">ALT=(STORY)</p>
      <p class="p2">ALT=(STORY)</p>
      <p class="p3">ALT=(STORY)</p>
      <p class="p4">ALT=(STORY)</p>
      <p class="p5">ALT=(STORY)</p>
      <p class="p6">ALT=(STORY)</p>
    </div>
  </div>
</template>

<script>
import StoryDisplay from "./StoryDisplay.vue";
import ChoiceButton from "./ChoiceButton.vue";

export default {
  components: {
    StoryDisplay,
    ChoiceButton,
  },
  props: {
    storyText: String,
    options: Array,
  },
  methods: {
    onChoice(nextId) {
      // Handle the choice selection
      this.$emit("choice-selected", nextId);
    },
  },
};
</script>

<style lang="scss" scoped>
.game-block {
  @include chrom-ab;
  background-color: $off-black;
  padding: 20px;
  width: 100%;
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0);
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 50px, calc(100% - 50px) 0);

  position: relative;
  overflow: hidden;
}

.choices-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
}
p {
  color: black;
}
.p1 {
  font-family: $font-primary;
}
.p2 {
  font-family: $font-gau;
}
.p3 {
  font-family: $font-gau;
}
.p4 {
  font-family: 0;
}
.p5 {
  font-family: 0;
}
.p6 {
  font-family: 0;
}
</style>
