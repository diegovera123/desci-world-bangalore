<script setup>
const events = (await queryContent("events").findOne()).body;
</script>

<template>
  <section id="event-section" class="events points">
    <picture class="charka-decoration">
      <ChakraDecoration />
    </picture>
    <inner-column>
      <h2 class="firm-voice">Events</h2>
      <ul class="events-grid">
        <li v-for="(event, index) in events" :key="index" class="">
          <text-content>
            <p>
              {{ event.day }}
            </p>
            <p>
              {{ event.startTime }}
            </p>
            <strong>
              {{ event.name }}
            </strong>
            <p>@ {{ event.location }}</p>
          </text-content>
          <NuxtLink :to="event.link">
            <RightArrow class="right-arrow" />
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="#" class="button firm-voice"> View Full Schedule </NuxtLink>
    </inner-column>
  </section>
</template>

<style scoped>
section {
  position: relative;
  overflow: hidden;
}

.charka-decoration {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 70px;
  /* opacity: 0.7; */
}
h2 {
  text-align: center;
}
ul {
  display: grid;
  margin-top: var(--space-xl);
}

.button {
  margin: var(--space-xl) auto;
}

li {
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  gap: var(--space-l);
  justify-content: space-between;
  align-items: center;

  border-bottom: var(--line-width) solid hsla(0, 0%, 100%, 0.3);
  padding: var(--space-3xs);
}

text-content {
  @media (min-width: 770px) {
    display: grid;
    grid-template-columns: 0.2fr 0.2fr 1fr 1fr;
  }
}

p + p {
  margin-top: unset;
}

:deep(.right-arrow) {
  max-width: 2rem;
}
</style>
