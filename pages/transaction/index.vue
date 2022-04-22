<template>
  <div>
    <NavbarBlank />
    <div class="container py-32">
      <h1 class="text-32 font-bold">Buat Halaman Transaksi</h1>
      <div class="flex justify-center items-center space-x-10 my-10">
        <CircleNumber @click="changeStep(dataStep[0])" :data="dataStep[0]" />
        <img src="/images/icons/dotted-line.svg" alt="separator" />
        <CircleNumber @click="changeStep(dataStep[1])" :data="dataStep[1]" />
        <img src="/images/icons/dotted-line.svg" alt="separator" />
        <CircleNumber @click="changeStep(dataStep[2])" :data="dataStep[2]" />
      </div>
      <div class="rounded-lg shadow-xl p-12">
        <PersonalData />
        <ProductData />
      </div>
      <div class="flex justify-end items-center space-x-5 mt-12 w-full">
        <Button
          add-class="font-medium w-1/6"
          radius="rounded-lg"
          type="btn-secondary"
          label="Batal"
        />
        <Button
          add-class="font-medium w-1/6"
          radius="rounded-lg"
          label="Selanjutnya"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Button from "../../components/atoms/Button.vue";
import PersonalData from "./views/personal-data-form.vue";
import ProductData from "./views/product-data-form.vue";
import NavbarBlank from "../../components/mollecules/NavbarBlank.vue";
import Footer from "../../components/mollecules/Footer.vue";
import CircleNumber from "../../components/atoms/CircleNumber.vue";
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Button,
    Footer,
    NavbarBlank,
    CircleNumber,
    PersonalData,
    ProductData,
  },
  setup() {
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
      dataStep.value.forEach((el) => {
        el.isActive = false;
      });
      step.isActive = true;
    };

    return {
      dataStep,
      changeStep,
    };
  },
});
</script>

<style></style>
