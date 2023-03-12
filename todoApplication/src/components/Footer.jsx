/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { colorChange, statusChange } from "../redux/filters/actions";
const Footer = () => {
  const { todos } = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);
  const todoLength = todos.filter((todo) => !todo.completed).length;
  const dispatch = useDispatch();

  const todoLeftFormate = (todoLength) => {
    switch (todoLength) {
      case 0:
        return `No task left`;
      case 1:
        return `1 Task left`;

      default:
        return `${todoLength} tasks left`;
    }
  };
  const colorSelect = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
    } else {
      dispatch(colorChange(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{todoLeftFormate(todoLength)} </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && `font-bold`}`}
          onClick={() => dispatch(statusChange("All"))}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            status === "Incompleted" && `font-bold`
          }`}
          onClick={() => dispatch(statusChange("Incompleted"))}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Completed" && `font-bold`}`}
          onClick={() => dispatch(statusChange("Completed"))}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && `bg-green-500`
          }`}
          onClick={() => colorSelect("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && `bg-red-500`
          }`}
          onClick={() => colorSelect("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && `bg-yellow-500`
          }`}
          onClick={() => colorSelect("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
