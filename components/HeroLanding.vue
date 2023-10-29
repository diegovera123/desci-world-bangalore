<template>
  <section id="hero-landing" class="hero-landing">
    <inner-column>
      <text-content>
        <h1 class="booming-voice">Bangalore</h1>
        <h2 class="firm-voice">World of DeSci • Dec 3 - 6, 2023</h2>
      </text-content>
      <div class="actions">
        <a href="#about-section" class="button">Learn More</a>
        <a href="#contact-section" class="button">Contact Us</a>
      </div>
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
  background: url("/images/hero-day.png") no-repeat center 0px;
  background-color: hsla(2, 100%, 66%, 1);
  background-size: cover;
  min-height: calc(100vmax + 00px);

  @media (prefers-color-scheme: dark) {
    background: url("/images/hero-night.jpg") no-repeat top center;
    background-size: cover;
  }
}

inner-column {
  /* padding-top: var(--space-3xl); */
  background: hsla(calc(var(--hue) + 195), 90%, 90%, 0.8);
  border-radius: var(--corners);

  @media (prefers-color-scheme: dark) {
    padding-top: unset;
  }
}

text-content {
  text-align: center;
  /* color: var(--paper); */
  position: relative;
  isolation: isolate;
  display: grid;
  justify-content: center;
  text-wrap: balance;
  /* padding: var(--space-xl) 0; */

  /* clip-path: var(--clip-path); */

  @media (prefers-color-scheme: dark) {
    background: none;
    /* color: var(--paper); */
    /* -webkit-text-stroke-width: 2px; */
    /* -webkit-text-stroke-color: var(--highlight-darker); */
  }
}

div.actions {
  margin-top: var(--space-l);
}
</style>
