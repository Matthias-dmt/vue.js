<template>
  <section class="text-center">
    <img
      :src="logoSponsor"
      alt="logo sponsor london fashon week"
      class="transform -rotate-90 w-full"
    />
    <p class="transform -rotate-180 mt-4 text-sm">Official sponsor</p>
  </section>
</template>

<script>
import logoSponsor from "@/assets/images/sponsor-logo.png";

export default {
  name: "Sponsor",
  data: () => ({
    logoSponsor,
  }),
};
</script>
