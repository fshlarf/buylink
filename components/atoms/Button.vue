<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :class="`px-10 py-3 font-semibold ${type} ${textSize} ${radius} ${addClass}`"
  >
    <div v-if="isLoading" class="flex justify-center items-center">
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <p>Loading</p>
    </div>
    <div v-else>
      {{ label }}
    </div>
  </button>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "btn-primary",
    },
    textSize: {
      type: String,
      default: "text-18",
    },
    radius: {
      type: String,
      default: "rounded-full",
    },
    label: {
      type: String,
      default: "",
    },
    addClass: {
      type: String,
      default: "",
    },
  },
});
</script>

<style></style>
