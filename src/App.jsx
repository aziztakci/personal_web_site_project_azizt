import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  const showToast = () => {
    toast.success("Toastify çalışıyor! 🚀", {
      position: "top-right",
      autoClose: 2000,
    });
    setCount(count + 1);
  }

  return (
    // Tailwind Testi: bg-slate-900, flex, items-center gibi sınıflar v4'te de aynıdır.
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 text-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-4">
          Saint Rolls Kurulum
        </h1>
        
        <p className="text-slate-400 mb-8 text-lg">
          Vite + React + Tailwind v4 altyapısı hazır.
        </p>

        <button 
          onClick={showToast}
          className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-bold text-white shadow-lg active:scale-95"
        >
          Test Et: {count}
        </button>
      </div>

      {/* Toastify konteynerini buraya ekliyoruz */}
      <ToastContainer theme="dark" />
    </div>
  )
}

export default App