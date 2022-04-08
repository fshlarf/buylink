<template>
  <div id="flow" class="bg-bg-second py-20 text-center w-full">
    <h1 class="text-primary-dark text-32 md:text-36 xl:text-44 font-bold">
      The proccess <span class="text-primary">we follow</span>
    </h1>
    <p
      class="container text-subtitle text-14 md:text-18 lg:text-20 max-w-2xl mx-auto my-4"
    >
      Skilline is one powerful online software suite that combines all the tools
      needed to run a successful school or office.
    </p>
    <div
      class="space-y-12 lg:space-y-0 lg:flex justify-center lg:space-x-2 xl:space-x-4 lg:items-start mt-12"
    >
      <div class="text-center max-w-[180px] mx-auto lg:mx-0">
        <img class="mx-auto" src="/images/flow/step-1.svg" alt="step 1" />
        <p class="md:text-18 font-semibold">Create</p>
        <p class="text-14 md:text-16">Buat halaman transaksi</p>
      </div>
      <img
        src="/images/flow/dotted-line.svg"
        alt="line break"
        class="self-center mx-auto dot-line"
      />
      <div class="text-center max-w-[180px] mx-auto lg:mx-0">
        <img class="mx-auto" src="/images/flow/step-2.svg" alt="step 2" />
        <p class="md:text-18 font-semibold">Share</p>
        <p class="text-14 md:text-16">Share ke pembeli</p>
      </div>
      <img
        src="/images/flow/dotted-line.svg"
        alt="line break"
        class="self-center mx-auto dot-line"
      />
      <div class="text-center max-w-[180px] mx-auto lg:mx-0">
        <img class="mx-auto" src="/images/flow/step-3.svg" alt="step 3" />
        <p class="md:text-18 font-semibold">Transaction</p>
        <p class="text-14 md:text-16">Pembeli melakukan transaksi</p>
      </div>
      <img
        src="/images/flow/dotted-line.svg"
        alt="line break"
        class="self-center mx-auto dot-line"
      />
      <div class="text-center max-w-[180px] mx-auto lg:mx-0">
        <img class="mx-auto" src="/images/flow/step-4.svg" alt="step 4" />
        <p class="md:text-18 font-semibold">Confirmation</p>
        <p class="text-14 md:text-16">Pembeli konfirmasi selesai</p>
      </div>
      <img
        src="/images/flow/dotted-line.svg"
        alt="line break"
        class="self-center mx-auto dot-line"
      />
      <div class="text-center max-w-[180px] mx-auto lg:mx-0">
        <img class="mx-auto" src="/images/flow/step-5.svg" alt="step 5" />
        <p class="md:text-18 font-semibold">Cash out</p>
        <p class="text-14 md:text-16">Cairkan uangmu!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (max-width: 900px) {
  .dot-line {
    transform: rotate(90deg);
  }
}
</style>
