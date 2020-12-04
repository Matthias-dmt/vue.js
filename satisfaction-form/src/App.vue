<template>
  <div id="app">
    <Home> </Home>
    <SatisfactionForm> </SatisfactionForm>
  </div>
</template>

<script>
import { Home, SatisfactionForm } from "./pages";

export default {
  name: "App",
  components: {
    Home,
    SatisfactionForm,
  },
};
</script>
