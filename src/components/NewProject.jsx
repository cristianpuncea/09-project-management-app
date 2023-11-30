import React, { useRef } from "react";
import Input from "./Input";

function NewProject({ onAdd }) {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueDate = useRef();

  const handleSave = () => {
    const enteredTitle = inputTitle.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredDueDate = inputDueDate.current.value;

    const enteredProjectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    // validation

    onAdd(enteredProjectData);
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={inputTitle} label="Title" />
        <Input ref={inputDescription} label="Description" textarea />
        <Input type="date" ref={inputDueDate} label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
