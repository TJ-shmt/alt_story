<template>
  <div class="home">
    <div>
      <logo-headlines level="1" :dimension="true">ALT=(STORY)</logo-headlines>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import LogoHeadlines from "@/components/LogoHeadlines.vue";

@Options({
  components: {
    HelloWorld,
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
