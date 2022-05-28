<template>
  <div class="bg-white w-full">
    <div
      id="navbar"
      class="flex justify-center items-center py-2 space-x-12 mx-auto font-semibold"
    >
      <div class="px-8 cursor-pointer" @click="toHomePage">
        <img
          class="w-[58px] mx-auto"
          src="/images/icons/logo.svg"
          alt="logo buylink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  useRouter,
} from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const router = useRouter();

    const toHomePage = () => {
      router.push("/");
    };

    return {
      toHomePage,
    };
  },
});
</script>

<style></style>
