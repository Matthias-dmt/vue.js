<template>
  <section>
    <Title title="How does it work?" />
    <p class="text-sm mb-4 text-gray-700">
      Qovery Engine is an open-source abstraction layer product that turns easy
      apps deployement on AWS, GCP, Azure and others Cloud providers. The Qovery
      Engine is coded in Rust and takes advantage of Terraform, Helm, Kubectl,
      Docker to manage resources
    </p>

    <img :src="work" alt="how does it work" class="mx-auto mt-8" />
  </section>
</template>

<script>
import work from "@/assets/svg/how-work.svg";

import { Title } from "./index";

export default {
  name: "Work",
  components: {
    Title,
  },
  data: () => ({
    work,
  }),
};
</script>
