<script setup>
import fitty from "fitty";

const forms = ref([
  {
    name: "Attendees",
    link: "https://airtable.com/appF0EVscFaeDO8WP/shrbqIP54ZQYppovF",
  },
  {
    name: "Speakers",
    link: "https://airtable.com/appF0EVscFaeDO8WP/shrnLT2V4XOzOGd0l",
  },
  {
    name: " Volunteers",
    link: "https://airtable.com/appF0EVscFaeDO8WP/shrqV3iQSh6axI5yw",
  },
  {
    name: "Sponsors",
    link: "https://airtable.com/appF0EVscFaeDO8WP/shrdL3Nm0djZvmwYQ",
  },
]);

onMounted(() => {
  fitty("#register h2");
});
</script>

<template>
  <section id="register" class="register-section points-white">
    <inner-column>
      <div><h2 class="loud-voice">Register Now</h2></div>

      <nav>
        <ul>
          <li v-for="form in forms">
            <NuxtLink class="button firm-voice" :to="form.link">
              {{ form.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </inner-column>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
}

ul {
  display: grid;
  gap: var(--space-s);
  margin-top: var(--space-xl);
}
</style>
