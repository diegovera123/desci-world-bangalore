<script setup>
import gsap from "gsap";

function animate() {
  const colorPath = document.querySelector("#color-path");
  const highlightPath = document.querySelector("#highlight-path");

  const colorLength = colorPath.getTotalLength();
  const highlightLength = highlightPath.getTotalLength();

  const duration = 2;
  const easing = "power2.inOut";

  const timeline = gsap.timeline();

  //   color path
  timeline.fromTo(
    colorPath,
    {
      duration: 0,
      strokeDashoffset: -1 * colorLength,
      strokeDasharray: colorLength,
    },
    {
      duration: duration,
      strokeDashoffset: 0,
      ease: easing,
    }
  );

  //   highlight path
  timeline.fromTo(
    highlightPath,
    {
      duration: 0,
      strokeDashoffset: -1 * highlightLength,
      strokeDasharray: highlightLength,
    },
    {
      duration: duration,
      strokeDashoffset: 0,
      ease: easing,
    },
    0
  );

  timeline.to("svg.lotus-path", {
    duration: 0.5,
    scale: 10,
    opacity: 0,
    transformOrigin: "center",
  });

  //   reset
  timeline.set("header", {
    opacity: 1,
  });
  timeline.set("main", {
    opacity: 1,
  });

  timeline.to("div.wrapper", {
    duration: 0.5,
    opacity: 0,
    onComplete: () => {
      document.querySelector("div.wrapper").remove();
    },
  });

  timeline.to("body", {
    overflow: "auto",
  });
}

onMounted(() => {
  animate();
});
</script>

<template>
  <div class="wrapper">
    <LotusPath />
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  background: var(--black);
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
}

:deep(svg) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
}
</style>

<style>
body {
  overflow: hidden;
}

main,
header {
  opacity: 0;
}
</style>
