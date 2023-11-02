<script setup>
const speakers = (await queryContent("speakers").findOne()).body;
</script>

<template>
  <section id="speaker-section" class="speakers points-white">
    <inner-column class="wide">
      <h2 class="firm-voice">Speakers</h2>
      <ul class="speakers-grid">
        <SpeakerCard v-for="speaker in speakers" :speaker="speaker" />
      </ul>
    </inner-column>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
}

.speakers-grid {
  display: grid;
  margin-top: var(--space-xl);
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: var(--space-3xl);

  @media (min-width: 770px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
}
</style>
