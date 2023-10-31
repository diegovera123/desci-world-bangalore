<script setup>
const meta = {
  url: "https://desci.world",
  title: "World of DeSci: Bengaluru",
  description:
    "DeSci World is a conference for data scientists and machine learning engineers.",
  image: "/images/meta.jpg",
};

// get theme color from css
const themeColor = ref(null);

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/images/favicon.svg",
    },
  ],
});

useSeoMeta({
  // ogUrl: "https://desci.world",
  // ogType: "website",
  title: meta.title,
  ogTitle: meta.title,
  twitterTitle: meta.title,

  //
  description: meta.description,
  ogDescription: meta.description,
  twitterDescription: meta.description,

  //
  image: meta.image,
  ogImage: {
    url: meta.image,
    width: 1200,
    height: 627,
    alt: "DeSci World Logo",
  },
  twitterImage: {
    url: meta.image,
    width: 1200,
    height: 627,
    alt: "DeSci World Logo",
  },

  twitterCard: "summary_large_image",

  themeColor: themeColor.value ?? "#fb9637",
});

onMounted(() => {
  themeColor.value = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color");
});
</script>

<template>
  <NuxtPage />
</template>
