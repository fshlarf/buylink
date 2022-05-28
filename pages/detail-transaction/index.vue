<template>
  <div>
    <Header />
    <div class="container py-8 grid grid-cols-7 gap-8 mt-6">
      <div class="col-span-5">
        <div>
          <h3 class="text-24 font-semibold mb-3">General Info</h3>
          <p class="text-20 text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi
            consequat, dictumst blandit. Accumsan aliquet pellentesque massa
            pulvinar. Vitae urna, venenatis, nunc enim. Vitae blandit urna erat
            mauris ut morbi varius.
          </p>
          <hr class="mt-6" />
        </div>
        <div class="mt-8">
          <h3 class="text-24 font-semibold mb-3">Payment Method</h3>
          <div class="flex items-center space-x-5 py-2">
            <div class="border rounded py-3 px-5 bg-white">
              <img
                class="w-[105px]"
                src="/images/payment/bni.png"
                alt="bank bni"
              />
            </div>
            <div class="border rounded py-3 px-5 bg-white">
              <img
                class="w-[105px]"
                src="/images/payment/bca.png"
                alt="bank bca"
              />
            </div>
            <div class="border rounded py-3 px-5 bg-white">
              <img
                class="w-[105px]"
                src="/images/payment/mandiri.png"
                alt="bank mandiri"
              />
            </div>
          </div>
          <hr class="mt-4" />
        </div>
        <div class="mt-8">
          <h3 class="text-24 font-semibold mb-3">Flow Proses</h3>
          <div class="pt-2">
            <div
              v-for="(flow, id) in flowProcess"
              :key="id"
              class="flex items-start space-x-5 my-2"
            >
              <div class="w-14">
                <img
                  class="w-[24px] h-[24px] mb-3 mx-auto"
                  src="/images/detail-transaction/circle-flow.png"
                  alt="circle"
                />
                <img
                  v-if="id < flowProcess.length - 1"
                  class="mx-auto"
                  src="/images/detail-transaction/arrow-flow.png"
                  alt="arrow"
                />
              </div>
              <div>
                <h4 class="text-18 font-bold">{{ flow.title }}</h4>
                <p class="font-medium">
                  {{ flow.description }}
                </p>
              </div>
            </div>
          </div>
          <hr class="mt-6" />
        </div>

        <div class="mt-8">
          <h3 class="text-24 font-semibold mb-3">Proses pindah tangan Akun</h3>
          <p class="text-20 font-medium text-grey">
            Untuk informasi proses pindah tangan akun silahkan klik card di
            bawah ini:
          </p>
          <div class="relative z-0 w-[320px] p-0 my-4">
            <img
              src="/images/detail-transaction/information-center.png"
              alt="information center"
            />
            <nuxt-link
              class="information-center text-white min-w-max underline"
              to="/"
              >Information Center Page</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <PriceSection />
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  useRouter,
} from "@nuxtjs/composition-api";
import Header from "./views/header";
import PriceSection from "./views/price-section";
import Button from "~/components/atoms/Button";
export default defineComponent({
  layout: "secondary",
  components: {
    Header,
    Button,
    PriceSection,
  },
  setup() {
    const flowProcess = ref([
      {
        title: "Masuk ke Facebook",
        description:
          "Langkah pertama yang harus kalian lakukan adalah masuk ke dalam akun Facebook yang langsung terhubung ke game PUBG Mobile kalian.",
      },
      {
        title: "Masuk ke Setting dan Privasi",
        description:
          "Langkah kedua yang harus kalian lakukan adalah masuk ke dalam menu Setting dan Privasi. Yang berada di bagian paling bawah dan masuk ke menu Setting secara langsung.",
      },
      {
        title: "Masuk ke Pengaturan Aplikasi dan Website",
        description:
          "Langkah ketiga yang harus kalian lakukan adalah masuk ke dalam pengaturan aplikasi dan website. Nah, setelah itu kalian akan diarahkan ke lama selanjutnya.",
      },
      {
        title: "Log in with Facebook",
        description:
          "Langkah keempat yang harus kalian lakukan adalah masuk ke fitur Login With Facebook. Nanti kalian akan diarahkan ke laman yang berisi game-game atau aplikasi yang kalian hubungkan.",
      },
      {
        title: "Selesai",
        description:
          "Langkah kelima yang harus kalian lakukan adalah memilih game PUBG Mobile dan lakukan remove secara langsung. Setelah remove, otomatis akun PUBG Mobile kalian telah ter-unbind dari akun Facebook kalian.",
      },
    ]);

    return {
      flowProcess,
    };
  },
});
</script>

<style>
.information-center {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
