<template>
  <section class="relative">
    <Title title="Usage" class="relative z-10" />
    <p class="relative z-10 text-sm mb-24 text-gray-700">
      Initialize EKS (AWS Kubernetes) and ECR (AWS container registry) on AWS
    </p>
    {{ $el }}
    <code-usage class="mb-8"></code-usage>
    <div class="relative z-10 flex justify-around md:w-2/4 mx-auto">
      <Github :class="style.button" />
      <Discord :class="style.button" />
    </div>
    <img :src="bg" alt="bg" class="absolute top-0" />
    <usages></usages>
  </section>
</template>

<script>
import bg from "@/assets/svg/bg-usage.svg";

import Title from "./Title";
import CodeUsage from "./CodeUsage";
import Usages from "./Usages";
import Github from "./button/Github";
import Discord from "./button/Discord";


export default {
  name: "UsageSection",
  components: {
    Title,
    CodeUsage,
    Usages,
    Discord,
    Github,
  },
  data: () => ({
    style: {
      button:
        "flex items-center text-xs w-2/5 text-white py-2 px-4 mb-4  rounded-sm  md:px-2 ",
    },
    bg,
  }),
};
</script>
