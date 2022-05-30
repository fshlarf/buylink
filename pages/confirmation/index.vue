<template>
  <div class="container py-24 md:py-32">
    <div class="flex flex-col justify-center items-center text-[16px] sm:px-24">
      <img src="/images/confirmation/illustration.png" alt="" />
      <p class="my-8 text-center lg:text-20 font-semibold">
        yeay akun sudah pindah tangan dan proses transaksi sudah selesai
      </p>
      <nuxt-link to="/">
        <Button
          label="kembali ke Homepage"
          type="btn-primary"
          addClass="rounded-md"
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
