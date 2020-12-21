<template>
  <section id="target" class=" my-16 overflow-y-auto">
    <transition-group
      name="usage"
      tag="div"
      class="flex flex-wrap justify-between items-baseline"
    >
      <article
        v-show="scrollPos > 1700"
        v-for="usage in usages"
        :key="usage.title"
        class="sm:w-full text-left mb-8 md:w-2/5"
      >
        <img :src="usage.pict" :alt="usage.title" />
        <h1 class="text-xl font-bold text-gray-800 my-6">
          {{ usage.title }}
        </h1>
        <p
          v-for="para in usage.paras"
          :key="para"
          class="text-sm mt-6 text-gray-700"
        >
          {{ para }}
        </p>
        <button
          class="uppercase text-xs mt-2 text-indigo-500 hover:text-indigo-700"
        >
          See more
        </button>
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
    scrollPos: 0,
  }),
  mounted() {
    document.addEventListener("scroll", () => {
      this.scrollPos = window.scrollY;
    });
  },
};
</script>
