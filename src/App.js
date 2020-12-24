import React from "react";
 import "./App.css";
 import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);
import Todolist from "./TODO/TodoList";

export default function App() {
  return (
    <div>
      <h1 class='App'>Welcome in TODO App</h1>
      <Todolist />
    </div>
  );
}
