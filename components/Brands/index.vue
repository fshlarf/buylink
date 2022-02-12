<template>
  <section class="w-full py-16 overflow-hidden bg-white relative">
    <div
      class="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"
    ></div>
    <div
      class="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] -skew-x-12 left-0 top-0"
    ></div>
    <div
      class="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center"
    >
      <svg
        class="w-10 h-10 mb-5"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M128.08 0c7.231.013 14.343.624 21.256 1.78V76.3l52.831-52.696a128.425 128.425 0 0 1 16.34 13.789 128.468 128.468 0 0 1 13.84 16.312L179.513 106.4h74.715A127.58 127.58 0 0 1 256 127.587v.173c0 7.226-.613 14.306-1.772 21.2H179.5l52.847 52.682a129.615 129.615 0 0 1-13.824 16.312h-.015a128.254 128.254 0 0 1-16.326 13.789l-52.846-52.696v74.52a130.321 130.321 0 0 1-21.243 1.781h-.186a130.26 130.26 0 0 1-21.23-1.78v-74.52l-52.831 52.695a128.401 128.401 0 0 1-30.18-30.1L76.5 148.96H1.785A126.984 126.984 0 0 1 0 127.72v-.371c.012-1.875.135-4.166.311-6.536l.055-.713c.522-6.671 1.419-13.7 1.419-13.7H76.5L23.666 53.705a126.265 126.265 0 0 1 13.81-16.286l.026-.026a127.746 127.746 0 0 1 16.344-13.789L106.677 76.3V1.78A130.278 130.278 0 0 1 127.933 0h.147Zm-.013 95.76h-.122c-9.509 0-18.616 1.74-27.034 4.902a76.662 76.662 0 0 0-4.915 26.952v.12a76.383 76.383 0 0 0 4.927 26.951 76.608 76.608 0 0 0 27.022 4.902h.122c9.51 0 18.617-1.74 27.022-4.902a76.146 76.146 0 0 0 4.915-26.952v-.12c0-9.484-1.747-18.57-4.915-26.951a76.614 76.614 0 0 0-27.022-4.902Z"
          fill="#FF4A00"
        ></path>
      </svg>
      <h2 class="text-gray-900 text-3xl font-bold font-serif">
        Membantu lebih dari 100+ transaksi
      </h2>
      <p class="text-gray-600 text-lg text-left sm:text-center max-w-lg mt-5">
        Kami berusaha membantu proses transaksi digital seperti jual beli akun
        Pubg Mobile, Mobile Legend, Akun Instagram dengan Followers Banyak, Akun
        Youtube Monetize, transaksi item untuk Dota 2 dan lainnya 🙌
      </p>
      <!-- <a
        href="#_"
        class="text-indigo-500 font-bold text-lg mt-5 flex items-center group"
      >
        <span>Learn More</span>
        <svg
          class="w-5 h-5 group-hover:ml-1 transition-all ease-out duration-200"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a> -->
      <div class="flex flex-wrap justify-start gap-6 mt-8">
        <pubg />
        <ml />
        <dota-2 />
        <instagram />
        <youtube />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import CardTransaction from "../mollecules/CardTransaction.vue";
import Pubg from "./views/pubg.vue";
import ml from "./views/ml.vue";
import Dota2 from "./views/dota2.vue";
import Instagram from "./views/instagram.vue";
import Youtube from "./views/youtube.vue";

export default defineComponent({
  components: { CardTransaction, Pubg, ml, Dota2, Instagram, Youtube },
});
</script>
