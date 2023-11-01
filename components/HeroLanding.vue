<script setup>
import fitty from "fitty";

const bangloreRef = ref(null);
const DeSciWorldRef = ref(null);
const YearRef = ref(null);
const DecemberRef = ref(null);
const dateRef = ref(null);

function fitAll() {
  fitty(bangloreRef.value);
  fitty(DeSciWorldRef.value);
  fitty(YearRef.value, {
    maxSize: 1600,
  });
  fitty(DecemberRef.value);
  fitty(dateRef.value, {
    maxSize: 1600,
  });
}

onMounted(() => {
  fitAll();
});
</script>

<template>
  <section id="hero-landing" class="hero-landing">
    <inner-column>
      <div>
        <h1 class="booming-voice fitty" ref="DeSciWorldRef">World of DeSci</h1>
      </div>
      <div>
        <h1 class="booming-voice colored fitty" ref="bangloreRef">Bengaluru</h1>
      </div>
      <div>
        <h2 class="booming-voice colored fitty" ref="YearRef">23</h2>
      </div>
      <div>
        <h2 class="booming-voice fitty" ref="dateRef">3 - 6</h2>
      </div>
      <div>
        <h2 class="booming-voice fitty" ref="DecemberRef">December</h2>
      </div>
    </inner-column>
    <piture class="float quadrant">
      <img src="/images/bangalore-building.png" alt="" />
    </piture>
    <piture class="float square">
      <StarDecoration />
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
  isolation: isolate;
}

inner-column {
  @media (min-width: 770px) {
    max-width: 80%;
  }
}

.booming-voice {
  font-size: var(--step-3);
}
.fitty {
  display: inline-block;
  white-space: nowrap;
}

.colored {
  color: var(--color);
}

.float {
  position: absolute;

  /* filter: grayscale(1); */
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
  mix-blend-mode: luminosity;

  top: 10%;
  right: 20%;
  animation: float 10s ease-in-out infinite alternate;
  animation-delay: -3s;
}

.square {
  aspect-ratio: 1 / 1;
  top: 60%;
  right: 10%;
  width: clamp(50px, 25vw, 400px);
}
.vertical {
  mix-blend-mode: luminosity;

  top: 25%;
  left: 10%;
  width: clamp(10px, 25vw, 250px);
  animation: float 10s ease-in-out infinite alternate;
  /* border-radius: 200px; */
}
</style>
