<template>
  <div class="container py-24 md:py-18">
    <div
      class="flex flex-col text-center justify-center items-center text-[16px]"
    >
      <img src="/images/status_payment/failed_payment.png" alt="" />
      <h2 class="md:text-32 text-20 font-bold my-4">
        Pembayaran Gagal diproses
      </h2>
      <p
        class="md:w-[60%] lg:w-[35%] text-center text-14 md:text-16 font-normal"
      >
        Mohon maaf proses pembayaran kamu gagal nih. Kita coba lagi yuk.
      </p>
      <nuxt-link to="/">
        <Button
          label="Coba Bayar Lagi"
          type="btn-primary"
          addClass="rounded-md mt-4"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Button from "../../components/atoms/Button.vue";
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Button,
  },
  layout: "secondary",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
