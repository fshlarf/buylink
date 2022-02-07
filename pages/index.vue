<template>
  <div>
    <section class="header-section">
      <header class="py-7 my-0.5">
        <Navbar />
        <Hero />
      </header>
    </section>
    <Values />
    <!-- <Benefits /> -->
    <Footer />
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "Faishal Arif",
    });

    const job = ref("Software Engineer");
    return {
      state,
      job,
    };
  },
});
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
body {
  font-family: "Inter", sans-serif;
}
:root {
  --black-1: #080e09;
  --black-2: #232323;
  --black-3: #101419;
  --gray-3: #e2e3e5;
  --gray-4: #c9c9c9;
  --gray-5: #adb2b8;
  --gray-6: #9c9c9c;
  --gray-7: #879fb0;
  --blue-primary: #0f52ba;
  --blue-secondary: #478fff;
  --blue-tertiary: #739ad5;
  --softBlue: #f9fcfc;
  --yellow: #ff9900;
}
.border-blue-primary {
  border-color: var(--blue-primary);
}
.text-blackText-1 {
  color: var(--black-1);
}
.text-blackText-2 {
  color: var(--black-2);
}
.text-blue-tertiary {
  color: var(--blue-tertiary);
}
.text-gray-6 {
  color: var(--gray-6);
}
.shadow-sblue {
  box-shadow: 0px 24px 32px rgba(15, 82, 186, 0.4);
}
.shadow-cardShadow {
  box-shadow: 12px 24px 80px rgba(15, 82, 186, 0.06);
}
.rounded-28 {
  border-radius: 28px;
}
.max-h-cardHotel {
  max-height: 300px;
}
.max-w-statisticHero {
  max-width: 85%;
}
.max-w-screen {
  max-width: 1440px;
}
.h-cardHotel {
  height: 420px;
}
.h-imageCard {
  height: 190px;
}
.w-imageCard {
  width: 268px;
}
.z-forBackground {
  z-index: -99;
}
.text-7 {
  font-size: 28px;
}
.bg-blue-primary {
  background-color: var(--blue-primary);
}
.bg-blue-primary:hover {
  background-color: var(--blue-secondary);
  box-shadow: 0px 24px 32px rgba(15, 82, 186, 0.4);
}
.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>
