<template>
  <div class="gamebox">
    <div id="story-area" class="game-left">
      <p aria-label="This text is different from what you could read!">
        here should be some text
      </p>
    </div>
    <div id="interactive-area" class="game-right">
      <div id="desicions">
        <div class="button-row row-1">
          <div class="deko grids" />
          <button
            class="button-1"
            aria-lable="This is button One"
            title="You dont want to kill me!"
          >
            BUTTON
          </button>
        </div>
        <div class="button-row row-2">
          <div class="deko grids" />
          <button
            class="button-2"
            aria-lable="This is button One"
            title="Thank you for saving me!"
          >
            BUTTON 02
          </button>
        </div>
        <div class="button-row row-3">
          <div class="deko grids" />
          <button
            class="button-3"
            aria-lable="This is button One"
            title="This does abosloutly nothing!"
          >
            BUTTON 03
          </button>
        </div>
      </div>
      <div id="signifier"></div>
      <div id="progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // Example data, you'll replace this with your game's actual data
      currentStoryText: "You find yourself in a mysterious forest...",
      currentOptions: [
        { text: "Explore the forest", nextId: 2 },
        { text: "Return home", nextId: 3 },
        { text: "Build a shelter", nextId: 4 },
      ],
    };
  },
  methods: {
    handleChoice(nextId) {
      // Handle the choice made by the user
      // Update `currentStoryText` and `currentOptions` based on the choice
    },
  },
};
</script>

<style lang="scss" scoped>
.gamebox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  max-width: calc(100vw - 12px);
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  margin-top: 84px;
  //background-color: $off-black-8;
  height: calc(100vh - 138px);
}

#story-area {
  height: 100%;
  max-width: 600px;
  min-width: 400px;
  margin: 6px;
  background-color: $off-black-16;

  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 48px) 100%,
    100% calc(100% - 50px),
    100% 0
  );
}

#interactive-area {
  height: 100%;
  max-width: 600px;
  min-width: 400px;
  margin: 6px;

  background-color: $off-black-8;
}

#desicions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.button-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 32px;
}
button {
  border: none;
  width: 300px;
  // corner cut
  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 12px) 100%,
    100% calc(100% - 12px),
    100% 0
  );
  // colors
  background-color: $off-black;
  color: $off-white;
  // font
  font-family: $font-primary;
  font-size: $font-size-h2;
  text-align: left;
  padding-left: 0.75rem;
  // transitions
  transition-duration: 0.2s;
}
button:hover {
  color: $off-black-64;
  background-color: $off-black-16;
}
.grids {
  width: 45px;
  min-height: 56px;
  //
  $stripe-thickness: 12px;
  background-image: repeating-linear-gradient(
    45deg,
    $off-black-16,
    $off-black-16 $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );
  //
}
</style>
