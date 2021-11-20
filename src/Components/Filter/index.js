function Filter() {
  return (
    <div className="select">
      <select name="todos" className="outline-none w-36 p-2 rounded">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default Filter;
