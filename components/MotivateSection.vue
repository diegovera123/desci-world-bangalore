<script setup>
const image = ref(false);
</script>

<template>
  <section class="points">
    <h2 class="loud-voice">WHERE SCIENCE MEETS THE FUTURE.</h2>

    <picture class="splash">
      <img src="/images/bangalore-motivate.jpg" alt="" />
    </picture>
  </section>
</template>

<style scoped>
section {
  height: 100vmin;

  display: grid;
  place-items: center;
  text-align: center;

  position: relative;
  isolation: isolate;
}

picture {
  border-radius: var(--corners);
  position: absolute;
  overflow: hidden;
  z-index: -1;
  mix-blend-mode: luminosity;
  filter: grayscale(1);
  max-height: 100%;
  max-width: calc(100% - var(--space-s));
  opacity: 0.8;
}

h2 {
  text-wrap: balance;
}
</style>
