<template>
  <div>
    <div class="input-group mb-3">
      <input
        v-model="todo"
        type="text"
        class="form-control"
        placeholder="type todo"
        aria-label="type todo"
        aria-describedby="basic-addon2"
        @change="handleChange"
      />
      <button type="button" class="btn btn-success" @click="handleClick">
        add
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    handleClick(e) {
      e.preventDefault();
      this.addTodo(this.todo);
      this.todo = "";
    },
    handleChange(e) {
      e.preventDefault();
      this.addTodo(this.todo);
      this.todo = "";
    },
  },
};
</script>

<style></style>
