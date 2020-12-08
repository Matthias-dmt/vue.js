<template>
  <div class="home">
    <h1 class=" text-center text-6xl mb-12 text-white capitalize">
      <span class="text-indigo-700"> L</span>ive
      <span class="text-indigo-700">e</span>vent
    </h1>
    <CardIntro />
  </div>
</template>

<script>
// @ is an alias to /src
import { CardIntro } from "@/components/";

export default {
  name: "Home",
  components: {
    CardIntro,
  },
};
</script>
