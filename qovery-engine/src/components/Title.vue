<template>
  <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ title }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
