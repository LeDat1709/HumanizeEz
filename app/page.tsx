'use client'

import { useState } from 'react'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleHumanize = async () => {
    if (!inputText.trim()) {
      setError('Vui lòng nhập text cần chuyển đổi')
      return
    }

    setLoading(true)
    setError('')
    setOutputText('')

    try {
      const response = await fetch('/api/humanize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra')
      }

      setOutputText(data.humanizedText)
    } catch (err: any) {
      setError(err.message || 'Không thể kết nối đến server')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText)
    alert('Đã copy vào clipboard!')
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">
          🍬 HumanizeEz
        </h1>
        <p className="text-xl text-gray-600">
          Chuyển text AI thành text tự nhiên như người viết
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            📝 Text AI
          </h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste text AI của bạn vào đây..."
            className="w-full h-96 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none text-gray-700"
          />
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleHumanize}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              {loading ? '⏳ Đang xử lý...' : '✨ Humanize Text'}
            </button>
            <button
              onClick={() => setInputText('')}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
            >
              🗑️ Xóa
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            ✍️ Text Tự Nhiên
          </h2>
          <textarea
            value={outputText}
            readOnly
            placeholder="Kết quả sẽ hiển thị ở đây..."
            className="w-full h-96 p-4 border-2 border-gray-200 rounded-xl bg-gray-50 resize-none text-gray-700"
          />
          <div className="mt-4">
            <button
              onClick={handleCopy}
              disabled={!outputText}
              className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              📋 Copy Text
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-6 bg-red-100 border-2 border-red-400 text-red-700 px-6 py-4 rounded-xl text-center">
          ⚠️ {error}
        </div>
      )}

      <footer className="mt-12 text-center text-gray-600">
        <p>Powered by Groq API 🚀 | Model: llama-3.3-70b-versatile</p>
      </footer>
    </main>
  )
}
