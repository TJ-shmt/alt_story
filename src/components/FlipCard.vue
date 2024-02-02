<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="image" alt="Card Image" />
      </div>
      <div class="flip-card-back">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
//props
defineProps({
  image: String,
  title: String,
  description: String,
});
</script>

<style lang="scss" scoped>
//image ratios
$imgWidth: 1024px;
$imgHeight: 1792px;
.flip-card {
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: calc($imgWidth * 0.33); /* Adjust as needed */
  height: calc($imgHeight * 0.33); /* Adjust for 1:2 ratio */
  perspective: 1000px; /* Depth of the flip effect */
  filter: drop-shadow(-1px -1px 1px rgba(0, 255, 255, 0.5))
    drop-shadow(1px 1px 1px rgba(255, 0, 255, 0.5))
    drop-shadow(10px 20px 30px var(--shadow-black));
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg); /* Flip effect */
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
}

.flip-card-front {
}

.flip-card-back {
  transform: rotateY(180deg); /* Align backside correctly */
  background-color: $black-82;
  color: var(--off-remain);

  backdrop-filter: brightness(100%) blur(3px);

  backface-visibility: hidden; // Apply to both front and back
  -webkit-backface-visibility: hidden; // For Safari and older browsers
}

.flip-card-back h2 {
  margin: 2rem;
}
.flip-card-back p {
  margin: 2rem;
  text-align: justify;
}

img {
  width: 100%;
}
</style>
