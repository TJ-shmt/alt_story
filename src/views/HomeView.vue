<template>
  <div class="home">
    <div>
      <section class="homescreen">
        <logo-headlines
          level="1"
          :dimension="true"
          tabindex="0"
          :depth="0"
          :color="'red'"
          >ALT=(STORY)</logo-headlines
        >
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
          <flip-card
            :image="player"
            :title="charData.card1.title"
            :description="charData.card1.description"
          />
          <flip-card
            :image="bakeneko"
            :title="charData.card2.title"
            :description="charData.card2.description"
          />
          <flip-card
            :image="netrunner"
            :title="charData.card3.title"
            :description="charData.card3.description"
          />
        </div>
      </section>
      <section class="more section-after"></section>
    </div>
  </div>
</template>

<script lang="ts">
import LogoHeadlines from "@/components/LogoHeadlines.vue";
import FlipCard from "@/components/FlipCard.vue";
import charData from "@/charData.json";

export default {
  components: {
    LogoHeadlines,
    FlipCard,
  },
  data() {
    return {
      charData, // Assigning imported JSON data to a data property
      bakeneko: require("@/assets/images/Bakeneko.png"), // import bakeneko image
      player: require("@/assets/images/Player.png"), // import bakeneko image
      netrunner: require("@/assets/images/Netrunner.png"), // import bakeneko image
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
}
section {
  min-height: calc(100vh - 72px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;

  &.section-after {
    // border-top: solid;
  }

  &.charater {
  }
}

.charCards {
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
}
</style>
