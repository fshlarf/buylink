<template>
  <div class="bg-bg-second">
    <div class="pt-4 md:py-6 lg:py-14 xl:py-20 bg-curved">
      <div
        class="container mx-auto grid-cols-1 md:grid-cols-2 gap-6 grid items-center relative z-10 pt-20 pb-14 md:py-20"
      >
        <div class="order-2 md:order-1 text-center md:text-left">
          <h1
            class="text-32 lg:text-44 xl:text-52 font-extrabold leading-tight text-primary"
          >
            <span class="text-primary-dark">Rekening Bersama</span> Jual Beli
            Akun dan Item Digital
          </h1>
          <p class="text-subtitle lg:text-20 my-4">
            <b>Buylink</b> memudahkan untuk bertransaksi secara online.
          </p>
          <Button class="mt-3 mx-auto md:mx-0" label="Learn more" />
        </div>
        <img
          class="w-full order-1 md:order-2"
          src="/images/header/header-illust.png"
          alt="main illustration"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../atoms/Button.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Button,
  },
});
</script>

<style>
.bg-curved {
  width: 100%;
  clip-path: ellipse(96% 100% at 50% 0%);
  background-image: linear-gradient(#ffffff, #ecf2fa);
}

@media only screen and (max-width: 600px) {
  .bg-curved {
    clip-path: ellipse(130% 100% at 50% 0%);
  }
}
@media only screen and (min-width: 600px) and (max-width: 900px) {
  .bg-curved {
    clip-path: ellipse(110% 100% at 50% 0%);
  }
}
</style>
