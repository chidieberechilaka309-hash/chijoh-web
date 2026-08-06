import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">About Chijoh</h1>
        <p className="mt-4 text-gray-300">
          Chijoh is a social app built in N'Djamena, TD 🇹🇩 
          <br/>Connect. Post. Share. 🔥
        </p>
      </div>
    </div>
  )
}
