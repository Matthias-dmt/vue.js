<template>
  <article class="relative text-center">
    <h1 class="text-4xl capitalize md:uppercase">
      thank you for giving us your time !
    </h1>
    <h3 class="text-2xl mb-4 capitalize italic">{{ averageGrade }}</h3>
    <p
      class="leading-6 w-4/5 mx-auto text-base md:text-lg text-gray-800 opacity-90 mb-2"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus
      veniam nesciunt hic? Atque enim iste sunt, facilis dolore possimus odio,
      omnis commodi eum, eveniet aliquam magnam necessitatibus libero iusto.
      Lorem ipsum dolor sit amet
    </p>

    <router-link
      to="/"
      class=" block mt-7 w-3/6 lg:w-1/5 mx-auto py-2 rounded shadow bg-indigo-700 hover:bg-indigo-800 text-gray-50 capitalize md:uppercase"
      >Back to home</router-link
    >
  </article>
</template>
<script>
export default {
  name: "CardCongratulation",
  props: {
    feedbacks: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      average: 0,
    };
  },
  mounted() {
    for (let f in this.feedbacks) {
      console.log(f);
      this.average = this.average + parseFloat(f);
    }

    this.average = this.average / this.feedbacks.length;

    return this.average;
  },
  computed: {
    averageGrade() {
      if (this.average < 3) {
        return "We are sorry to hear that overall our service does not satisfy you";
      } else if (this.average < 4) {
        return "We act every day to satisfy you more";
      } else {
        return "We are happy to satisfy you and will try to continue this momentum";
      }
    },
  },
};
</script>
