<template>
  <div class="fixed z-20 top-0 w-full">
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
    const handleScrollEffect = () => {
      const myNav = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        myNav.classList.add("bg-nav");
        myNav.classList.remove("bg-transparent");
      } else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("bg-nav");
      }
    };

    const router = useRouter();

    const toHomePage = () => {
      router.push("/");
    };

    onMounted(() => {
      window.onscroll = () => {
        handleScrollEffect();
      };
    });

    return {
      toHomePage,
    };
  },
});
</script>

<style>
.bg-nav {
  background-color: white;
  transition: background-color 500ms;
}
.bg-transparent {
  background-color: transparent;
  transition: background-color 500ms;
}
</style>
