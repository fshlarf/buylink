<template>
  <div class="container py-24 md:py-32">
    <div class="flex flex-col justify-center items-center">
      <img src="/images/status_payment/success_payment.png" alt="" />
      <h2 class="lg:text-32 text-20 font-bold my-4">Pembayaran Berhasil</h2>
      <p
        class="lg:w-[50%] md:w-[65%] text-14 md:text-16 text-center font-normal"
      >
        Silahkan hubungi buyer untuk proses perpindahan akun Anda. Informasi
        detail buyer seperti berikut:
      </p>

      <Table />

      <nuxt-link to="/">
        <Button
          label="Kembali ke Homepage"
          type="btn-primary"
          addClass="rounded-md mt-4"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Button from "../../components/atoms/Button.vue";
import Table from "../../components/atoms/Table.vue";
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Button,
    Table,
  },
  layout: "secondary",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
