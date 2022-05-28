<template>
  <div class="space-y-7">
    <h1 class="font-bold text-24">Data Produk</h1>
    <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
      <p class="col-span-1 font-semibold">Judul Produk</p>
      <Input
        class="lg:col-span-4"
        placeholder="Cth: Akun PUBG Premium, Akun Mobile Legend Premium"
      />
    </div>
    <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
      <p class="col-span-1 font-semibold">Deskripsi</p>
      <textarea
        rows="3"
        class="lg:col-span-4 w-full border box border-soft-purple rounded-lg py-4 px-3 focus:outline-none"
        placeholder="Masukkan deskripsi mengenai produk"
      />
    </div>
    <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
      <p class="col-span-1 font-semibold">Harga Produk</p>
      <Input class="lg:col-span-4" placeholder="Cth: 500000" />
    </div>
    <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
      <p class="col-span-1 font-semibold">Foto Produk</p>
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
</template>

<script>
import Input from "../../../components/atoms/input";
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Input,
  },
  setup() {
    onMounted(() => {
      var peoples = [
        { name: "bob", dinner: "pizza" },
        { name: "john", dinner: "sushi" },
        { name: "larry", dinner: "hummus" },
        { name: "john", dinner: "pie" },
      ];

      var filteredResult = peoples.filter((val) => {
        return val.name.includes("bo") || val.dinner.includes("pi");
      });
      console.log(filteredResult);
    });
  },
});
</script>

<style>
.box {
  border: solid rgba(162, 182, 212, 0.5) 2px;
}
.box:focus {
  border: solid #0194f3 2px;
}
</style>
