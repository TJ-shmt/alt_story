<template>
  <div class="about">
    <h1>BUTTON</h1>
    <div class="color-box" id="palette-1">
      <div
        v-for="color in palette1"
        :key="color"
        :style="{ backgroundColor: color }"
        class="color-circle"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      palette1: [
        "#056c6a",
        "#08d9d6",
        "#5aefef",
        "#b02148",
        "#ff2e63",
        "#ff6190",
        "#f0e1d7",
        "#fff5eb",
        "#ffffff",
        "#c77c52",
        "#faa275",
        "#ffc0a1",
        "#0e2c42",
        "#154360",
        "#2e6690",
        "#0b1d30",
        "#112a46",
        "#334d66",
        "#292a2c",
        "#3c3f41",
        "#545759",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.color-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  overflow-x: auto;
  background-color: #3c3f41; // Second last color of palette 1
}

.color-circle {
  border-radius: 50%;
  flex: 0 0 auto;
  width: calc(100% / 30); // Calculate width for 21 colors
  aspect-ratio: 1 / 1;
  margin: 5px;
}
</style>
