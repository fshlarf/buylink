<template>
  <div>
    <Navbar />
    <HeaderSection />
    <AboutUsSection />
    <BenefitSection />
    <FlowSection />
    <TransactionSection />
    <PaymentSection />
    <TestimonySection />
    <FaqSection />
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Navbar from "~/components/mollecules/Navbar";
import HeaderSection from "../components/organisms/HeaderSection";
import AboutUsSection from "../components/organisms/AboutUsSection";
import BenefitSection from "../components/organisms/BenefitSection";
import FlowSection from "../components/organisms/FlowSection";
import TransactionSection from "../components/organisms/TransactionSection";
import PaymentSection from "../components/organisms/PaymentSection";
import TestimonySection from "../components/organisms/TestimonySection";
import FaqSection from "../components/organisms/FaqSection";
import Footer from "../components/mollecules/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    HeaderSection,
    AboutUsSection,
    BenefitSection,
    FlowSection,
    TransactionSection,
    PaymentSection,
    TestimonySection,
    FaqSection,
    Footer,
  },
});
</script>

<style></style>
