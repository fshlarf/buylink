<template>
  <div class="container py-12 md:py-20">
    <AlertMessage
      class="mb-3"
      v-if="isShowAlert"
      message="Oops! Cek kembali data kamu ya!"
      @onClose="onCloseAlert"
    />
    <h1 class="text-18 md:text-32 text-center xl:text-left font-bold">
      Buat Halaman Transaksi
    </h1>
    <div class="flex justify-center items-center space-x-2 md:space-x-10 my-10">
      <CircleNumber @click="changeStep(dataStep[0])" :data="dataStep[0]" />
      <img src="/images/icons/dotted-line.svg" alt="separator" />
      <CircleNumber @click="changeStep(dataStep[1])" :data="dataStep[1]" />
      <img src="/images/icons/dotted-line.svg" alt="separator" />
      <CircleNumber @click="changeStep(dataStep[2])" :data="dataStep[2]" />
    </div>
    <div class="rounded-lg md:shadow-xl md:p-12">
      <transition name="form">
        <div v-show="activeFlow === 1">
          <div class="space-y-4 md:space-y-7">
            <h1 class="font-bold text-18 md:text-24">Data Diri</h1>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Nama Lengkap
              </p>
              <Input
                v-model="dataTransaction.name"
                class="lg:col-span-4"
                placeholder="Masukkan nama lengkap"
                validation="required|name"
                name="nama"
                @validate="validate"
              />
            </div>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                E-mail
              </p>
              <Input
                v-model="dataTransaction.email"
                class="lg:col-span-4"
                placeholder="Masukkan e-mail"
                validation="required|email"
                name="email"
                @validate="validate"
              />
            </div>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Whatsapp (62+)
              </p>
              <Input
                v-model="dataTransaction.phone"
                class="lg:col-span-4"
                placeholder="cth: 8123456789"
                validation="required|phone"
                name="nomor whatsapp"
                @validate="validate"
              />
            </div>
          </div></div
      ></transition>
      <transition name="form">
        <div v-show="activeFlow === 2">
          <div class="space-y-4 md:space-y-7">
            <h1 class="font-bold text-18 md:text-24">Data Produk</h1>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Judul Produk
              </p>
              <Input
                v-model="dataTransaction.title"
                class="lg:col-span-4"
                placeholder="Cth: Akun PUBG Premium, Akun Mobile Legend Premium"
                validation="required"
                name="judul produk"
                @validate="validate"
              />
            </div>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Deskripsi
              </p>
              <Textarea
                v-model="dataTransaction.description"
                class="lg:col-span-4"
                rows="3"
                placeholder="Masukkan deskripsi mengenai produk"
                validation="required"
                name="deskripsi produk"
                @validate="validate"
              />
            </div>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Harga Produk
              </p>
              <Input
                v-model="dataTransaction.price"
                class="lg:col-span-4"
                placeholder="Cth: 500000"
                validation="required|nominal"
                name="harga produk"
                @validate="validate"
              />
            </div>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Foto Produk (JPG)
              </p>
              <div class="w-full cursor-pointer lg:col-span-4">
                <label
                  v-if="dataTransaction.picture"
                  for="uploadFile"
                  class="block w-full h-12 rounded-lg border border-dashed border-soft-purple text-16 text-soft-purple flex justify-center items-center opacity-50 cursor-pointer"
                  >Ubah foto</label
                >
                <label
                  v-else
                  for="uploadFile"
                  class="block w-full h-12 rounded-lg border border-dashed border-soft-purple text-16 text-soft-purple flex justify-center items-center opacity-50 cursor-pointer"
                  >Unggah foto</label
                >
                <p v-if="errorImage" class="text-error text-xs pt-1">
                  {{ errorImage }}
                </p>
                <input
                  @change="onUploadImage"
                  class="hidden"
                  type="file"
                  id="uploadFile"
                  accept="image/jpg"
                />
                <img
                  class="mt-4 !w-full"
                  v-if="dataTransaction.picture"
                  :src="imageUrl"
                  alt="tes"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="form">
        <div v-show="activeFlow === 3">
          <div class="space-y-4 md:space-y-7">
            <h1 class="font-bold text-18 md:text-24">Data Withdraw</h1>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Nama Bank
              </p>
              <Input
                v-model="dataTransaction.bankName"
                class="lg:col-span-4"
                placeholder="Masukkan nama bank"
                validation="required"
                name="nama bank"
                @validate="validate"
              />
            </div>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                No. Rekening
              </p>
              <Input
                v-model="dataTransaction.bankAccount"
                class="lg:col-span-4"
                placeholder="Masukkan nomor rekening"
                validation="required"
                name="nomor rekening"
                @validate="validate"
              />
            </div>
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
              <p
                class="col-span-1 font-semibold text-14 md:text-16 mb-1 lg:mb-0"
              >
                Nama Pemilik Rekening
              </p>
              <Input
                v-model="dataTransaction.bankHolder"
                class="lg:col-span-4"
                placeholder="Masukkan pemilik rekening"
                validation="required|name"
                name="nama pemilik rekening"
                @validate="validate"
              />
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="block md:flex md:justify-end md:items-center md:space-x-5 mt-12 w-full"
    >
      <Button
        add-class="font-medium w-full md:w-1/3 lg:w-1/4 xl:w-1/6 mb-2 md:mb-0"
        radius="rounded-lg"
        type="btn-secondary"
        label="Batal"
        @click="toHomePage"
      />
      <Button
        v-if="activeFlow === 3"
        add-class="font-medium w-full md:w-1/3 lg:w-1/4 xl:w-1/6"
        radius="rounded-lg"
        label="Simpan"
        @click="checkFormValidation"
      />
      <Button
        v-else
        add-class="font-medium w-full md:w-1/3 lg:w-1/4 xl:w-1/6"
        radius="rounded-lg"
        label="Selanjutnya"
        @click="nextStep(activeFlow + 1)"
      />
    </div>
    <ModalConfirmation
      :is-show="isShowModalConfirmation"
      :is-loading="isLoadingSubmit"
      :data-transaction="dataTransaction"
      @onClose="onCloseModalConfirmation"
      @onSubmitData="onSubmitData"
    />
  </div>
