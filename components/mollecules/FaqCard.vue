<template>
  <div>
    <div
      class="p-4 md:p-6 bg-[#F8F8F8] cursor-pointer"
      :class="`${faq.isActive ? 'rounded-t-lg' : 'rounded-lg'}`"
      @click="$emit('onClickFaq', faq)"
    >
      <div class="flex justify-between items-center space-x-4">
        <p
          class="text-14 md:text-18 font-semibold"
          :class="{ 'text-primary': faq.isActive }"
        >
          {{ faq.ask }}
        </p>
        <img
          v-if="faq.isActive"
          class="w-[15px]"
          src="/images/faq/up.svg"
          alt="arrow up"
        />
        <img
          v-else
          class="w-[15px]"
          src="/images/faq/down.svg"
          alt="arrow down"
        />
      </div>
    </div>
    <transition name="fade" class="overflow-hidden">
      <div v-if="faq.isActive" class="p-4 md:p-6 rounded-b-lg bg-[#F8F8F8]">
        <p class="text-14 md:text-18 text-gray">
          {{ faq.answer }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    faq: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style>
.fade-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
