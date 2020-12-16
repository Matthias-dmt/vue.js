<template>
  <div class="flex items-center">
    <img :src="logo" alt="Qovery" class="w-8" />
    <h1 class="ml-2 text-2xl text-white font-semibold opacity-60">Qovery</h1>
  </div>
</template>

<script>
import logo from "@/assets/svg/logo.svg";

export default {
  name: "Logo",
  data: () => ({
    logo,
  }),
};
</script>
