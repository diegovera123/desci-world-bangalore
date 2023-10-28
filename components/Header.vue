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
            <li><a href="#about-section">About Us</a></li>
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
  background: var(--color);
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
