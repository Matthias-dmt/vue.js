<template>
  <div class="block">
    <router-link
      to="/"
      class="absolute top-6 right-6 text-white capitalize hover:text-gray-300 "
      >Back home</router-link
    >

    <div class="w-4/5 mx-auto">
      <Survey />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Survey } from "@/components/";

export default {
  name: "SatisfactionForm",
  components: {
    Survey,
  },
};
</script>
