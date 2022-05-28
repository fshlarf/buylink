<template>
  <div class="w-full relative z-0">
    <div class="w-full wallpaper">
      <img
        class="w-full"
        src="/images/detail-transaction/wallpaper.png"
        alt="background wallpaper"
      />
    </div>

    <div class="absolute z-40 product-img w-full">
      <div class="container flex justify-end">
        <img
          class="w-[320px] h-[320px]"
          src="/images/detail-transaction/product.png"
          alt="product image"
        />
      </div>
    </div>

    <div class="absolute z-30 bottom-0 w-full product-title">
      <div class="container py-4 text-white">
        <div class="flex space-x-3 items-center">
          <p class="text-24 font-semibold">PUBG Mobile 100 UC</p>
          <p class="bg-open rounded-full text-8 font-semibold py-1 px-2">
            OPEN
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <p class="text-32 font-bold">Rp17.000</p>
          <p class="text-14 line-through">Rp25.000</p>
          <p class="text-12 font-medium bg-[#DE5555] p-1 rounded">15%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.product-img {
  top: 50%;
  transform: translateY(-50%);
}
.product-title {
  overflow: hidden;
  border-radius: 0px 0px 25px 25px;
  backdrop-filter: blur(10px);
}
.product-title::after {
  position: absolute;
  z-index: -10;
  content: "";
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 20%;
}
.wallpaper::after {
  position: absolute;
  z-index: 10;
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 40%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style>
