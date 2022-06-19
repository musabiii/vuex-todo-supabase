<template>
  <div id="app">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <div class="container-lg p-5">
      <input-todo />
      <list-todo />
    </div>
  </div>
</template>

<script>
import InputTodo from "./components/input-todo.vue";
import ListTodo from "./components/list-todo.vue";
import { getItems } from "./utils";

export default {
  name: "App",
  components: {
    InputTodo,
    ListTodo,
  },
  async mounted() {
    const items = await getItems();
    console.log(items);
  },
};
</script>

<style></style>
