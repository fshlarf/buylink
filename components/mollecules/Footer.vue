<template>
  <div class="container py-12 lg:py-20">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start gap-6"
    >
      <div class="lg:col-span-2 text-12 md:text-14">
        <img
          class="w-[58px] h-[58px]"
          src="/images/logo.png"
          alt="logo buylink"
        />
        <div class="my-5 lg:my-8">
          <p>Copyright &copy; 2022 BuyLink</p>
          <p>All right reserved</p>
        </div>
        <div class="flex space-x-3 items-center">
          <img src="/images/footer/instagram.svg" alt="instagram" />
          <img src="/images/footer/dribble.svg" alt="dribble" />
          <img src="/images/footer/twitter.svg" alt="twitter" />
          <img src="/images/footer/youtube.svg" alt="youtube" />
        </div>
      </div>
      <div
        class="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-3 items-start"
      >
        <div class="mt-6 md:mt-0">
          <h3 class="font-medium text-16 md:text-20">Company</h3>
          <ul class="mt-5 space-y-3">
            <li>
              <nuxt-link class="text-14 md:text-16" to="#">About us</nuxt-link>
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#">Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#"
                >Contact us</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#">Pricing</nuxt-link>
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#"
                >Testimonials</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="mt-6 lg:mt-0">
          <h3 class="font-medium text-16 md:text-20">Support</h3>
          <ul class="mt-5 space-y-3">
            <li>
              <nuxt-link class="text-14 md:text-16" to="#"
                >Help center</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#"
                >Terms of service</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#">Legal</nuxt-link>
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#"
                >Privacy policy</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="text-14 md:text-16" to="#">Status</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="space-y-5 text-14 mt-6 lg:mt-0">
          <h3 class="font-medium text-16 md:text-20">Reach Us</h3>
          <div class="flex space-x-2 items-center">
            <img src="/images/footer/mail.svg" alt="mail" />
            <p>hello@digidev.id</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img src="/images/footer/phone.svg" alt="phone" />
            <p>+62 857 6532 4321</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img src="/images/footer/location.svg" alt="location" />
            <p>Jakarta Selatan, DKI Jakarta, 12022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
