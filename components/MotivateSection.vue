<script setup>
const props = defineProps(["text", "image"]);
</script>

<template>
  <section class="points motivate-section">
    <inner-column class="ultra-wide">
      <div>
        <h2 class="loud-voice">{{ text }}</h2>
      </div>

      <picture class="splash">
        <img :src="`/images/${image}.jpg`" alt="" />
      </picture>
    </inner-column>
  </section>
</template>

<style scoped>
section {
  /* padding: var(--space-s); */
  padding: var(--space-xl) 0;
}
inner-column {
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
  isolation: isolate;
  aspect-ratio: 16 / 9;
  @media (max-width: 768px) {
    width: 100%;
  }
}

picture {
  border-radius: var(--corners);
  position: absolute;
  overflow: hidden;
  z-index: -1;
  mix-blend-mode: luminosity;

  filter: grayscale(1);
  height: auto;
  width: 100%;
  max-height: calc(100% - var(--space-s));
  max-width: calc(100% - var(--space-s));
  opacity: 0.8;

  aspect-ratio: 16 / 9;

  @media (max-width: 768px) {
    max-height: unset;
    max-width: unset;
    border-radius: 0;
    width: 100vw;
  }
}

img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

h2 {
  text-wrap: balance;
  @media (max-width: 768px) {
    font-size: var(--step-3);
  }
}
</style>
