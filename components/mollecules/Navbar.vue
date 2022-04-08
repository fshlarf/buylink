<template>
  <div class="fixed z-20 top-0 w-full">
    <div
      id="navbar"
      class="hidden lg:flex lg:justify-center lg:items-center py-2 space-x-12 mx-auto font-semibold"
    >
      <div
        class="cursor-pointer"
        @click="scrollToSection(menu.id)"
        v-for="(menu, id) in leftMenu"
        :key="id"
      >
        {{ menu.name }}
      </div>
      <div class="px-8 cursor-pointer" @click="scrollToSection('top')">
        <img
          class="w-[58px] mx-auto"
          src="/images/icons/logo.png"
          alt="logo buylink"
        />
      </div>
      <div
        class="cursor-pointer"
        @click="scrollToSection(menu.id)"
        v-for="(menu, id) in rightMenu"
        :key="'A' + id"
      >
        {{ menu.name }}
      </div>
    </div>
    <div class="lg:hidden relative z-40">
      <div class="bg-white w-full">
        <div class="flex justify-between items-center py-2 px-8 bg-white">
          <img
            class="w-[48px]"
            src="/images/icons/logo.png"
            alt="logo buylink"
            @click="scrollToSection('top')"
          />
          <p v-if="isShowMenu" class="text-soft-purple text-14 font-bold">
            MENU
          </p>
          <button @click="toggleMenu" class="w-[48px]">
            <img
              v-if="!isShowMenu"
              class="w-[32px] mx-auto"
              src="/images/icons/burger-menu.svg"
              alt="burger menu"
            />
            <img
              v-else
              class="w-[32px] mx-auto"
              src="/images/icons/x-menu.svg"
              alt="x menu"
            />
          </button>
        </div>
      </div>
      <transition name="menu">
        <div v-if="isShowMenu" class="w-full bg-white text-center py-8">
          <ul class="space-y-5">
            <li
              class="font-bold text-24 text-primary-dark"
              v-for="(menu, id) in menus"
              :key="id"
            >
              <div @click="scrollToSection(menu.id)">{{ menu.name }}</div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div
      v-if="isShowMenu"
      class="lg:!hidden w-full h-screen bg-black opacity-30 absolute -z-50 top-0 left-0"
      @click="isShowMenu = !isShowMenu"
    ></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const menus = ref([
      {
        id: "service",
        name: "Layanan",
      },
      {
        id: "benefit",
        name: "Manfaat",
      },
      {
        id: "flow",
        name: "Cara Pesan",
      },
      {
        id: "testimony",
        name: "Testimoni",
      },
      {
        id: "faq",
        name: "FAQ",
      },
      {
        id: "terms",
        name: "Syarat & Ketentuan",
      },
    ]);

    const leftMenu = ref(menus.value.slice(0, 3));
    const rightMenu = ref(menus.value.slice(3, 6));

    const isShowMenu = ref(false);

    const toggleMenu = () => {
      isShowMenu.value = !isShowMenu.value;
    };

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

    onMounted(() => {
      window.onscroll = () => {
        handleScrollEffect();
      };
    });

    const scrollToSection = (id) => {
      if (id === "top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (id === "terms") {
      } else {
        const section = document.getElementById(id);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        isShowMenu.value = false;
      }
    };

    return {
      menus,
      leftMenu,
      rightMenu,
      isShowMenu,
      toggleMenu,
      scrollToSection,
    };
  },
});
</script>

<style>
nuxt-link {
  scroll-behavior: smooth;
}
.bg-nav {
  background-color: white;
  transition: background-color 500ms;
}
.bg-transparent {
  background-color: transparent;
  transition: background-color 500ms;
}

.menu-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.menu-enter-to {
  opacity: 1;
}
.menu-enter-active {
  transition: all 0.3s ease;
}
.menu-leave-from {
  opacity: 1;
}
.menu-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.menu-leave-active {
  transition: all 0.3s ease;
}
</style>
