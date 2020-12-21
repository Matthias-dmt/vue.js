<template>
  <div id="app" class="bg-gray-100">
    <header class="bg-gray-900 p-4 pt-10 pb-20">
      <div class="w-11/12 mx-auto md:w-4/5">
        <Logo />
        <Intro></Intro>
      </div>
    </header>
    <main class="w-4/5 mx-auto text-center py-16 xl:w-3/5">
      <Work class="section"></Work>
      <UsageSection class="section"></UsageSection>
    </main>
    <footer class="h-20 bg-gray-900"></footer>
  </div>
</template>

<script>
import { Logo, Intro, Work, UsageSection } from "./components";

export default {
  name: "App",
  components: {
    Logo,
    Intro,
    Work,
    UsageSection,
  },
};
</script>
