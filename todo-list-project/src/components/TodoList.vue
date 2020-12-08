<template>
  <section>
    <header class="text-center">
      <h1 class="text-8xl my-5 text-red-100">To do</h1>
    </header>
    <div class="shadow-lg">
      <main class="bg-white">
        <!-- input new task display -->
        <input
          v-model="newTask"
          @keyup.enter="addTask"
          type="text"
          class="bg-white   border-t border-b border-gray-200 rounded-none px-9 py-3 w-full"
          placeholder="Add new task"
        />
        <!-- input selected all display -->
        <label
          class="inline-flex items-center border-b px-3 py-2 border-gray-200 w-full"
        >
          <input v-model="allDone" type="checkbox" />
          <span class="ml-3 text-lg">selected all</span>
        </label>

        <!-- list tasks display -->
        <ul>
          <!-- task display -->
          <transition-group name="task-anim" tag="div">
            <li
              v-for="task in filteredTasks"
              :key="task"
              v-bind:class="{
                'line-through': task.completed,
                editing: task === editing,
              }"
              class="px-2 py-2 border-b border-gray-200"
            >
              <div
                @dblclick.prevent="editTask(task)"
                :class="{ hidden: task === editing }"
              >
                <label class="inline-flex items-center w-full relative">
                  <input
                    v-model="task.completed"
                    type="checkbox"
                    class="form-checkbox rounded-full h-6 w-6 flex items-center justify-center"
                  />
                  <span class="ml-3 text-lg">{{ task.name }}</span>

                  <button
                    @click.prevent="deleteTask(task)"
                    class="ml-6 absolute right-4"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </label>
              </div>

              <!-- input edition task display -->
              <input
                v-model="task.name"
                v-focus="task === editing"
                @blur="doneEdit"
                @keyup.esc="cancelEdit"
                @keyup.enter="doneEdit"
                :class="{ block: task === editing, hidden: task !== editing }"
                class="p-1 border-t border-b border-gray-300 w-full"
                type="text"
              />
            </li>
          </transition-group>
        </ul>
      </main>

      <footer v-if="hasTask" class="bg-white flex px-3 py-2">
        <!-- task remaining display -->
        <span class="w-4/12 text-center">
          <strong>{{ remaining }}</strong> remaining tasks
        </span>

        <!-- actions list display -->
        <ul class="flex space-x-3 w-4/12">
          <li
            class="w-4/12 p-1 text-center"
            :class="{ 'border rounded-lg border-gray-400': filter === 'all' }"
          >
            <a href="#" @click.prevent="filter = 'all'">
              All
            </a>
          </li>
          <li
            class="w-4/12 p-1 text-center"
            :class="{
              'border rounded-lg border-gray-400': filter === 'todo',
            }"
          >
            <a href="#" @click.prevent="filter = 'todo'">
              to do
            </a>
          </li>
          <li
            class="w-4/12 p-1 text-center"
            :class="{
              'border rounded-lg border-gray-400': filter === 'completed',
            }"
          >
            <a href="#" @click.prevent="filter = 'completed'">
              completed
            </a>
          </li>
        </ul>

        <!-- button delete all display -->
        <button
          v-show="taskDone"
          @click.prevent="deleteCompleted"
          class="text-center w-4/12"
        >
          Delete all tasks done
        </button>
      </footer>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default {
  name: "TodoList",

  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      tasks: [...this.value],
      newTask: "",
      oldTask: "",
      filter: "all",
      editing: null,
    };
  },

  watch: {
    value(value) {
      this.tasks = value;
    },
  },

  methods: {
    addTask() {
      this.tasks.push({
        name: this.newTask,
        completed: false,
      });
      this.newTask = "";
    },

    deleteTask(ref) {
      this.tasks = this.tasks.filter((task) => task !== ref);
      this.$emit("input", this.tasks);
    },

    deleteCompleted() {
      this.tasks = this.tasks.filter((task) => !task.completed);
      this.$emit("input", this.tasks);
    },

    editTask(task) {
      this.editing = task;
      this.oldTask = task.name;
    },

    doneEdit() {
      this.editing = null;
    },

    cancelEdit() {
      this.editing.name = this.oldTask;
      this.doneEdit();
    },
  },

  computed: {
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.tasks.forEach((task) => {
          task.completed = value;
        });
        return console.log(value);
      },
    },

    hasTask() {
      return this.tasks.length > 0;
    },

    taskDone() {
      return this.tasks.filter((task) => task.completed).length;
    },

    remaining() {
      return this.tasks.filter((task) => !task.completed).length;
    },

    filteredTasks() {
      if (this.filter === "all") return this.tasks;
      else if (this.filter === "todo")
        return this.tasks.filter((task) => !task.completed);
      else this.filter === "completed";
      return this.tasks.filter((task) => task.completed);
    },
  },

  directives: {
    focus(el, value) {
      if (value) {
        Vue.nextTick(() => {
          el.focus();
        });
      }
    },
  },
};
</script>

<style>
.task-anim-enter-active {
  transition: 1.3s cubic-bezier(0.23, 0.66, 0.08, 0.93);
  transform: translateX(0px);
}

.task-anim-leave-active {
  transition: opacity 1.3s cubic-bezier(0.23, 0.66, 0.08, 0.93) height 2s;
}

.task-anim-enter {
  opacity: 0;
  transform: translateX(400px);
}

.task-anim-leave-to {
  height: 0;
  opacity: 0;

  transform: translateY(-10px);
}
</style>
