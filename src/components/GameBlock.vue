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

<style scoped>
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
</style>
