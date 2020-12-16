<template>
  <section class="block">
    <transition name="question-anim" tag="div">
      <div
        v-if="index < questions.length"
        class="relative w-full min-h-full h-90 px-12 py-8 md:px-32 md:py-12  rounded-xl mt-6 bg-gray-100 shadow-xl border-4 border-black border-opacity-10"
      >
        <transition name="question-anim" tag="div">
          <h2 v-if="current" class="text-3xl mb-2">
            {{ questions[index].question }}
          </h2>
        </transition>

        <transition name="question-anim" tag="div">
          <small v-if="current" class="block text-left italic ">
            Topic: {{ questions[index].topic }}
          </small>
        </transition>

        <vue-feedback-reaction
          :is-disabled="isDisabled"
          emojiWidth="2.5rem"
          emojiHeight="2.5rem"
          v-model="feedback"
          class="mt-7 py-2 bg-gray-200 rounded-xl shadow-lg w-full lg:w-3/4 xl:w-2/4"
        />

        <small
          v-show="error !== ''"
          class="block italic underline text-red-600"
        >
          {{ error }}
        </small>

        <div class="flex w-full">
          <button
            @click="newAnswer"
            class=" flex-initial mt-7 mr-4 w-2/6 md:w-1/5 py-2 rounded shadow bg-indigo-700 hover:bg-indigo-800 text-gray-50  font-sans font-light capitalize md:uppercase"
          >
            Submit
          </button>

          <transition name="return-anim" tag="div">
            <button
              v-if="index > 0"
              @click="previous"
              class=" flex-initial mt-7 w-2/6 md:w-1/5 py-2 rounded shadow border hover:bg-gray-300 text-black  font-sans font-light capitalize md:uppercase"
            >
              Return
            </button>
          </transition>
        </div>

        <strong class="absolute bottom-4 right-5">
          {{ index + 1 }}/{{ questions.length }}
        </strong>
      </div>
    </transition>

    <transition name="congratulation-anim" tag="div">
      <CardCongratulation
        v-if="congratulation"
        :feedbacks="feedbacks"
        class="w-full min-h-full h-90 px-12 py-8 md:px-32 md:py-12  rounded-xl mt-6 bg-gray-100 shadow-xl border-4 border-black border-opacity-10"
      />
    </transition>
  </section>
</template>

<script>
import { VueFeedbackReaction } from "vue-feedback-reaction";
import CardCongratulation from "./CardCongratulation";
import questions from "@/assets/data/questions.js";

export default {
  name: "Survey",
  components: {
    VueFeedbackReaction,
    CardCongratulation,
  },
  data: () => ({
    questions,
    current: true,
    index: 0,
    isDisabled: false,
    feedback: "",
    feedbacks: [],
    error: "",
    congratulation: false,
  }),
  methods: {
    newAnswer() {
      if (this.feedback === "") {
        return (this.error = "Please choose an option");
      } else if (this.index + 1 < this.questions.length) {
        this.current = false;

        this.isDisabled = true;

        this.error = "";

        this.feedbacks.push(this.feedback);

        this.index++;

        setTimeout(() => {
          this.current = true;
        }, 100);
      } else {
        this.feedbacks.push(this.feedback);
        this.index++;

        setTimeout(() => {
          this.congratulation = true;
        }, 1100);
      }
    },

    previous() {
      this.current = false;
      this.index = this.index - 1;
      this.feedbacks.pop();

      setTimeout(() => {
        this.current = true;
      }, 100);
    },
  },
};
</script>

<style>
.question-anim-enter-active,
.question-anim-leave-active {
  transition: all 1s cubic-bezier(0.23, 0.66, 0.08, 0.93);
  transform: translateX(0);
}

.question-anim-enter {
  opacity: 0;
  transform: translateX(40px);
}
.question-anim-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

.return-anim-enter-active,
.return-anim-leave-active {
  transition: all 1s cubic-bezier(0.23, 0.66, 0.08, 0.93);
  transform: scale(1);
}

.return-anim-enter,
.return-anim-leave-to {
  opacity: 0;
  transform: scale(0);
}

.congratulation-anim-enter-active,
.congratulation-anim-leave-active {
  transition: all 1s cubic-bezier(0.23, 0.66, 0.08, 0.93);
  transform: scale(1);
}

.congratulation-anim-enter,
.congratulation-anim-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
