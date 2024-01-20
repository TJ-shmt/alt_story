<template>
  <img :src="iconSrc" />
</template>

<script>
import IconLoader from "@/assets/icons/off-black.svg"; // Update the path to your SVG file

export default {
  name: "OffBlack",
  data() {
    return {
      iconSrc: IconLoader,
    };
  },
};
</script>

<style>
/* You can add styles here if needed */
</style>
