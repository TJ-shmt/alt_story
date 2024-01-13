<template>
  <header>
    <div class="spacer">
      <div class="logo">
        <logo-headlines level="4" v-if="$route.path !== '/'">
          ALT=(STORY)
        </logo-headlines>
      </div>
      <nav aria-label="Main">
        <router-link to="/" aria-label="Go to the Homepage">Home</router-link>
        <router-link to="/game" aria-label="Go to the start of the Game"
          >Game</router-link
        >
        <router-link to="/about" aria-label="Read more about the Game"
          >About</router-link
        >
      </nav>
    </div>
  </header>
  <main id="main-content" tabindex="-1">
    <router-view />
  </main>
  <footer></footer>
</template>

<script lang="ts" setup>
import LogoHeadlines from "@/components/LogoHeadlines.vue";
</script>

<style lang="scss">
body {
  background: radial-gradient(circle at top, $white, $off-white, $corner-white);
  padding: 0;
  margin: 0;
}
#app {
  font-family: $font-primary, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $off-black;
  margin-top: 72px;
}
h2 {
  color: $rose;
  font-size: $font-size-h2;
}
header {
  $stripe-thickness: 26px;

  height: 72px;
  background-image: repeating-linear-gradient(
    45deg,
    $off-black-8,
    $off-black-8 $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );
  backdrop-filter: brightness(100%) blur(3px);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  margin: 6px;
}

.spacer {
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
}
header a {
  font-weight: bold;
  color: $light-coral;
}

header a.router-link-exact-active {
  color: $teal-green;
}

footer {
  height: 42px;
  background-color: $off-black-32;
  margin: 6px;
}
</style>
