<template>
  <div id="service" class="px-2 md:px-0 md:container py-20">
    <h1
      class="px-3 md:px-0 text-center text-32 md:text-36 xl:text-44 text-primary font-bold"
    >
      <span class="text-primary-dark">List</span> transaction
    </h1>
    <div
      class="flex justify-center space-x-16 items-center mt-8 pb-4 overflow-hidden"
    >
      <div
        v-for="(category, id) in categories"
        :key="id"
        class="tab cursor-pointer text-soft-purple"
        :class="{ 'active-tab': id === activeTab }"
        @click="getTransactionByCategories(id)"
      >
        {{ category.name }}
      </div>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8 items-center mt-8 lg:mt-14 relative z-0"
    >
      <TransactionCard
        v-for="(transaction, id) in filteredCategories"
        :key="id"
        :data-transaction="transaction"
      />
    </div>
    <div class="px-3 mt-12 lg:mt-16 w-full flex justify-center">
      <Button
        add-class="text-14 md:text-16 w-full md:w-auto"
        label="See more"
        type="btn-secondary"
      />
    </div>
  </div>
</template>

<script>
import Button from "../../atoms/Button.vue";
import TransactionCard from "../../mollecules/TransactionCard.vue";
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    Button,
    TransactionCard,
  },
  setup() {
    const activeTab = ref(0);
    const categories = ref([
      {
        id: 0,
        name: "All",
      },
      {
        id: 1,
        name: "Open",
      },
      {
        id: 2,
        name: "Locked",
      },
      {
        id: 3,
        name: "Paid",
      },
      {
        id: 4,
        name: "Complete",
      },
      {
        id: 5,
        name: "Closed",
      },
    ]);
    const filteredCategories = ref([]);

    const getTransactionByCategories = (id) => {
      activeTab.value = id;
      if (id === 0) {
        filteredCategories.value = transactionList.value;
      } else {
        filteredCategories.value = transactionList.value.filter((el) => {
          return el.status === id;
        });
      }
    };

    onMounted(() => {
      getTransactionByCategories(0);
    });

    const transactionList = ref([
      {
        id: 1,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 1,
      },
      {
        id: 2,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 3,
      },
      {
        id: 3,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 4,
      },
      {
        id: 4,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 2,
      },
      {
        id: 5,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 3,
      },
      {
        id: 6,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 5,
      },
      {
        id: 7,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 1,
      },
      {
        id: 8,
        img: "",
        name: "Paket Akun PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 15000,
        status: 3,
      },
    ]);

    return {
      activeTab,
      categories,
      filteredCategories,
      getTransactionByCategories,
      transactionList,
    };
  },
});
</script>

<style>
.tab {
  position: relative;
}
.tab:after {
  position: absolute;
  content: "";
  background-color: transparent;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 50%;
  height: 5px;
  bottom: -14px;
}
.tab:hover:after {
  position: absolute;
  content: "";
  background-color: #0194f3;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  height: 5px;
  bottom: -14px;

  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.active-tab {
  position: relative;
  color: #2d2d2d;
}

.active-tab:after {
  position: absolute;
  content: "";
  background-color: #0194f3;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  height: 5px;
  bottom: -14px;
}

.shadow-card {
  box-shadow: 1px 1px 15px 5px #a2b6d426;
}
</style>
