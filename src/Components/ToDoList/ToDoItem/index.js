import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ToDoItem() {
  const [checkbox, setCheckbox] = useState(false);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <div className="border border-gray-300 rounded">
      <div className="flex flex-row justify-between p-3">
        <p className={checkbox ? "line-through text-red-500" : ""}>Practice React JS</p>
        <div className="flex flex-row items-center gap-x-2">
          <input type="checkbox" checked={checkbox} onChange={toggleCheckbox} />
          <FontAwesomeIcon icon="pencil-alt" className="text-yellow-300" />
          <FontAwesomeIcon icon="trash-alt" className="text-red-500" />
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
