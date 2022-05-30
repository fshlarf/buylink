<template>
  <div class="">
    <div class="bg-gradient pt-8">
      <!-- Header -->
      <div class="py-24 lg:py-32 px-8 text-center text-32">
        <h1 class="lg:text-44 font-bold text-primary-dark w-[80%] mx-auto">
          Information
          <span class="text-primary lg:text-primary-dark">Center</span>
        </h1>
        <p class="text-16 lg:text-20 text-normal">
          Cara dan info detail pindah tangan akun dan item digital
        </p>
      </div>
    </div>

    <!--  Information Small-Medium -->
    <div class="container lg:hidden">
      <div>
        <h6 class="font-bold">Jual Beli Akun</h6>
        <ul class="my-6">
          <!-- Kategori Start -->
          <li class="py-3 my-6 hover:cursor-pointer">
            <div class="flex items-center justify-between">
              <div class="flex">
                <img
                  src="../../static/images/information-center/pabuji.png"
                  alt=""
                />
                <span class="ml-3 font-bold">PUBG Mobile</span>
              </div>
              <img src="../../static/images/icons/point.png" alt="" class="" />
            </div>
            <!-- Dropdown-Item -->
            <div class="py-6">
              <h3 class="text-14 font-bold">
                Cara Unbind Akun PUBG Mobile untuk jual beli
              </h3>
              <ul class="my-8">
                <li class="">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <CircleNumber :data="circleData" />
                      <img src="/images/icons/arrow-down.svg" alt="separator" />
                    </div>
                    <div class="w-[90%]">
                      <h4 class="text-18 font-bold">Masuk ke Facebook</h4>
                      <p class="font-medium text-12">
                        Langkah pertama yang harus kalian lakukan adalah masuk
                        ke dalam akun Facebook yang langsung terhubung ke game
                        PUBG Mobile kalian.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <CircleNumber :data="circleData" />
                      <img src="/images/icons/arrow-down.svg" alt="separator" />
                    </div>
                    <div class="w-[90%]">
                      <h4 class="text-18 font-bold">
                        Masuk ke Setting dan Privasi
                      </h4>
                      <p class="font-medium text-12">
                        Langkah kedua yang harus kalian lakukan adalah masuk ke
                        dalam menu Setting dan Privasi. Yang berada di bagian
                        paling bawah dan masuk ke menu Setting secara langsung.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <CircleNumber :data="circleData" />
                      <img src="/images/icons/arrow-down.svg" alt="separator" />
                    </div>
                    <div class="w-[90%]">
                      <h4 class="text-18 font-bold">
                        Masuk ke Pengaturan Aplikasi dan Website
                      </h4>
                      <p class="font-medium text-12">
                        Langkah ketiga yang harus kalian lakukan adalah masuk ke
                        dalam pengaturan aplikasi dan website. Nah, setelah itu
                        kalian akan diarahkan ke lama selanjutnya.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <CircleNumber :data="circleData" />
                      <img src="/images/icons/arrow-down.svg" alt="separator" />
                    </div>
                    <div class="w-[90%]">
                      <h4 class="text-18 font-bold">Log in with Facebook</h4>
                      <p class="font-medium text-12">
                        Langkah keempat yang harus kalian lakukan adalah masuk
                        ke fitur Login With Facebook. Nanti kalian akan
                        diarahkan ke laman yang berisi game-game atau aplikasi
                        yang kalian hubungkan.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <CircleNumber :data="circleData" />
                    </div>
                    <div class="w-[90%]">
                      <h4 class="text-18 font-bold">Selesai</h4>
                      <p class="font-medium text-12">
                        Langkah kelima yang harus kalian lakukan adalah memilih
                        game PUBG Mobile dan lakukan remove secara langsung.
                        Setelah remove, otomatis akun PUBG Mobile kalian telah
                        ter-unbind dari akun Facebook kalian.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="py-3 my-6 hover:cursor-pointer">
            <div class="flex items-center justify-between">
              <div class="flex">
                <img
                  src="../../static/images/information-center/molen.png"
                  alt=""
                />
                <span class="ml-3 font-medium">Mobile Legend</span>
              </div>
              <img
                src="../../static/images/icons/point.png"
                alt=""
                class="rotate-180"
              />
            </div>
          </li>
          <!-- Kategori End -->
        </ul>
      </div>
    </div>
    <!--  Information Small-Medium End -->

    <!-- Information Large -->
    <div class="py-18 container px-8 justify-around mx-auto hidden lg:flex">
      <!-- Jual Beli Info Large-->
      <div class="py-12 px-8 w-[25%]">
        <div>
          <h6 class="text-18 font-bold">Jual Beli Akun</h6>
          <ul class="my-6">
            <!-- Kategori Start -->
            <li class="py-3 my-6 hover:cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex">
                  <img
                    src="../../static/images/information-center/pabuji.png"
                    alt=""
                  />
                  <span class="ml-3 font-bold">PUBG Mobile</span>
                </div>
                <img
                  src="../../static/images/icons/point.png"
                  alt=""
                  class="rotate-90 w-[20px] h-[20px]"
                />
              </div>
            </li>

            <li class="py-3 my-6 hover:cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex">
                  <img
                    src="../../static/images/information-center/molen.png"
                    alt=""
                  />
                  <span class="ml-3 font-medium">Mobile Legend</span>
                </div>
              </div>
            </li>
            <!-- Kategori End -->
          </ul>
        </div>
        <div>
          <h6 class="text-18 font-bold">Jual Beli Item Digital</h6>
          <ul class="my-6">
            <li class="py-3 hover:bg-background hover:cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex">
                  <img
                    src="../../static/images/information-center/dota2.png"
                    alt=""
                  />
                  <span class="ml-3 font-semibold">Dota 2</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Jual Beli Info End -->

      <!-- Tata Cara Large-->
      <div class="py-12 px-8 w-[65%]">
        <h3 class="text-24 font-bold">
          Cara Unbind Akun PUBG Mobile untuk jual beli
        </h3>
        <ul class="my-8">
          <!-- Langkah Langkah -->
          <li class="">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <CircleNumber :data="circleData" />
                <img src="/images/icons/arrow-down.svg" alt="separator" />
              </div>
              <div class="w-[95%]">
                <h4 class="text-18 font-bold">Masuk ke Facebook</h4>
                <p class="font-medium">
                  Langkah pertama yang harus kalian lakukan adalah masuk ke
                  dalam akun Facebook yang langsung terhubung ke game PUBG
                  Mobile kalian.
                </p>
              </div>
            </div>
          </li>

          <li class="">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <CircleNumber :data="circleData" />
                <img src="/images/icons/arrow-down.svg" alt="separator" />
              </div>
              <div class="w-[95%]">
                <h4 class="text-18 font-bold">Masuk ke Setting dan Privasi</h4>
                <p class="font-medium">
                  Langkah kedua yang harus kalian lakukan adalah masuk ke dalam
                  menu Setting dan Privasi. Yang berada di bagian paling bawah
                  dan masuk ke menu Setting secara langsung.
                </p>
              </div>
            </div>
          </li>

          <li class="">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <CircleNumber :data="circleData" />
                <img src="/images/icons/arrow-down.svg" alt="separator" />
              </div>
              <div class="w-[95%]">
                <h4 class="text-18 font-bold">
                  Masuk ke Pengaturan Aplikasi dan Website
                </h4>
                <p class="font-medium">
                  Langkah ketiga yang harus kalian lakukan adalah masuk ke dalam
                  pengaturan aplikasi dan website. Nah, setelah itu kalian akan
                  diarahkan ke lama selanjutnya.
                </p>
              </div>
            </div>
          </li>

          <li class="">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <CircleNumber :data="circleData" />
                <img src="/images/icons/arrow-down.svg" alt="separator" />
              </div>
              <div class="w-[95%]">
                <h4 class="text-18 font-bold">Log in with Facebook</h4>
                <p class="font-medium">
                  Langkah keempat yang harus kalian lakukan adalah masuk ke
                  fitur Login With Facebook. Nanti kalian akan diarahkan ke
                  laman yang berisi game-game atau aplikasi yang kalian
                  hubungkan.
                </p>
              </div>
            </div>
          </li>

          <li class="">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <CircleNumber :data="circleData" />
              </div>
              <div class="w-[95%]">
                <h4 class="text-18 font-bold">Selesai</h4>
                <p class="font-medium">
                  Langkah kelima yang harus kalian lakukan adalah memilih game
                  PUBG Mobile dan lakukan remove secara langsung. Setelah
                  remove, otomatis akun PUBG Mobile kalian telah ter-unbind dari
                  akun Facebook kalian.
                </p>
              </div>
            </div>
          </li>

          <!-- Langkah Langkah End -->
        </ul>
      </div>
      <!-- Tata Cara End -->
    </div>
    <!-- Information Large End -->
  </div>
</template>

<script>
import CircleNumber from "../../components/atoms/CircleNumber.vue";
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  components: {
    CircleNumber,
  },
  setup() {
    const circleData = ref({
      number: "",
      name: "",
      isActive: true,
    });

    const products = ref([
      {
        isActive: true,
        nama: "PUBG Mobile",
        image: "../../static/images/information-center/pabuji.png",
      },
      {
        isActive: false,
        nama: "Mobile Legend",
        image: "../../static/images/information-center/molen.png",
      },
      {
        isActive: false,
        nama: "Game Lainnya",
        image: "../../static/images/information-center/controller.png",
      },
      {
        isActive: false,
        nama: "Instagram",
        image: "../../static/images/information-center/ig.png",
      },
      {
        isActive: false,
        nama: "Mobile Youtube",
        image: "../../static/images/information-center/yt.png",
      },
    ]);

    return {
      circleData,
      products,
    };
  },
});
</script>

<style lang="css" scoped>
.bg-gradient {
  width: 100%;
  background-image: linear-gradient(
    rgba(236, 242, 250, 1),
    rgba(254, 254, 255, 1),
    rgba(255, 255, 255, 1)
  );
}
</style>
