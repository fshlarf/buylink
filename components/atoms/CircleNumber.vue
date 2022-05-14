<template>
  <div @click="$emit('click')" class="cursor-pointer">
    <div
      class="text-12 text-white rounded-full w-[24px] h-[24px] mx-auto text-center flex justify-center items-center"
      :class="`${data.isActive ? 'bg-primary' : 'bg-soft-purple'}`"
    >
      {{ data.number }}
    </div>
    <p
      class="text-12 md:text-16 mt-2 text-center"
      :class="`${data.isActive ? 'text-primary' : 'text-soft-purple'}`"
    >
      {{ data.name }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style></style>
