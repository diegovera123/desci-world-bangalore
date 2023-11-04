<script setup>
const navs = ref([
  {
    heading: "Navigation",
    links: [
      {
        name: "Home",
        link: "#hero-landing",
      },
      {
        name: "About",
        link: "#about-section",
      },
      {
        name: "Events",
        link: "#event-section",
      },
      {
        name: "Speakers",
        link: "#speaker-section",
      },
      {
        name: "Register",
        link: "#register",
      },
    ],
  },

  {
    heading: "Contact",
    links: [
      {
        name: "Email Form",
        link: "https://desci.world/contact",
      },
      {
        name: "Presentation",
        link: "https://drive.google.com/file/d/1t4aTGJThBM_6ez_wcC_5gmh46j0IcLtn/view?usp=sharing",
      },
    ],
  },
]);

const socials = ref({
  links: [
    {
      name: "X",
      link: "https://x.com/DeSciWorld",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/desciworld",
    },
    {
      name: "Discord",
      link: "https://discord.gg/3X5YzJ9",
    },
    {
      name: "Telegram",
      link: "https://t.me/DeSciWorld",
    },
  ],
});
</script>

<template>
  <footer>
    <section class="links">
      <inner-column>
        <nav v-for="nav in navs" :class="nav.heading">
          <h3 class="solid-voice">{{ nav.heading }}</h3>
          <ul>
            <li v-for="link in nav.links">
              <NuxtLink class="text" :to="link.link">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </inner-column>
    </section>
    <section>
      <inner-column class="wide">
        <nav class="socials">
          <ul>
            <li v-for="social in socials.links">
              <NuxtLink class="icon" :to="social.link">
                <picture class="social-icon">
                  <img
                    :src="`/icons/${social.name.toLowerCase()}.svg`"
                    :alt="social.name"
                  />
                </picture>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <p>DeSci Event Bangalore 2023</p>
        <div>
          <ToggleLight />
        </div>

        <!-- <p>Made with ❤️ by <a href="https://burooj.dev">B</a></p> -->
      </inner-column>
    </section>
    <SpashAnimation />
  </footer>
</template>
<style scoped>
footer {
  background: var(--highlight-darker);
  color: white;
}

section.links inner-column {
  display: grid;
  gap: var(--space-xl);

  @media (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
}

section.links h3 {
  margin-bottom: var(--space-s);
}
section.links nav ul {
  display: grid;
  gap: var(--space-xs);
  justify-items: start;
}

inner-column.wide {
  display: grid;
  gap: var(--space-m);
  align-items: center;
  justify-items: center;
  @media (min-width: 768px) {
    /* justify-content: space-between; */
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 768px) {
  .wide nav {
    order: 2;
  }
  .wide div {
    order: 3;
  }
}
.socials ul {
  display: flex;
  gap: var(--space-xl);
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
}

.social-icon {
  aspect-ratio: 1;
  max-width: 20px;
}
.text {
  filter: invert(1);
}
</style>
