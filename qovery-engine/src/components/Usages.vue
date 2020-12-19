<template>
  <section id="target" class=" my-16 overflow-y-auto">
    <!-- <p>{{ offsetTop }}</p> -->
    <transition-group
      name="usage"
      tag="div"
      class="flex flex-wrap justify-between items-baseline"
    >
      <article
        v-scroll:#target="onScroll"
        v-for="usage in usages"
        :key="usage.title"
        class="sm:w-full text-left mb-8 md:w-2/5"
      >
        <img :src="usage.pict" :alt="usage.title" />
        <h1 class="text-xl font-bold text-gray-800 my-6">{{ usage.title }}</h1>
        <p
          v-for="para in usage.paras"
          :key="para"
          class="text-sm mt-6 text-gray-700"
        >
          {{ para }}
        </p>
        <button class="uppercase text-xs mt-2 text-indigo-500">See more</button>
      </article>
    </transition-group>
  </section>
</template>

<script>
import { usages } from "@/assets/data/usages";

export default {
  name: "Usages",
  data: () => ({
    usages,
    offsetTop: 0,
  }),
  computed: {
    scrollPos: () => {
      const el = document.querySelector("body");
      return el.scrollTop;
    },
  },
};
</script>
