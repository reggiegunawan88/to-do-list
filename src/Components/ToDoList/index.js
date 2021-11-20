import ToDoItem from "Components/ToDoList/ToDoItem";
import EmptyState from "Components/ToDoList/EmptyState";
import { useState } from "react";

function ToDoList() {
  return (
    <form className="max-w-5xl mx-4 lg:mx-auto">
      {/* <EmptyState /> */}
      <div className="grid grid-flow-row w-full gap-y-3">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </form>
  );
}

export default ToDoList;
