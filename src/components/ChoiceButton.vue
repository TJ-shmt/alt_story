<template>
  <div :class="['button-row', rowClass]">
    <div class="deko grids">
      <label
        :for="buttonId"
        class="sr-only"
        tabindex="0"
        @keydown.enter="clickButton"
        @click="clickButton"
      >
        {{ label }}
      </label>
    </div>
    <button :id="buttonId" aria-hidden="true" ref="buttonRef" tabindex="-1">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    rowClass: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    buttonId: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickButton() {
      this.$refs.buttonRef.click();
    },
  },
  mounted() {
    this.$refs.buttonRef.setAttribute("aria-hidden", "true");
  },
};
</script>

<style scoped lang="scss">
.button-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 32px;
}

button {
  border: none;
  width: 300px;
  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 12px) 100%,
    100% calc(100% - 12px),
    100% 0
  );
  background-color: $off-black;
  color: $off-white;
  font-family: $font-primary;
  font-size: $font-size-h2;
  text-align: left;
  padding-left: 0.75rem;
  transition-duration: 0.2s;
}

button:hover {
  color: $off-black-64;
  background-color: $off-black-16;
}

.sr-only {
  display: block;
  //visibility: hidden;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0;
  font-size: 0px;
}

// Deko

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
}
</style>
