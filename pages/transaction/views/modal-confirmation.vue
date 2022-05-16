<template>
  <Modal :is-show="isShow" title="Konfirmasi Data Kamu" @onClose="onClose">
    <template v-slot:body>
      <p class="text-14 md:text-16">
        Apakah kamu sudah yakin dengan isi data kamu?
      </p>
      <div class="p-4 bg-gray-modal rounded-md mt-2">
        <p class="text-12 md:text-14 font-bold">Data Diri</p>
        <div class="text-12 md:text-14 font-medium grid grid-cols-3 gap-2 mt-2">
          <div class="space-y-2 text-gray">
            <p>Nama</p>
            <p>E-mail</p>
            <p>Whatsapp</p>
          </div>
          <div class="col-span-2 space-y-2">
            <p>{{ dataTransaction.name }}</p>
            <p>{{ dataTransaction.email }}</p>
            <p>{{ dataTransaction.phone }}</p>
          </div>
        </div>
      </div>
      <div class="p-4 bg-gray-modal rounded-md mt-2">
        <p class="text-12 md:text-14 font-bold">Data Produk</p>
        <div class="text-12 md:text-14 font-medium grid grid-cols-4 gap-2 mt-2">
          <div
            class="w-[48px] md:w-[72px] h-[48px] md:h-[72px] rounded-xl bg-[#DBDBDB] mt-1 overflow-hidden flex justify-center items-center"
          >
            <img
              class="min-w-full min-h-full img-product !object-cover"
              :src="imageUrl"
              alt="product image"
            />
          </div>
          <div class="col-span-3 space-y-2">
            <p class="font-semibold">{{ dataTransaction.title }}</p>
            <p class="text-10 md:text-12">{{ dataTransaction.description }}</p>
            <p class="font-bold">{{ toRupiah(dataTransaction.price) }}</p>
          </div>
        </div>
      </div>
      <div class="p-4 bg-gray-modal rounded-md mt-2">
        <p class="text-12 md:text-14 font-bold">Data Withdraw</p>
        <div class="text-12 md:text-14 font-medium grid grid-cols-3 gap-2 mt-2">
          <div class="space-y-2 text-gray">
            <p>Nama Bank</p>
            <p>No. Rekening</p>
            <p>Nama Holder</p>
          </div>
          <div class="col-span-2 space-y-2">
            <p>{{ dataTransaction.bankName }}</p>
            <p>{{ dataTransaction.bankAccount }}</p>
            <p>{{ dataTransaction.bankHolder }}</p>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex justify-end space-x-3 items-center">
        <Button
          :disabled="isLoading"
          radius="rounded-lg"
          padding="py-2 px-6"
          weight="font-medium"
          label="Kembali"
          type="btn-white"
          @click="onClose"
        />
        <Button
          :is-loading="isLoading"
          radius="rounded-lg"
          padding="py-2 px-6"
          weight="font-medium"
          label="Ya, simpan"
          type="btn-primary"
          @click="onSubmitData"
        />
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "~/components/atoms/Modal";
import Button from "~/components/atoms/Button";
import { defineComponent, computed } from "@nuxtjs/composition-api";
import { toRupiah } from "../../../helper/currency";

export default defineComponent({
  components: {
    Modal,
    Button,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    dataTransaction: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const imageUrl = computed(() => {
      if (props.dataTransaction.picture) {
        return URL.createObjectURL(props.dataTransaction.picture);
      } else {
        return "";
      }
    });

    const onClose = () => {
      emit("onClose");
    };

    const onSubmitData = () => {
      emit("onSubmitData");
    };

    return {
      onClose,
      onSubmitData,
      toRupiah,
      imageUrl,
    };
  },
});
</script>

<style>
.img-product {
  object-fit: cover !important;
}
</style>
