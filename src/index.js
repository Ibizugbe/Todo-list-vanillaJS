// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import "./style.css";
const todoBtn = document.querySelector(".todo-btn");
const myList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");

import { addTodo } from "./module/add.js";
todoBtn.addEventListener("click", addTodo);
