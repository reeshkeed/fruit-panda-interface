<script>
import { getAllFruits } from '../api/fruitApi';
import FruitCard from '../components/fruits/FruitCard.vue';

export default {
  components: { FruitCard },

  data() {
    return {
      fruitsList: [],
    };
  },

  mounted() {
    this.getFruitsList();
  },

  methods: {
    async getFruitsList() {
      const res = await getAllFruits();

      this.fruitsList = res.data.fruits;
    },
  },
};
</script>

<template>
  <main class="py-12 px-72 grid grid-cols-4 grid-flow-row gap-10">
    <FruitCard
      v-for="fruit in fruitsList"
      :key="fruit._id"
      :name="fruit.name"
      :price="fruit.price"
    />
  </main>
</template>