</template>

<script>
import AlertMessage from "../../components/atoms/AlertMessage.vue";
import Button from "../../components/atoms/Button.vue";
import Input from "../../components/atoms/input";
import Textarea from "../../components/atoms/input/textarea.vue";
import ModalConfirmation from "./views/modal-confirmation.vue";
import CircleNumber from "../../components/atoms/CircleNumber.vue";
import {
  defineComponent,
  ref,
  computed,
  useRouter,
} from "@nuxtjs/composition-api";
import { v1 as uuid } from "uuid";
import axios from "axios";
import { checkImageFormat } from "../../helper/validation";

export default defineComponent({
  components: {
    AlertMessage,
    Button,
    Input,
    Textarea,
    CircleNumber,
    ModalConfirmation,
  },
  layout: "secondary",
  setup() {
    const router = useRouter();

    const activeFlow = ref(1);

    const dataStep = ref([
      {
        number: 1,
        name: "Data Diri",
        isActive: true,
      },
      {
        number: 2,
        name: "Data Produk",
        isActive: false,
      },
      {
        number: 3,
        name: "Data Withdraw",
        isActive: false,
      },
    ]);

    const changeStep = (step) => {
      activeFlow.value = step.number;
      dataStep.value.forEach((el) => {
        el.isActive = false;
      });
      step.isActive = true;
    };

    const nextStep = (step) => {
      activeFlow.value = step;
      changeStep(dataStep.value[step - 1]);
    };

    const toHomePage = () => {
      router.push("/");
    };

    const isShowModalConfirmation = ref(false);

    const onCloseModalConfirmation = () => {
      isShowModalConfirmation.value = false;
    };

    const isLoadingSubmit = ref(false);

    const isShowAlert = ref(false);

    const dataTransaction = ref({
      id: "",
      name: "",
      email: "",
      phone: "",
      title: "",
      description: "",
      price: "",
      picture: null,
      bankName: "",
      bankAccount: null,
      bankHolder: "",
    });

    const isValid = ref(true);

    const validate = (error) => {
      if (error) {
        isValid.value = false;
      } else {
        isValid.value = true;
      }
    };

    const errorImage = ref("");

    const onUploadImage = (e) => {
      const files = e.target.files;
      dataTransaction.value.picture = files[0];
      errorImage.value = checkImageFormat(dataTransaction.value.picture);
    };

    const imageUrl = computed(() => {
      return URL.createObjectURL(dataTransaction.value.picture);
    });

    const checkFormValidation = () => {
      if (!dataTransaction.value.picture) {
        errorImage.value = "Foto produk harus di upload";
        isValid.value = false;
      } else if (dataTransaction.value.picture) {
        errorImage.value = checkImageFormat(dataTransaction.value.picture);
        if (errorImage.value) {
          isValid.value = false;
        } else {
          isValid.value = true;
        }
      }

      for (const property in dataTransaction.value) {
        if (!dataTransaction.value[property] && property !== "id") {
          isValid.value = false;
        }
      }

      if (isValid.value) {
        isShowModalConfirmation.value = true;
        isShowAlert.value = false;
      } else {
        isShowAlert.value = true;
      }
    };

    const onCloseAlert = () => {
      isShowAlert.value = false;
    };

    const onSubmitData = async () => {
      isLoadingSubmit.value = true;

      dataTransaction.value.id = uuid();
      const formData = new FormData();
      formData.append("id", dataTransaction.value.id);
      formData.append("title", dataTransaction.value.title);
      formData.append("description", dataTransaction.value.description);
      formData.append("price", dataTransaction.value.price);
      formData.append("picture", dataTransaction.value.picture);
      formData.append("seller_name", dataTransaction.value.name);
      formData.append("seller_email", dataTransaction.value.email);
      formData.append("seller_phone", dataTransaction.value.phone);
      formData.append("seller_bank_name", dataTransaction.value.bankName);
      formData.append(
        "seller_bank_account_no",
        dataTransaction.value.bankAccount
      );
      formData.append(
        "seller_bank_account_name",
        dataTransaction.value.bankHolder
      );

      await axios
        .post("http://127.0.0.1:8080/list-item", formData, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((res) => {
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });

      isLoadingSubmit.value = false;
    };

    const getData = () => {
      axios
        .get("http://127.0.0.1:8080/item-summaries?take=1")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      activeFlow,
      dataStep,
      isLoadingSubmit,
      isValid,
      validate,
      errorImage,
      imageUrl,
      isShowAlert,
      dataTransaction,
      changeStep,
      nextStep,
      toHomePage,
      isShowModalConfirmation,
      onCloseModalConfirmation,
      onUploadImage,
      onSubmitData,
      getData,
      checkFormValidation,
      onCloseAlert,
    };
  },
});
</script>

<style>
.form-enter {
  opacity: 0;
}
.form-enter-to {
  opacity: 1;
}
.form-enter-active {
  transition: all 1s ease;
}
</style>
