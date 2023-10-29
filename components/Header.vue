<template>
  <header>
    <inner-column>
      <mast-head>
        <picture class="logo">
          <img src="/images/lotus.svg" alt="" />
        </picture>

        <nav>
          <ul>
            <li><a href="#hero-landing">Home</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#speaker-section">Speakers</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
      </mast-head>
    </inner-column>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(
    var(--gradient-direction),
    var(--paper),
    var(--color),
    hsla(1, 100%, 66%, 1)
  );

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(
      var(--gradient-direction),
      var(--paper),
      hsla(226, 83%, 17%, 1)
    );
  }
}

mast-head {
  display: flex;
  justify-content: space-between;
  gap: var(--space-l);
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-items: center;
  }
}

picture.logo {
  aspect-ratio: 1;
  max-width: 50px;
  border-radius: 50%;
  overflow: hidden;
  transform: scale(3);
  transform-origin: center;

  @media (prefers-color-scheme: dark) {
    filter: invert(1);
  }
}

nav ul {
  display: flex;
  gap: var(--space-l);
  justify-content: space-between;
}

nav a {
  @media (max-width: 500px) {
    font-size: var(--step--1);
  }
}
</style>
