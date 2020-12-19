<template>
  <button class="bg-gray-700 hover:bg-gray-800">
    <img :src="github" alt="github" />
    <p class="ml-2">See on Github</p>
  </button>
</template>

<script>
import github from "@/assets/svg/github.svg";

export default {
  name: "Github",
  data: () => ({
    github,
  }),
};
</script>
