<template>
  <div class="text-white md:flex">
    <div class="mb-8 md:p-12 md:pl-0 lg:p-24 lg:pl-0 xl:px-60 xl:pl-0">
      <div>
        <h1 class="text-4xl font-semibold my-4">Qovery Engine</h1>
      </div>
      <h2 class="text-xl mb-4">
        Abstraction layer to deploy microservices applications on any Cloud
        provider.
      </h2>
      <p class="opacity-40 text-purple-300 ml-1 mb-4 text-sm">
        Qovery Engine is an open-source abstraction layer product that turns
        easy apps deployement on AWS, GCP, Azure and others Cloud providers.
      </p>
      <div class="flex flex-wrap">
        <Github :class="style.button" />
        <Discord :class="style.button" />
      </div>
    </div>
    <img class="md:w-2/4" :src="header" alt="qovery engine" />
  </div>
</template>

<script>
import header from "@/assets/svg/header.svg";

import Discord from "./button/Discord";
import Github from "./button/Github";

export default {
  name: "Intro",
  components: {
    Discord,
    Github,
  },
  data: () => ({
    header,
    style: {
      button:
        "flex items-center py-2 px-4 mb-4 mr-4 rounded-sm  md:px-2 md:text-xs",
    },
  }),
};
</script>
