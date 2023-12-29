<template>
  <div class="game">
    <h1>The game will be here!</h1>
    <game-block
      :storyText="currentStoryText"
      :options="currentOptions"
      @choice-selected="handleChoice"
    />
  </div>
</template>

<script>
import GameBlock from "../components/GameBlock.vue"; // Adjust the path as necessary

export default {
  components: {
    GameBlock,
  },
  data() {
    return {
      // Example data, you'll replace this with your game's actual data
      currentStoryText: "You find yourself in a mysterious forest...",
      currentOptions: [
        { text: "Explore the forest", nextId: 2 },
        { text: "Return home", nextId: 3 },
        { text: "Build a shelter", nextId: 4 },
      ],
    };
  },
  methods: {
    handleChoice(nextId) {
      // Handle the choice made by the user
      // Update `currentStoryText` and `currentOptions` based on the choice
    },
  },
};
</script>

<style>
.game {
  max-width: 600px; /* Or any other width you prefer */
  margin: auto;
  padding: 20px;
}
</style>
