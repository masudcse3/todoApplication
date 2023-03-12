/** @format */

import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const AllTodos = () => {
  const { todos } = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          switch (status) {
            case "Incompleted":
              return !todo.completed;
            case "Completed":
              return todo.completed;

            default:
              return true;
          }
        })
        .filter((todo) => {
          if (colors.length > 0) {
            return colors.includes(todo?.color);
          }
          return true;
        })
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default AllTodos;
