<template>
  <div id="testimony" class="container py-20">
    <h1
      class="text-center text-32 md:text-36 xl:text-44 text-primary font-bold"
    >
      <span class="text-primary-dark">Our clients</span> speak
    </h1>
    <div class="hidden mt-8 lg:mt-12 md:grid grid-cols-2 gap-4 lg:gap-8">
      <TestimonyCard
        v-for="(testimony, id) in activeTestimonies"
        :key="id"
        :data-testimony="testimony"
      />
    </div>
    <div class="mt-8 grid grid-cols-1 gap-4 md:hidden">
      <TestimonyCard
        v-for="(testimony, id) in activeTestimoniesMobile"
        :key="id"
        :data-testimony="testimony"
      />
    </div>
    <div class="hidden md:flex justify-center space-x-2 items-center mt-8">
      <div
        v-for="(order, id) in totalPage"
        :key="id"
        :class="`${page === order ? 'active-slider' : 'slider cursor-pointer'}`"
        @click="onClickPagination(order)"
      ></div>
    </div>
    <div class="flex justify-center space-x-5 items-center mt-12 md:hidden">
      <button @click="prev">
        <img
          class="w-[20px] arrow-prev"
          src="/images/faq/up.svg"
          alt="arrow up"
        />
      </button>
      <button @click="next">
        <img
          class="w-[20px] arrow-next"
          src="/images/faq/up.svg"
          alt="arrow up"
        />
      </button>
    </div>
  </div>
</template>

<script>
import TestimonyCard from "../../mollecules/TestimonyCard.vue";
import {
  defineComponent,
  onMounted,
  computed,
  watch,
  ref,
} from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    TestimonyCard,
  },
  setup() {
    const testimonies = ref([
      {
        id: 1,
        name: "Jane Cooper",
        job: "CEO, ABC Corporation",
        photo: "/images/testimony/user.png",
        title: "Incredible Experience",
        testimony:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes.",
      },
      {
        id: 2,
        name: "Jane Cooper",
        job: "CEO, ABC Corporation",
        photo: "/images/testimony/user.png",
        title: "Incredible Experience",
        testimony:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes.",
      },
      {
        id: 3,
        name: "John Doe",
        job: "CEO, ABC Corporation",
        photo: "/images/testimony/user.png",
        title: "Incredible Experience",
        testimony:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes.",
      },
      {
        id: 4,
        name: "John Doe",
        job: "CEO, ABC Corporation",
        photo: "/images/testimony/user.png",
        title: "Incredible Experience",
        testimony:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes.",
      },
      {
        id: 5,
        name: "Jessica",
        job: "CEO, ABC Corporation",
        photo: "/images/testimony/user.png",
        title: "Incredible Experience",
        testimony:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes.",
      },
      {
        id: 6,
        name: "Jessica",
        job: "CEO, ABC Corporation",
        photo: "/images/testimony/user.png",
        title: "Incredible Experience",
        testimony:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks.",
      },
    ]);

    const activeTestimonies = ref([]);
    const activeTestimoniesMobile = ref([]);
    const totalPage = ref(1);
    const page = ref(1);
    const pageMobile = ref(1);
    const perPage = ref(2);
    const perPageMobile = ref(1);

    onMounted(() => {
      const total = testimonies.value.length;
      totalPage.value = total / 2;
      getCurrentPageData();
    });

    const onClickPagination = (order) => {
      page.value = order;
      getCurrentPageData();
    };

    const prev = () => {
      if (pageMobile.value === 1) {
        pageMobile.value = testimonies.value.length;
      } else {
        pageMobile.value -= 1;
      }
      getCurrentPageData();
    };

    const next = () => {
      if (pageMobile.value === testimonies.value.length) {
        pageMobile.value = 1;
      } else {
        pageMobile.value += 1;
      }
      getCurrentPageData();
    };

    const getCurrentPageData = () => {
      const start = page.value * perPage.value - perPage.value;
      const end = start + perPage.value;
      activeTestimonies.value = testimonies.value.slice(start, end);

      const startMobile =
        pageMobile.value * perPageMobile.value - perPageMobile.value;
      const endMobile = startMobile + perPageMobile.value;
      activeTestimoniesMobile.value = testimonies.value.slice(
        startMobile,
        endMobile
      );
    };

    return {
      page,
      totalPage,
      onClickPagination,
      activeTestimonies,
      activeTestimoniesMobile,
      testimonies,
      prev,
      next,
    };
  },
});
</script>

<style>
.slider {
  width: 10px;
  height: 10px;
  border: 2px solid #0194f3;
  border-radius: 50%;
  background-color: white;
}

.active-slider {
  width: 10px;
  height: 10px;
  border: 2px solid #0194f3;
  border-radius: 50%;
  background-color: #0194f3;
}

.arrow-prev {
  filter: invert(47%) sepia(23%) saturate(5910%) hue-rotate(178deg)
    brightness(94%) contrast(104%);
  transform: rotate(270deg);
}
.arrow-next {
  filter: invert(47%) sepia(23%) saturate(5910%) hue-rotate(178deg)
    brightness(94%) contrast(104%);
  transform: rotate(90deg);
}
</style>
