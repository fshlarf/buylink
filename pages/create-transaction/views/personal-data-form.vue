<template>
  <div class="space-y-7">
    <h1 class="font-bold text-24">Data Diri</h1>
    <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
      <p class="col-span-1 font-semibold">Nama Lengkap</p>
      <Input class="lg:col-span-4" placeholder="Masukkan nama lengkap" />
    </div>
    <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
      <p class="col-span-1 font-semibold">E-mail</p>
      <Input class="lg:col-span-4" placeholder="Masukkan e-mail" />
    </div>
    <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
      <p class="col-span-1 font-semibold">Whatsapp</p>
      <Input class="lg:col-span-4" placeholder="Masukkan nomor whatsapp" />
    </div>
  </div>
</template>

<script>
import Input from "../../../components/atoms/input";
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Input,
  },
});
</script>

<style></style>
