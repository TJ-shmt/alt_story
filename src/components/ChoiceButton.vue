<template>
  <button
    class="choice-button"
    :aria-label="`Choose option: ${text}`"
    @click="$emit('choose')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text"],
  emits: ["choose"],
};
</script>

<style scoped>
.choice-button {
  border: 1px solid black;
  border-radius: 8px; /* Rounded corners */
  min-width: 100px;
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  text-align: center;
}
</style>
