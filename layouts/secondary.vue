<template>
  <div>
    <NavbarBlank />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import NavbarBlank from "~/components/mollecules/NavbarBlank";
import Footer from "~/components/mollecules/Footer";
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    NavbarBlank,
    Footer,
  },
});
</script>

<style></style>
