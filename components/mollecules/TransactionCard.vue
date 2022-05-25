<template>
  <div class="rounded-lg shadow-card bg-white p-2 md:p-4 relative z-0">
    <div class="rounded-lg bg-black h-40"></div>
    <div class="mt-3 space-y-1 md:space-y-2">
      <p class="font-bold text-12 md:text-14">{{ dataTransaction.title }}</p>
      <p class="text-12 text-gray">
        {{ dataTransaction.description }}
      </p>
      <p class="text-14 md:text-16 text-primary-dark font-semibold">
        {{ toRupiah(dataTransaction.price) }}
      </p>
    </div>
    <div
      class="absolute z-10 top-4 left-4 md:top-8 md:left-8 rounded-full py-2 px-4 text-8 text-white"
      :class="labelBackground(dataTransaction.status)"
    >
      {{ status }}
    </div>
  </div>
</template>

<script>
import { toRupiah } from "../../helper/currency";
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    dataTransaction: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const status = ref("");

    const labelBackground = (transactionStatus) => {
      switch (transactionStatus) {
        case "available":
          status.value = "Open";
          return "bg-open";
          break;
        case "locked":
          status.value = "Locked";
          return "bg-locked";
          break;
        case "paid":
          status.value = "Paid";
          return "bg-paid";
          break;
        case "complete":
          status.value = "Complete";
          return "bg-complete";
          break;
        case "closed":
          status.value = "Closed";
          return "bg-closed";
          break;
      }
    };
    return {
      status,
      labelBackground,
      toRupiah,
    };
  },
});
</script>

<style>
.shadow-card {
  box-shadow: 1px 1px 15px 5px #a2b6d426;
}
</style>
