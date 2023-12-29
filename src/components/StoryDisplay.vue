<template>
  <div class="story-display">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
.story-display {
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  color: black;
  max-height: 300px; /* Adjust as needed */
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
