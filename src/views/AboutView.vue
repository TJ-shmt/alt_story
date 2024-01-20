<template>
  <div class="about">
    <h1>ABOUT PAGE</h1>
  </div>
  <section>
    <div>
      <plus-icon class="size" />
    </div>
  </section>
</template>

<script>
import PlusIcon from "@/components/vueIcons/PlusIcon.vue";
export default {
  components: { PlusIcon },
};
</script>

<style lang="scss" scoped>
.deko-icons {
  fill: currentColor;
  color: gray;
}
.size {
  width: 24px;
}
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
