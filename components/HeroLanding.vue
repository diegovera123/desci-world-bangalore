<template>
  <section id="hero-landing" class="hero-landing">
    <inner-column>
      <text-content>
        <h1 class="booming-voice">Bangalore</h1>
        <h2 class="notice-voice">World of DeSci</h2>
      </text-content>
    </inner-column>
    <!-- <inner-column> -->
    <!-- <picture>
      <img src="/images/hero-night.png" alt="" />
    </picture> -->
    <!-- </inner-column> -->
  </section>
</template>

<style scoped>
.hero-landing {
  background: url("/images/hero-day.png") no-repeat top center;
  background-size: cover;
  min-height: 100vmax;

  @media (prefers-color-scheme: dark) {
    background: url("/images/hero-night.jpg") no-repeat top center;
    background-size: cover;
  }
}

inner-column {
  padding-top: var(--space-3xl);
}

text-content {
  text-align: center;
  color: var(--paper);
  position: relative;
  isolation: isolate;
  display: grid;
  justify-content: center;
  padding: var(--space-xl) 0;

  background: hsla(calc(var(--hue) + 195), 90%, 60%, 0.5);

  @media (prefers-color-scheme: dark) {
    background: hsla(var(--hue), 100%, 60%, 0.8);
  }
}
</style>
