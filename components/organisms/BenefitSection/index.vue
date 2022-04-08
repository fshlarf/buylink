<template>
  <div id="benefit" class="container py-20 text-center">
    <h1 class="text-primary-dark text-32 md:text-36 xl:text-44 font-bold">
      What we <span class="text-primary">provide</span>
    </h1>
    <p
      class="text-subtitle text-14 md:text-18 lg:text-20 max-w-2xl mx-auto my-4"
    >
      Skilline is one powerful online software suite that combines all the tools
      needed to run a successful school or office.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:px-32 mt-12">
      <div
        v-for="(benefit, id) in benefits"
        :key="id"
        class="text-left px-6 py-8 shadow-card"
        :class="`${[0, 3].includes(id) ? 'bg-[#fdfdfd]' : 'bg-white'}`"
      >
        <h3 class="md:text-20 font-semibold">{{ benefit.name }}</h3>
        <p class="text-gray mt-2 text-14 md:text-16">{{ benefit.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const benefits = ref([
      {
        name: "Mudah & Praktis",
        desc: "Tanpa Registrasi, login dan tanpa buat toko transaksi kamu langsung bisa dibuat",
      },
      {
        name: "Terjamin Aman",
        desc: "Buylink sebagai rekening bersama memberikan keamanan untuk transaksi akun dan item digital",
      },
      {
        name: "Withdraw Cepat",
        desc: "Proses withdraw cepat setelah pembeli konfirmasi selesai",
      },
      {
        name: "Responsif",
        desc: "Admin buylink akan membantu apabila terjadi kendala proses tansaksimu",
      },
    ]);

    return {
      benefits,
    };
  },
});
</script>

<style></style>
