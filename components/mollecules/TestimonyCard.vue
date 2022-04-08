<template>
  <div class="w-full">
    <transition
      v-if="[1, 3, 5].includes(dataTestimony.id)"
      name="faded"
      mode="out-in"
      class="overflow-hidden"
    >
      <div
        v-if="dataTestimony.testimony"
        :key="dataTestimony.id"
        class="text-center rounded-xl shadow-xl p-4 lg:p-6 xl:p-8 bubble"
      >
        <p class="text-18 font-semibold">{{ dataTestimony.title }}</p>
        <p class="text-14 text-gray relative z-10 mt-3">
          {{ dataTestimony.testimony }}
        </p>
      </div>
    </transition>
    <transition
      v-else
      name="faded-second"
      mode="out-in"
      class="overflow-hidden"
    >
      <div
        v-if="dataTestimony.testimony"
        :key="dataTestimony.id"
        class="text-center rounded-xl shadow-xl p-4 lg:p-6 xl:p-8 bubble"
      >
        <p class="text-18 font-semibold">{{ dataTestimony.title }}</p>
        <p class="text-14 text-gray relative z-10 mt-3">
          {{ dataTestimony.testimony }}
        </p>
      </div>
    </transition>
    <div class="mt-8 flex justify-center items-center space-x-3">
      <img class="w-[56px]" :src="dataTestimony.photo" alt="testimony photo" />
      <div>
        <p class="text-18 font-bold">{{ dataTestimony.name }}</p>
        <p>{{ dataTestimony.job }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    dataTestimony: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style scoped>
.faded-enter {
  opacity: 0;
  transform: translateY(-200px);
}
.faded-enter-to {
  opacity: 1;
}
.faded-enter-active {
  transition: all 0.5s ease;
}
.faded-leave-from {
  opacity: 1;
}
.faded-leave-to {
  opacity: 0;
}
.faded-leave-active {
  transition: all 0.3s ease;
}
.faded-second-enter {
  opacity: 0;
  transform: translateY(-200px);
}
.faded-second-enter-to {
  opacity: 1;
}
.faded-second-enter-active {
  transition: all 0.7s ease;
}
.faded-second-leave-from {
  opacity: 1;
}
.faded-second-leave-to {
  opacity: 0;
}
.faded-second-leave-active {
  transition: all 0.3s ease;
}
.bubble {
  position: relative;
}

.bubble:after {
  position: absolute;
  z-index: 0;
  content: "";
  background-color: white;
  margin: 0 auto;
  right: 0;
  left: 0;
  bottom: -9px;
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
}
</style>
