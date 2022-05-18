<template>
  <div class="bg-table-bg my-4 lg:w-[55%] p-2">
    <table class="table-fixed w-full">
      <tr>
        <td class="py-1 w-[40%] font-medium lg:w-[25%]">Nama</td>
        <td class="py-1 w-[60%] font-medium lg:w-[75%]">Ucok</td>
      </tr>
      <tr>
        <td class="py-1 w-[40%] font-medium lg:w-[25%]">Email</td>
        <td class="py-1 w-[60%] font-medium lg:w-[75%]">Ucok@gmail.com</td>
      </tr>
      <tr>
        <td class="py-1 w-[40%] font-medium lg:w-[25%]">Whatsapp</td>
        <td class="py-1 w-[60%] font-medium lg:w-[75%]">0821 2123 2322</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "Table",
  setup() {},
  props: {},
});
</script>

<style scoped></style>
