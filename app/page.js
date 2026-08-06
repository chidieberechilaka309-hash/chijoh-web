import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Chijoh Feed 🔥</h1>
        <p className="mt-4 text-gray-400 text-center">Welcome to Chijoh from N'Djamena</p>
        
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold">
          + Create Post
        </button>

        <div className="mt-8 border border-gray-800 rounded-lg p-4">
          <p className="font-bold">First Post</p>
          <p className="text-gray-300 mt-2">Chijoh is live! 🚀</p>
        </div>
      </div>
    </div>
  )
}
