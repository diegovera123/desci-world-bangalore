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

  timeline.set(colorPath, {
    strokeDashoffset: -1 * colorLength,
    strokeDasharray: colorLength,
    opacity: 1,
  });

  timeline.set(highlightPath, {
    strokeDashoffset: -1 * highlightLength,
    strokeDasharray: highlightLength,
    opacity: 1,
  });

  timeline.to(colorPath, {
    duration: duration,
    strokeDashoffset: 0,
    ease: easing,
  });

  //   highlight path
  timeline.to(
    highlightPath,
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
    ease: easing,
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
    //  ease: easing,
    onComplete: () => {
      document.querySelector("footer div.wrapper").remove();
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
  max-height: 100vmax;
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
