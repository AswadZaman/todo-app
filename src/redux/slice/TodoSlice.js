import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("todos")) || [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      const filteredState = state.filter((todo) => todo.id !== action.payload);
      state.splice(0, state.length, ...filteredState);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const toggledState = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      state.splice(0, state.length, ...toggledState);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice;
