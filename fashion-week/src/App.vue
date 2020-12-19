<template>
  <div id="app" class="font-body">
    <Navbar />
    <SocialMedia class="absolute bottom-80 -left-56 transform -rotate-90" />
    <Description
      class="absolute top-0 -left-80 z-10 transform -rotate-90 xl:-top-28 xl:-left-56"
    />
    <Sponsor class="absolute w-48 right-10 bottom-10 xl:bottom-20" />

    <!-- Distortion -->
    <div
      class="distortion absolute  right-32 bottom-0 w-2/4 h-4/6 xl:w-1/3 xl:h-5/6 xl:right-80"
    ></div>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import hoverEffect from "hover-effect";
import { gsap } from "gsap";

import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Description from "./components/Description";
import Sponsor from "./components/Sponsor";

import image1 from "./assets/images/01.png";
import image2 from "./assets/images/02.png";
import displacementImage from "./assets/images/diss.png";

export default {
  name: "App",
  components: {
    Navbar,
    SocialMedia,
    Description,
    Sponsor,
  },
  data: () => ({
    image1,
    image2,
    displacementImage,
  }),
  mounted() {
    new hoverEffect({
      parent: document.querySelector(".distortion"),
      intensity: 0.2,
      image1: this.image1,
      image2: this.image2,
      displacementImage: this.displacementImage,
      imagesRatio: 380 / 300,
    });

    gsap.from(".first-anim", 0.5, {
      delay: 0.6,
      y: "100%",
      ease: "expo.easeInOut",
    });

    gsap.from(".second-anim", 0.5, {
      delay: 0.8,
      y: "100%",
      ease: "expo.easeInOut",
    });
  },
};
</script>
