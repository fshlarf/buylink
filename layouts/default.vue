<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/mollecules/Navbar";
import Footer from "~/components/mollecules/Footer";
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style></style>
