function EmptyState() {
  return (
    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col text-center">
        <p className="font-sans text-xl font-bold">You don't have any To-Do.</p>
      </div>
    </div>
  );
}

export default EmptyState;
