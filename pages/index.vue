<template>
  <div>
    <HeaderSection />
    <AboutUsSection />
    <BenefitSection />
    <FlowSection />
    <TransactionSection />
    <PaymentSection />
    <TestimonySection />
    <FaqSection />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import HeaderSection from "../components/organisms/HeaderSection";
import AboutUsSection from "../components/organisms/AboutUsSection";
import BenefitSection from "../components/organisms/BenefitSection";
import FlowSection from "../components/organisms/FlowSection";
import TransactionSection from "../components/organisms/TransactionSection";
import PaymentSection from "../components/organisms/PaymentSection";
import TestimonySection from "../components/organisms/TestimonySection";
import FaqSection from "../components/organisms/FaqSection";

export default defineComponent({
  components: {
    HeaderSection,
    AboutUsSection,
    BenefitSection,
    FlowSection,
    TransactionSection,
    PaymentSection,
    TestimonySection,
    FaqSection,
  },
});
</script>

<style></style>
