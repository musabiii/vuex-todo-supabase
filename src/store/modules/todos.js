const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async addTodo({ commit }, title) {
    commit("newTodo", title);
  },
};

const mutations = {
  newTodo: (state, todo) => state.todos.unshift(todo),
};


export default {
    state,
    getters,
    actions,
    mutations
}