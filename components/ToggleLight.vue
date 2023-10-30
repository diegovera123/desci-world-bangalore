<script setup>
const isLightOn = ref(false);

function toggle() {
  isLightOn.value = !isLightOn.value;

  // set the prefer color scheme
  const scheme = isLightOn.value ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", scheme);
}
</script>

<template>
  <button class="button" @click="toggle">Toggle</button>
</template>

<style scoped lang="scss"></style>
