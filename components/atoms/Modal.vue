<template>
  <div
    v-if="isShow"
    tabindex="0"
    class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
  >
    <div class="z-50 relative mx-auto my-0 w-full">
      <div
        class="modal-popup w-full md:w-3/4 lg:w-1/2 flex flex-col overflow-hidden rounded bg-white"
        :class="`${xl}`"
      >
        <!-- <button
          class="fill-current h-6 w-6 absolute right-3 top-3 font-3xl font-bold primary focus:outline-none"
          @click="onClose"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 primary">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> -->
        <div class="">
          <div class="pt-6 pb-3 px-5 md:px-7">
            <div class="pb-2">
              <h3 class="md:text-24 font-bold">{{ title }}</h3>
            </div>
            <div
              class="scroll-bar !overflow-y-auto !overscroll-auto overflow-hidden max-h-[35rem] lg:max-h-[45rem] xl:max-h-[35rem]"
            >
              <slot name="body"></slot>
            </div>
          </div>
          <div class="bg-gray-modal py-4 px-5 md:px-7">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
    <div
      class="z-40 overflow-auto backdrop backdrop-blur-2xl left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
      @click="onClose"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    xl: {
      type: String,
      default: "xl:w-1/3",
    },
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit("onClose");
    };

    return {
      onClose,
    };
  },
});
</script>

<style>
.modal-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 95%;
  max-width: 95%;
  min-width: 20rem;
}

.scroll-bar::-webkit-scrollbar {
  display: none;
}
.scroll-bar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
