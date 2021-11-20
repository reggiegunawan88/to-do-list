import Input from "Components/Input";
import Filter from "Components/Filter";

function Header() {
  return (
    <header className="w-full bg-green-400 text-center py-5 top-0">
      <div className="flex flex-col justify-center gap-y-5">
        <h1 className="font-sans text-3xl font-bold">To-Do-List Apps</h1>
        <div className="flex flex-col justify-center gap-y-5">
          <Input />
          <Filter />
        </div>
      </div>
    </header>
  );
}

export default Header;
