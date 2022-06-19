<template>
  <div>
    <!-- <div class="input-group mb-3"> -->
    <div class="d-flex justify-content-between mt-1">
      <div class="form-check">
        <input
          :id="todo.id"
          class="form-check-input"
          type="checkbox"
          :value="todo.done"
          @change="handleChange"
        />
        <label :class="{ done: todo.done }" :for="todo.id">
          {{ todo.title }}
        </label>
      </div>
      <button type="button" class="btn btn-danger" @click="handleDel">X</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updateTodo", "removeTodo"]),
    handleChange(e) {
      this.updateTodo({ ...this.todo, done: !this.todo.done });
    },
    handleDel() {
      this.removeTodo(this.todo.id);
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
