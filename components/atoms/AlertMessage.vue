<template>
  <div
    class="w-full rounded-md p-3 xl:p-5 flex justify-between items-center bg-alert-bg"
  >
    <div class="flex items-center space-x-2">
      <img
        class="w-[20px] h-[20px]"
        src="/images/icons/alert.svg"
        alt="alert"
      />
      <p class="text-14 font-medium text-error">{{ message }}</p>
    </div>
    <img
      @click="$emit('onClose')"
      class="w-[12px] h-[12px]"
      src="/images/icons/x-menu.svg"
      alt="close"
    />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    message: {
      type: String,
      default: "",
    },
  },
});
</script>

<style></style>
