<script setup>
const props = defineProps({
  speaker: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li class="speaker-card">
    <picture>
      <img :src="speaker.image" :alt="`Picture of ${speaker.name}`" />
    </picture>
    <h3 class="firm-voice">
      {{ speaker.name }}
    </h3>
    <p>
      {{ speaker.bio }}
    </p>
  </li>
</template>

<style scoped>
.speaker-card {
  box-shadow: var(--shadow);
  position: relative;
  --top: 100px;

  padding: var(--space-xl) var(--space-s);
  padding-top: calc(var(--top) + var(--space-3xl));
}

picture {
  aspect-ratio: 1;
  border-radius: 50%;
  max-width: 70%;

  position: absolute;
  top: calc(var(--top) * -1);
  left: 0;
  box-shadow: var(--shadow);
}
</style>
