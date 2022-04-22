<template>
  <div class="max-w-screen-2xl px-4 py-10 mb-16 mx-auto content">
    <div class="text-center section-heading mb-16">
      <div
        class="mb-3 text-4xl font-bold leading-relaxed text-blackText-2 lg:text-5xl"
      >
        Transaksi yang sudah dibuat
      </div>
    </div>
    <div class="flex justify-center flex-wrap">
      <card-transaction />
      <card-transaction />
      <card-transaction />
      <card-transaction />
      <card-transaction />
      <card-transaction />
      <card-transaction />
      <card-transaction />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
// import CardTransaction from "./mollecules/CardTransaction.vue";

export default defineComponent({
  // components: { CardTransaction },
});
</script>
