<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/game">Game</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: $outer-space;
}
#app {
  font-family: $font-primary, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $off-white-dark;
}
h1 {
  color: $rose;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: $light-coral;
}

nav a.router-link-exact-active {
  color: $teal-green;
}
</style>
