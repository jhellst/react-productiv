import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, updateTodo, deleteTodo }) {
  /**
   * TODO: add state to keep track of isEditing or not, toggle true/false in
   * toggleEdit and directly on component
   * check if truthy in return statement to render TodoForm
   */
  let curElement;
  /** Toggle if this is being edited */
  function toggleEdit(evt) {
    const curTodo = evt.target;
    curTodo.classList.toggle("isEditing");
    curElement = curTodo;
    console.log(curTodo);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    deleteTodo();
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    updateTodo(formData);
  }

  console.log("todo", todo);
  console.log("curElement", curElement);

  // {initialFormData, handleSave}
  return (
    <div className="EditableTodo" >

      {curElement?.classList.contains("isEditing") ?
        <TodoForm initialFormData={todo} handleSave={handleSave} />
        : <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo />
        </div>}

    </div>
  );
}

export default EditableTodo;
