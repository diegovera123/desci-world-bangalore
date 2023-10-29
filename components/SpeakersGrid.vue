<script setup>
const speakers = (await queryContent("speakers").findOne()).body;
</script>

<template>
  <section id="speaker-section" class="speakers">
    <inner-column class="wide">
      <h2 class="loud-voice">Speakers</h2>
      <ul class="speakers-grid">
        <SpeakerCard v-for="speaker in speakers" :speaker="speaker" />
      </ul>
    </inner-column>
  </section>
</template>

<style scoped>
.speakers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: var(--space-l);
  row-gap: 150px;
  padding-top: 150px;
}
</style>
