<script>
import BaseButton from '../base/BaseButton.vue';

export default {
  name: 'FruitCard',
  components: { BaseButton },

  props: {
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      fruitImgList: [
        {
          img: new URL('../../assets/images/fruits/1.jpg', import.meta.url)
            .href,
        },
        {
          img: new URL('../../assets/images/fruits/2.jpg', import.meta.url)
            .href,
        },
        {
          img: new URL('../../assets/images/fruits/3.jpg', import.meta.url)
            .href,
        },
        {
          img: new URL('../../assets/images/fruits/4.jpg', import.meta.url)
            .href,
        },
        {
          img: new URL('../../assets/images/fruits/5.jpg', import.meta.url)
            .href,
        },
        {
          img: new URL('../../assets/images/fruits/6.jpg', import.meta.url)
            .href,
        },
        {
          img: new URL('../../assets/images/fruits/7.jpg', import.meta.url)
            .href,
        },
        {
          img: new URL('../../assets/images/fruits/8.jpg', import.meta.url)
            .href,
        },
      ],

      fruitImg: null,
    };
  },

  mounted() {
    this.setRandomImage(0);
  },

  methods: {
    setRandomImage() {
      var randomIndex = Math.floor(Math.random() * this.fruitImgList.length);

      this.fruitImg = this.fruitImgList[randomIndex].img;
    },
  },
};
</script>

<template>
  <div class="fruits-card border border-slate-200 rounded overflow-hidden">
    <!-- Fruit image -->
    <img class="w-full h-48 object-cover" :src="fruitImg" alt="" />

    <div class="p-4">
      <div class="flex justify-between pb-3">
        <p class="font-semibold">{{ name }}</p>
        <p>₱{{ price }}</p>
      </div>

      <BaseButton variant="primary" color="text-white">Add to Cart</BaseButton>
    </div>
  </div>
</template>
