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
  border-radius: 12px; /* Larger rounded corners */
  background-color: #9e9e9e; /* Dark gray, similar to Spotify */
  padding: 20px;
  width: 100%;
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
