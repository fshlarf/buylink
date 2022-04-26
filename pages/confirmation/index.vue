<template>
  <div>
    <NavbarBlank />
    <div
      class="container h-screen flex flex-col justify-center items-center text-[16px] py-32 sm:px-24"
    >
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
import NavbarBlank from "../../components/mollecules/NavbarBlank.vue";
import Button from "../../components/atoms/Button.vue";
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    NavbarBlank,
    Button,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
