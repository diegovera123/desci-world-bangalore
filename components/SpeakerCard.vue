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
