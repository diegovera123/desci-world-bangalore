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
    <text-content>
      <h3 class="firm-voice">
        {{ speaker.name }}
      </h3>
      <p>
        {{ speaker.bio }}
      </p>
    </text-content>
  </li>
</template>

<style scoped>
.speaker-card {
  position: relative;
}
.speaker-card::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  width: 200px;
  aspect-ratio: 1;
  border-top: 5px solid var(--highlight);
  border-bottom: 5px solid var(--highlight);
}

text-content {
  box-shadow: var(--shadow);
  padding: var(--space-l) var(--space-s);
  padding-top: var(--space-2xl);
}

picture {
  aspect-ratio: 1;
  border-radius: 50%;
  max-width: 200px;

  position: relative;
  top: 50px;
  left: -15px;
  box-shadow: var(--shadow);
}
</style>
