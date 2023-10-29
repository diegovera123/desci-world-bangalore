<template>
  <section id="hero-landing" class="hero-landing">
    <inner-column>
      <text-content>
        <h1 class="booming-voice">Bangalore</h1>
        <h2 class="firm-voice">World of DeSci</h2>
        <p class="notice-voice">Dec 3 - 6, 2023</p>
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
  /* color: var(--paper); */
  position: relative;
  isolation: isolate;
  display: grid;
  justify-content: center;
  padding: var(--space-xl) 0;
  border-right: 5px solid var(--highlight);

  background: hsla(calc(var(--hue) + 195), 90%, 90%, 0.8);

  clip-path: var(--clip-path);

  @media (prefers-color-scheme: dark) {
    background: hsla(var(--hue), 100%, 60%, 0.8);
    border-right: 5px solid var(--highlight);
  }
}
</style>
