import React from "react";
import ToDoItem from "./ToDoItem";

const ToDos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <ToDoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};

export default ToDos;
