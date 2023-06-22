import React, { useState } from "react";
import { Button, Input, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo, removeTodo, toggleTodo } from "../../redux/slice/TodoSlice";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosSlice);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "50px" }}>
      <Input
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <List
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <Button type="link" onClick={() => handleRemoveTodo(todo.id)}>
              Remove
            </Button>
          </List.Item>
        )}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default TodoApp;
