function Header() {
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-3 md:py-5">
        <a href="/" className="cursor-pointer">
          <h2 className="text-3xl font-bold ">
            ToDo<span className="text-green-500">LIST</span>
          </h2>
        </a>
      </div>
    </header>
  );
}

export default Header;
