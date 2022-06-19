<template>
  <div>
    <item-todo v-for="todo in allTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import itemTodo from "./item-todo.vue";
export default {
  components: { itemTodo },
  computed: mapGetters(["allTodos"]),
  created() {
    console.log(this.allTodos);
  },

};
</script>

<style></style>
