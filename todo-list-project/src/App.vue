<template>
  <div id="app" >
    <TodoList v-model="tasksDemo" class="w-3/4 mx-auto" />
    
    <button @click.prevent="addTask">add new task from app</button>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {

  name: "App",

  components: {
    TodoList,
  },

  data() {
    return {
      tasksDemo: [{
        name: "Task demo",
        completed: true
      }]
    }
  },

  methods: {
    addTask() {
      this.tasksDemo.push({
        name:"taskDemo2",
        completed: false
      })
    }
  }
};
</script>

<style src="./assets/styles/index.css">
