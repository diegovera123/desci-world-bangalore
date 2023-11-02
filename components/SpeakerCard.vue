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
      <p class="solid-voice">
        {{ speaker.company }}
      </p>
      <p class="notice-voice">
        {{ speaker.role }}
      </p>
    </text-content>
  </li>
</template>

<style scoped>
.speaker-card {
  position: relative;
  display: grid;
  gap: var(--space-s);
  justify-items: center;
}

text-content {
  text-align: center;
}

p {
  font-size: var(--step-1);
}

p + p {
  margin-top: unset;
}

picture {
  aspect-ratio: 1;
  border-radius: 50%;
  max-width: 150px;
}
</style>
