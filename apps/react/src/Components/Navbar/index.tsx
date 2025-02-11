function Navbar() {
  return (
    <header className="min-w-[1000px] flex justify-between items-center px-4 bg-black text-white h-[60px]">
      <h1 className="text-2xl font-bold">Logo</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
