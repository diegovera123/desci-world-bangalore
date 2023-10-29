<template>
  <header>
    <inner-column>
      <mast-head>
        <picture class="logo">
          <img src="/images/square.jpg" alt="" />
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
    var(--color) 35%,
    hsla(2, 99%, 66%, 1)
  );

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(
      var(--gradient-direction),
      var(--highlight),
      hsla(221, 84%, 17%, 1)
    );
  }
}

mast-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

picture.logo {
  aspect-ratio: 1;
  max-width: 50px;
  border-radius: 50%;
  overflow: hidden;
}

nav ul {
  display: flex;
  gap: var(--space-l);
}
</style>
