<template>
  <div class="home">
    <div>
      <section class="homescreen">
        <div></div>
        <logo-headlines
          level="1"
          :dimension="true"
          tabindex="0"
          :depth="0"
          :color="'red'"
          >ALT=(STORY)</logo-headlines
        >
        <div></div>
        <div></div>
      </section>
      <section class="characters section-after">
        <logo-headlines
          level="2"
          :dimension="true"
          tabindex="0"
          :depth="'100px'"
          >The Characters</logo-headlines
        >
        <div class="charCards">
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
          <flip-card
            :image="player"
            :title="charData.card1.title"
            :description="charData.card1.description"
          />
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
          <flip-card
            :image="bakeneko"
            :title="charData.card2.title"
            :description="charData.card2.description"
          />
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
          <flip-card
            :image="netrunner"
            :title="charData.card3.title"
            :description="charData.card3.description"
          />
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
        </div>
      </section>
      <section class="more section-after"></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LogoHeadlines from "@/components/LogoHeadlines.vue";
import FlipCard from "@/components/FlipCard.vue";
import PlusIcon from "@/components/vueIcons/PlusIcon.vue";
import charData from "@/charData.json";

// Declare reactive references at the top level
const bakeneko = ref("");
const player = ref("");
const netrunner = ref("");

onMounted(async () => {
  bakeneko.value = (await import("@/assets/images/Bakeneko.png")).default;
  player.value = (await import("@/assets/images/Player.png")).default;
  netrunner.value = (await import("@/assets/images/Netrunner.png")).default;
});
</script>

<style lang="scss" scoped>
.deko-line {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  //background-color: aqua;
  width: 24px;

  .size {
    width: 24px;
  }
}

section {
  min-height: calc(100vh - 84px);

  display: flex;

  &.section-after {
  }
  &.homescreen {
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
  }
  &.characters {
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
  }
}

.charCards {
  margin: 1rem 4rem 1rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 30px;

  $offset: 36px;
  $offset-position: calc($offset / 2);
  background-repeat: no-repeat;
  background-size: calc(100% - $offset) calc(100% - $offset);
  background-position: $offset-position $offset-position;
  $stripe-thickness: 26px;
  background-image: repeating-linear-gradient(
    45deg,
    var(--off-text-8),
    var(--off-text-8) $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );
}
</style>
