const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async addTodo({ commit }, title) {
    if (!title) return;
    const todo = {
      title,
      id: +new Date(),
      done: false,
    };
    commit("newTodo", todo);
  },
  async updateTodo({ commit }, updTodo) {
    commit("updateTodo", updTodo);
  },
  async removeTodo({ commit }, id) {
    commit("removeTodo", id);
  },
};

const mutations = {
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((el) => el.id !== id)),
  updateTodo: (state, updTodo) => {
    const todo = state.todos.find((el) => el.id === updTodo.id);
    todo.done = updTodo.done;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
