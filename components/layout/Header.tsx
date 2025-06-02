const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PowerWell</h1>
        <div className="space-x-4">
          <button className="text-sm font-medium">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;