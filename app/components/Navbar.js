export default function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-800 flex justify-between">
      <h1 className="text-xl font-bold">Chijoh</h1>
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  )
}
