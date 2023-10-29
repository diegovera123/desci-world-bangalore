<template>
  <section id="about-section" class="about">
    <inner-column>
      <h2 class="booming-voice">About</h2>
      <p class="notice-voice">
        Lorem ipDo cupidatat non proident minim culpa aliqua esse elit ea
        tempor. Elit officia aliqua quis voluptate consequat aute mollit sint.
        Do ea laborum proident. Adipisicing officia veniam eiusmod fugiat magna
        commodo tempor consectetur enim ad est ea commodo. Sint et fugiat tempor
        fugiat. Consectetur aliqua minim minim id minim amet.
      </p>
    </inner-column>
  </section>
</template>

<style scoped>
section.about {
  padding: var(--space-l) 0;
  background: linear-gradient(
    0,
    var(--paper),
    var(--color),
    hsla(2, 99%, 66%, 1)
  );
  text-align: center;

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(0, var(--paper), hsla(222, 84%, 14%, 1));
  }
}
h2 {
  text-align: center;
}
inner-column {
  /* box-shadow: var(--shadow); */
}
</style>
