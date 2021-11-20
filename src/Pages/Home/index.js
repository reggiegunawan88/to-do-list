import Header from "Components/Header";
import ToDoList from "Components/ToDoList";

function Home() {
  return (
    <div className="bg-white w-full h-screen flex flex-col">
      <Header />
      <div className="w-full mt-5">
        <ToDoList />
      </div>
    </div>
  );
}

export default Home;
