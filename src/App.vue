<template>
  <header>
    <div class="navigation">
      <div class="logo" v-if="$route.path !== '/'">
        <logo-headlines level="4" :depth="1" :color="'undefinde'">
          ALT=(STORY)
        </logo-headlines>
      </div>
      <div class="deko stripes">
        <span class="chromatic abberationMain"> 14.01.24</span>
        <span class="chromatic abberationRed"> 14.01.24</span>
        <span class="chromatic abberationBlue"> 14.01.24</span>
      </div>
      <nav aria-label="Main">
        <router-link class="routerLink" to="/" aria-label="Go to the Homepage">
          <span class="routerSpan">HOME</span>
        </router-link>
        <router-link
          class="routerLink"
          to="/game/path=0"
          aria-label="Go to the start of the Game"
        >
          <span class="routerSpan">GAME</span>
        </router-link>
        <router-link
          class="routerLink"
          to="/about"
          aria-label="Read more about the Game"
        >
          <span class="routerSpan">ABOUT</span>
        </router-link>
      </nav>
    </div>
  </header>
  <main id="main-content" tabindex="-1">
    <router-view />
  </main>
  <footer>{{ $route.params.path }}</footer>
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

::-moz-selection {
  /* Code for Firefox */
  color: $off-white;
  background: $off-black-32;
  outline: 3px red double;
}

::selection {
  color: $off-white;
  background: $off-black-32;
  outline: 3px red double;
}

h2 {
  color: $rose;
  font-size: $font-size-h2;
}

// Navigation Bar
header {
  backdrop-filter: brightness(100%) blur(3px);
  z-index: 999;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 72px;
  margin: 6px;
  //filter: drop-shadow(0 0 5px $off-black-64);
}

.navigation {
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  gap: 1rem;

  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
}

// Navigator Left
nav {
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 8px;
}

.routerLink {
  display: flex;
  background-color: $off-black-16;
  height: 100%;
  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 12px) 100%,
    100% calc(100% - 12px),
    100% 0
  );
}

.routerLink:hover {
  display: flex;
  color: $off-black;
  background-color: $off-black-32;
  height: 100%;
  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 12px) 100%,
    100% calc(100% - 12px),
    100% 0
  );
}

.routerSpan {
  display: table;
  margin: auto;
}

header a {
  font-family: $font-primary;
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
  color: $off-black-64;
  padding-left: 1rem;
  padding-right: 1rem;
}

header a.router-link-exact-active {
  color: $off-white;
  background-color: $off-black-64;
}

footer {
  height: 42px;
  background-color: $off-black-8;
  margin: 6px;
}

// deko
.stripes {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  $stripe-thickness: 26px;
  background-image: repeating-linear-gradient(
    45deg,
    $off-black-8,
    $off-black-8 $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );

  height: 100%;
  width: 100%;
  padding: 8px;
  text-align: right;
}

.chromatic {
  position: absolute;
  top: 8px;
  /* Align with the padding */
  right: 8px;
  /* Align with the padding */
  font-size: 16px;
}

.abberationMain {
  color: $off-black-64;
  /* or your desired main text color */
  z-index: 1;
}

.abberationRed {
  color: rgba(255, 0, 0, 0.3);
  z-index: 0;
  transform: translate(-1px, -1px);
}

.abberationBlue {
  color: rgba(0, 0, 255, 0.3);
  z-index: 0;
  transform: translate(0.3px, 0.5px);
}
</style>
