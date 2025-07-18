function Navbar() {
  return (
    
      <div className="flex justify-between items-center p-4 bg-gray-500 text-white">
        <div className="flex items-center gap-4">
          <h1>Portfolio</h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    
  )
}

export default Navbar