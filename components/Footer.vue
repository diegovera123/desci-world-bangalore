<template>
  <footer>
    <inner-column>
      <picture class="logo">
        <img src="/images/square.jpg" alt="" />
      </picture>
    </inner-column>
    <section>
      <inner-column>
        <h2 class="loud-voice">Contact</h2>
      </inner-column>
    </section>
  </footer>
</template>
<style scoped>
footer {
  background: var(--tertiary-color-darker);
}

picture.logo {
  aspect-ratio: 1;
  max-width: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
