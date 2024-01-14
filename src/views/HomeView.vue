<template>
  <div class="home">
    <div>
      <logo-headlines
        level="1"
        :dimension="true"
        tabindex="0"
        :depth="0"
        :color="'red'"
        >ALT=(STORY)</logo-headlines
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LogoHeadlines from "@/components/LogoHeadlines.vue";

@Options({
  components: {
    LogoHeadlines,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 72px);
}
</style>
