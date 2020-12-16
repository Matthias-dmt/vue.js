<template>
  <button class="bg-indigo-400">
    <img :src="discord" alt="discord" />
    <p class="ml-2">
      Join us on Discord
    </p>
  </button>
</template>

<script>
import discord from "@/assets/svg/discord.svg";

export default {
  name: "Discord",
  data: () => ({
    discord,
  }),
};
</script>
