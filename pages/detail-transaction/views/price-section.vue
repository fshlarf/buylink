<template>
  <div class="p-5 rounded-md shadow-card space-y-2 text-grey">
    <p class="font-bold">Ringkasan Belanja</p>
    <div class="flex justify-between items-center">
      <p class="text-14 font-medium">Total</p>
      <p class="text-14 font-semibold">Rp17.000</p>
    </div>
    <div class="flex justify-between items-center">
      <p class="text-14 font-medium">Biaya Admin</p>
      <p class="text-14 font-semibold">Rp6.500</p>
    </div>
    <hr class="text-[#E0E0E0]" />
    <div class="flex justify-between items-center">
      <p class="text-14 font-medium">Sub Total</p>
      <p class="text-14 font-semibold">Rp23.500</p>
    </div>
    <Button
      class="w-full !mt-4"
      radius="rounded-md"
      text-size="text-14 md:text-16"
      label="Beli"
    />
    <div class="relative z-0">
      <div
        role="button"
        class="text-black flex justify-center items-center space-x-2 pt-3 max-w-max mx-auto"
        @click="onChangeTooltip"
      >
        <img
          class="w-[24px] h-[24px]"
          src="/images/icons/share.svg"
          alt="share"
        />
        <p class="font-medium">Share</p>
      </div>
      <div
        v-if="isShowShareLink"
        class="flex justify-center items-center space-x-3 shadow-md rounded-md p-3 min-w-max absolute z-10 top-12 bg-white share-box"
      >
        <img
          class="w-[32px] h-[32px]"
          src="/images/icons/share/facebook.svg"
          alt="facebook"
        />
        <img
          class="w-[32px] h-[32px]"
          src="/images/icons/share/whatsapp.svg"
          alt="whatsapp"
        />
        <img
          class="w-[32px] h-[32px]"
          src="/images/icons/share/instagram.svg"
          alt="instagram"
        />
        <img
          class="w-[32px] h-[32px]"
          src="/images/icons/share/twitter.svg"
          alt="twitter"
        />
        <img
          class="w-[32px] h-[32px]"
          src="/images/icons/share/copy.svg"
          alt="copy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import Button from "~/components/atoms/Button";
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const isShowShareLink = ref(false);

    const onChangeTooltip = () => {
      isShowShareLink.value = !isShowShareLink.value;
    };

    return {
      isShowShareLink,
      onChangeTooltip,
    };
  },
});
</script>

<style>
.share-box {
  left: 50%;
  transform: translateX(-50%);
}
.share-box::before {
  content: "";
  position: absolute;
  z-index: -100;
  top: -5px;
  margin: 0 auto;
  right: 0;
  left: 0;
  background-color: white;
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
}
</style>
