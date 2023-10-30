<script setup>
import fitty from "fitty";

const bangloreRef = ref(null);
const DeSciWorldRef = ref(null);
const YearRef = ref(null);
const DecemberRef = ref(null);
const dateRef = ref(null);

onMounted(() => {
  fitty(bangloreRef.value);
  fitty(DeSciWorldRef.value);
  fitty(YearRef.value, {
    maxSize: 1600,
  });
  fitty(DecemberRef.value);
  fitty(dateRef.value, {
    maxSize: 1600,
  });
});
</script>

<template>
  <section id="hero-landing" class="hero-landing">
    <inner-column>
      <div>
        <h1 class="booming-voice" ref="bangloreRef">Bangalore</h1>
      </div>
      <div>
        <h1 class="booming-voice" ref="DeSciWorldRef">DeSciWorld</h1>
      </div>
      <div>
        <h2 class="booming-voice" ref="YearRef">23</h2>
      </div>
      <div>
        <h2 class="booming-voice" ref="DecemberRef">December</h2>
      </div>
      <div>
        <h2 class="booming-voice" ref="dateRef">3 - 6</h2>
      </div>
    </inner-column>
    <piture class="float quadrant">
      <img src="/images/bangalore-building.png" alt="" />
    </piture>
    <piture class="float square">
      <img src="/images/star.svg" alt="" />
    </piture>
    <piture class="float vertical">
      <img src="/images/bangalore-vertical.jpg" alt="" />
    </piture>
  </section>
</template>

<style scoped>
section {
  background: var(--black);
  color: var(--white);
  text-align: center;

  position: relative;
}

inner-column {
  max-width: unset;
}

h2 {
  color: var(--color);
}

.float {
  position: absolute;

  /* filter: grayscale(1); */
  mix-blend-mode: luminosity;
  width: clamp(30px, 20vw, 300px);
  z-index: 1;
  overflow: hidden;
  will-change: transform;
}

.float img {
  object-fit: cover;
  height: 100%;
}

.quadrant {
  top: 20px;
  right: 5vw;
  animation: float 10s ease-in-out infinite alternate;
}

.square {
  aspect-ratio: 1 / 1;
  top: 60%;
  right: 10%;
  width: clamp(50px, 25vw, 400px);
}
.vertical {
  top: 25%;
  left: 10%;
  width: clamp(30px, 30vw, 250px);
  animation: float 10s ease-in-out infinite alternate;
  /* border-radius: 200px; */
}
</style>
