<template>
  <div :class="['button-row', rowClass]">
    <div class="deko grids">
      <label
        :for="buttonId"
        class="sr-only"
        tabindex="0"
        @keydown.enter="routeTo(routeToID)"
      >
        {{ labelText }}
      </label>
    </div>
    <button
      :id="buttonId"
      aria-hidden="true"
      ref="buttonRef"
      tabindex="-1"
      :title="title"
      @click="routeTo(routeToID)"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts" setup>
// , ref, onMounted
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
//const route = useRoute(); // , useRoute
// props
defineProps({
  rowClass: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  labelText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "404: here should be a different text!",
    required: true,
  },
  buttonId: {
    type: String,
    required: true,
  },
  routeToID: {
    type: String,
    default: "error",
    required: false,
  },
});
// Funcitons
const routeTo = (routeToID: string) => {
  console.log("you chose path: " + routeToID);
  router.push("/game/path=" + routeToID);
};

// onMounted(() => {});
</script>

<style scoped lang="scss">
.button-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  transition-duration: 0.2s;
}
.grids:hover {
  $stripe-thickness: 12px;
  background-image: repeating-linear-gradient(
    45deg,
    $light-coral,
    $light-coral $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );

  filter: drop-shadow(0 0 10px $light-coral-light);
}
</style>
