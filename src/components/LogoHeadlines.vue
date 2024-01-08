<template>
  <component :is="`h${level}`" :class="`logo-h${level} logo ${dimension}`">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SpecialHeadline",
  props: {
    level: {
      type: String as PropType<"4" | "1" | "2" | "3">,
      default: "1",
    },
    dimension: {
      type: Boolean,
      default: false,
      required: false,
    },
    depth: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    headlineStyle() {
      let shadows = [];
      for (let i = 1; i <= this.depth; i++) {
        shadows.push(`${i}px ${i}px ${this.color}`);
      }
      return {
        textShadow: shadows.join(", "),
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.logo {
  font-family: $font-gau;
  font-weight: 800;
  color: $rose;
  &.true {
    @include text-shadow-depth(
      8,
      1,
      $teal-green,
      $teal-green,
      $teal-green-light
    );
  }

  &.false {
    @include text-shadow-depth(
      2,
      1,
      $teal-green,
      $teal-green,
      $teal-green-light
    );
  }

  &.logo-h1 {
    font-size: $font-size-h1;
  }
  &.logo-h2 {
    font-size: $font-size-h2;
  }
  &.logo-h3 {
    font-size: $font-size-h3;
  }
  &.logo-h4 {
    font-size: $font-size-h4;
  }
}
</style>
