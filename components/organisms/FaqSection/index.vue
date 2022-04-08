<template>
  <div id="faq" class="relative z-0">
    <div class="curved bg-bg-second"></div>
    <div class="pb-16 lg:pb-24 xl:pb-32 relative z-10 bg-bg-second">
      <div class="container">
        <h1 class="text-center text-44 text-primary font-bold">F.A.Q</h1>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start mt-4 lg:mt-12"
        >
          <div class="space-y-4 lg:space-y-6">
            <FaqCard
              v-for="(faq, id) in leftFaq"
              :key="id"
              :faq="faq"
              @onClickFaq="onClickFaq"
            />
          </div>
          <div class="space-y-4 lg:space-y-6">
            <FaqCard
              v-for="(faq, id) in rightFaq"
              :key="id"
              :faq="faq"
              @onClickFaq="onClickFaq"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FaqCard from "../../mollecules/FaqCard.vue";
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    FaqCard,
  },
  setup() {
    const dataFaq = ref([
      {
        id: 1,
        ask: "Kajian & Koordinasi Kebijakan",
        answer:
          "Anda tidak akan dikenakan biaya apapun. Dengan kata lain, Anda berhak meminta kami mencarikan rumah yang sesuai dengan keinginan dan budget, tetapi Anda tidak perlu membayar sepeser pun biaya ke kami alias gratis. Selain itu Anda juga berhak berkonsultasi dengan Top marketing kami sehubungan dengan rumah yang ingin beli, baik mengenai surat-suratnya, harga pasaran, notarisnya, dll. Kami juga bisa membantu Anda memproses Kredit Pemilikan Rumah (KPR) ke bank-bank yang anda inginkan.",
        isActive: false,
      },
      {
        id: 2,
        ask: "Kajian & Koordinasi Kebijakan",
        answer:
          "Anda tidak akan dikenakan biaya apapun. Dengan kata lain, Anda berhak meminta kami mencarikan rumah yang sesuai dengan keinginan dan budget, tetapi Anda tidak perlu membayar sepeser pun biaya ke kami alias gratis. Selain itu Anda juga berhak berkonsultasi dengan Top marketing kami sehubungan dengan rumah yang ingin beli, baik mengenai surat-suratnya, harga pasaran, notarisnya, dll. Kami juga bisa membantu Anda memproses Kredit Pemilikan Rumah (KPR) ke bank-bank yang anda inginkan.",
        isActive: false,
      },
      {
        id: 3,
        ask: "Kajian & Koordinasi Kebijakan",
        answer:
          "Anda tidak akan dikenakan biaya apapun. Dengan kata lain, Anda berhak meminta kami mencarikan rumah yang sesuai dengan keinginan dan budget, tetapi Anda tidak perlu membayar sepeser pun biaya ke kami alias gratis. Selain itu Anda juga berhak berkonsultasi dengan Top marketing kami sehubungan dengan rumah yang ingin beli, baik mengenai surat-suratnya, harga pasaran, notarisnya, dll. Kami juga bisa membantu Anda memproses Kredit Pemilikan Rumah (KPR) ke bank-bank yang anda inginkan.",
        isActive: false,
      },
      {
        id: 4,
        ask: "Kajian & Koordinasi Kebijakan",
        answer:
          "Anda tidak akan dikenakan biaya apapun. Dengan kata lain, Anda berhak meminta kami mencarikan rumah yang sesuai dengan keinginan dan budget, tetapi Anda tidak perlu membayar sepeser pun biaya ke kami alias gratis. Selain itu Anda juga berhak berkonsultasi dengan Top marketing kami sehubungan dengan rumah yang ingin beli, baik mengenai surat-suratnya, harga pasaran, notarisnya, dll. Kami juga bisa membantu Anda memproses Kredit Pemilikan Rumah (KPR) ke bank-bank yang anda inginkan.",
        isActive: false,
      },
      {
        id: 5,
        ask: "Kajian & Koordinasi Kebijakan",
        answer:
          "Anda tidak akan dikenakan biaya apapun. Dengan kata lain, Anda berhak meminta kami mencarikan rumah yang sesuai dengan keinginan dan budget, tetapi Anda tidak perlu membayar sepeser pun biaya ke kami alias gratis. Selain itu Anda juga berhak berkonsultasi dengan Top marketing kami sehubungan dengan rumah yang ingin beli, baik mengenai surat-suratnya, harga pasaran, notarisnya, dll. Kami juga bisa membantu Anda memproses Kredit Pemilikan Rumah (KPR) ke bank-bank yang anda inginkan.",
        isActive: false,
      },
      {
        id: 6,
        ask: "Kajian & Koordinasi Kebijakan",
        answer:
          "Anda tidak akan dikenakan biaya apapun. Dengan kata lain, Anda berhak meminta kami mencarikan rumah yang sesuai dengan keinginan dan budget, tetapi Anda tidak perlu membayar sepeser pun biaya ke kami alias gratis. Selain itu Anda juga berhak berkonsultasi dengan Top marketing kami sehubungan dengan rumah yang ingin beli, baik mengenai surat-suratnya, harga pasaran, notarisnya, dll. Kami juga bisa membantu Anda memproses Kredit Pemilikan Rumah (KPR) ke bank-bank yang anda inginkan.",
        isActive: false,
      },
    ]);

    const onClickFaq = (faq) => {
      dataFaq.value.forEach((el) => {
        if (el.id !== faq.id) el.isActive = false;
      });
      faq.isActive = !faq.isActive;
    };

    const leftFaq = ref(dataFaq.value.slice(0, 3));
    const rightFaq = ref(dataFaq.value.slice(3, 6));

    return {
      dataFaq,
      leftFaq,
      rightFaq,
      onClickFaq,
    };
  },
});
</script>

<style scoped>
.curved {
  width: 100%;
  height: 400px;
  clip-path: ellipse(75% 100% at 50% 100%);
}

.container {
  margin-top: -250px;
}

@media only screen and (max-width: 600px) {
  .curved {
    width: 100%;
    height: 320px;
    clip-path: ellipse(85% 100% at 50% 100%);
  }
}
@media only screen and (min-width: 600px) and (max-width: 900px) {
  .curved {
    width: 100%;
    height: 320px;
    clip-path: ellipse(85% 100% at 50% 100%);
  }
}
@media only screen and (min-width: 900px) and (max-width: 1200px) {
  .curved {
    width: 100%;
    height: 350px;
    clip-path: ellipse(75% 100% at 50% 100%);
  }
}
</style>
