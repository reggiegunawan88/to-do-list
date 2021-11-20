import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Add() {
  return (
    <div className="flex flex-row justify-center gap-x-3">
      <input type="text" className="outline-none p-2 rounded" placeholder="New to-do" />
      <button type="submit">
        <FontAwesomeIcon icon="plus-circle" size="lg" />
      </button>
    </div>
  );
}

export default Add;
