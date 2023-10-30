<script setup>
const socials = ref([
  {
    name: "X",
    link: "https://x.com/DeSciWorld",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/desciworld",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/desciworld/",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/DeSciWorld",
  },
  {
    name: "Discord",
    link: "https://discord.gg/3X5YzJ9",
  },
]);
</script>

<template>
  <section id="about-section" class="about points">
    <inner-column>
      <h2 class="loud-voice">DeSciWorld Unites in Bengaluru</h2>
      <p class="attention-voice">
        Join us for an exhilarating experience at DeSci Event, Bangalore where
        India's rich culture intertwines with cutting-edge technology.
      </p>
      <ul>
        <li v-for="social in socials">
          <p class="notice-voice">
            <NuxtLink class="text" :to="social.link">{{
              social.name
            }}</NuxtLink>
          </p>
        </li>
      </ul>
    </inner-column>
  </section>
</template>

<style scoped>
section.about {
  padding: var(--space-l) 0;
}

inner-column {
  display: grid;

  gap: var(--space-s);
  column-gap: var(--space-xl);
  justify-content: space-between;

  @media (min-width: 770px) {
    grid-template-columns: 1fr 0.3fr;
  }
}

h2 {
  text-align: center;
  grid-column: 1 / -1;
}

h2 + p {
  margin-top: unset;
}

ul {
  display: flex;
  align-items: start;
  gap: var(--space-s);
  flex-wrap: wrap;

  @media (min-width: 770px) {
    display: grid;
  }
}
</style>
