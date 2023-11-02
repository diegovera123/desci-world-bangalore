<script setup></script>

<template>
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
    >
      <path
        d="M 24 12 L 44 32 L 24 52"
        fill="transparent"
        stroke-width="6"
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray=""
      />
    </svg>
  </picture>
</template>

<style scoped>
picture {
  transition: transform 0.2s ease-in-out;
}
a:is(:hover, :focus-visible) picture {
  transform: scale(1.1) translateX(5px);
}

path {
  stroke: var(--white);

  @media (prefers-color-scheme: dark) {
    fill: var(--black);
  }
}
</style>
