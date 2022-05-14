<template>
  <div>
    <NavbarBlank />
    <div class="container py-24 md:py-32">
      <h1 class="text-18 md:text-32 text-center xl:text-left font-bold">
        Buat Halaman Transaksi
      </h1>
      <div
        class="flex justify-center items-center space-x-2 md:space-x-10 my-10"
      >
        <CircleNumber @click="changeStep(dataStep[0])" :data="dataStep[0]" />
        <img src="/images/icons/dotted-line.svg" alt="separator" />
        <CircleNumber @click="changeStep(dataStep[1])" :data="dataStep[1]" />
        <img src="/images/icons/dotted-line.svg" alt="separator" />
        <CircleNumber @click="changeStep(dataStep[2])" :data="dataStep[2]" />
      </div>
      <div class="rounded-lg md:shadow-xl md:p-12">
        <transition name="form">
          <div v-if="activeFlow === 1">
            <div class="space-y-4 md:space-y-7">
              <h1 class="font-bold text-18 md:text-24">Data Diri</h1>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Nama Lengkap
                </p>
                <Input
                  class="lg:col-span-4"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  E-mail
                </p>
                <Input class="lg:col-span-4" placeholder="Masukkan e-mail" />
              </div>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Whatsapp
                </p>
                <Input
                  class="lg:col-span-4"
                  placeholder="Masukkan nomor whatsapp"
                />
              </div>
            </div></div
        ></transition>
        <transition name="form">
          <div v-if="activeFlow === 2">
            <div class="space-y-4 md:space-y-7">
              <h1 class="font-bold text-18 md:text-24">Data Produk</h1>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Judul Produk
                </p>
                <Input
                  class="lg:col-span-4"
                  placeholder="Cth: Akun PUBG Premium, Akun Mobile Legend Premium"
                />
              </div>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Deskripsi
                </p>
                <textarea
                  rows="3"
                  class="lg:col-span-4 w-full border box border-soft-purple rounded-lg py-4 px-3 focus:outline-none"
                  placeholder="Masukkan deskripsi mengenai produk"
                />
              </div>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Harga Produk
                </p>
                <Input class="lg:col-span-4" placeholder="Cth: 500000" />
              </div>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Foto Produk
                </p>
                <div class="max-w-max cursor-pointer">
                  <label
                    for="uploadFile"
                    class="block w-24 h-24 p-8 rounded-lg border border-dashed border-soft-purple text-4xl text-soft-purple flex justify-center items-center opacity-50 cursor-pointer"
                    >+</label
                  >
                  <input class="hidden" type="file" id="uploadFile" />
                </div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="form">
          <div v-if="activeFlow === 3">
            <div class="space-y-4 md:space-y-7">
              <h1 class="font-bold text-18 md:text-24">Data Withdraw</h1>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Nama Bank
                </p>
                <Input
                  class="lg:col-span-4"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  No. Rekening
                </p>
                <Input class="lg:col-span-4" placeholder="Masukkan e-mail" />
              </div>
              <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
                <p
                  class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
                >
                  Nama Pemilik Rekening
                </p>
                <Input
                  class="lg:col-span-4"
                  placeholder="Masukkan nomor whatsapp"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div
        class="block md:flex md:justify-end md:items-center md:space-x-5 mt-12 w-full"
      >
        <Button
          add-class="font-medium w-full md:w-1/3 lg:w-1/4 xl:w-1/6 mb-2 md:mb-0"
          radius="rounded-lg"
          type="btn-secondary"
          label="Batal"
          @click="toHomePage"
        />
        <Button
          v-if="activeFlow === 3"
          add-class="font-medium w-full md:w-1/3 lg:w-1/4 xl:w-1/6"
          radius="rounded-lg"
          label="Simpan"
        />
        <Button
          v-else
          add-class="font-medium w-full md:w-1/3 lg:w-1/4 xl:w-1/6"
          radius="rounded-lg"
          label="Selanjutnya"
          @click="nextStep(activeFlow + 1)"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Button from "../../components/atoms/Button.vue";
import Input from "../../components/atoms/input";
import PersonalData from "./views/personal-data-form.vue";
import ProductData from "./views/product-data-form.vue";
import WithdrawData from "./views/withdraw-data-form.vue";
import NavbarBlank from "../../components/mollecules/NavbarBlank.vue";
import Footer from "../../components/mollecules/Footer.vue";
import CircleNumber from "../../components/atoms/CircleNumber.vue";
import {
  defineComponent,
  ref,
  onMounted,
  useRouter,
} from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Button,
    Input,
    Footer,
    NavbarBlank,
    CircleNumber,
    PersonalData,
    ProductData,
    WithdrawData,
  },
  setup() {
    const router = useRouter();
    const activeFlow = ref(1);
    const dataStep = ref([
      {
        number: 1,
        name: "Data Diri",
        isActive: true,
      },
      {
        number: 2,
        name: "Data Produk",
        isActive: false,
      },
      {
        number: 3,
        name: "Data Withdraw",
        isActive: false,
      },
    ]);

    const changeStep = (step) => {
      activeFlow.value = step.number;
      dataStep.value.forEach((el) => {
        el.isActive = false;
      });
      step.isActive = true;
    };

    const nextStep = (step) => {
      activeFlow.value = step;
      changeStep(dataStep.value[step - 1]);
    };

    const toHomePage = () => {
      router.push("/");
    };

    return {
      activeFlow,
      dataStep,
      changeStep,
      nextStep,
      toHomePage,
    };
  },
});
</script>

<style>
.form-enter {
  opacity: 0;
}
.form-enter-to {
  opacity: 1;
}
.form-enter-active {
  transition: all 1s ease;
}
</style>
