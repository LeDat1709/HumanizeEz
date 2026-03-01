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
      {/* Hero Section - SEO Optimized */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">
          🍬 HumanizeEz - Chuyển Text AI Thành Text Người Viết
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Công cụ humanize AI text miễn phí, bypass AI detector
        </p>
        <p className="text-base text-gray-500">
          Chuyển đổi văn bản ChatGPT, Gemini, Claude thành text tự nhiên không bị phát hiện
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

      <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          ℹ️ Giới hạn sử dụng
        </h3>
        <ul className="text-gray-600 space-y-1">
          <li>• Tối đa 10 requests mỗi phút</li>
          <li>• Tối đa 5000 ký tự mỗi lần</li>
          <li>• Miễn phí cho mọi người sử dụng</li>
        </ul>
      </div>

      {/* SEO Content Section */}
      <section className="mt-12 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          HumanizeEz - Công Cụ Chuyển Text AI Thành Text Người Viết Tốt Nhất 2026
        </h2>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-3">🎯 HumanizeEz là gì?</h3>
            <p>
              HumanizeEz là công cụ miễn phí giúp bạn chuyển đổi text được tạo bởi AI (ChatGPT, Gemini, Claude, v.v.) 
              thành văn bản tự nhiên như được viết bởi con người. Tool sử dụng công nghệ Groq AI với model 
              llama-3.3-70b-versatile siêu nhanh để humanize text của bạn trong vài giây.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">✨ Tính năng nổi bật</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Bypass AI Detector:</strong> Text sau khi humanize sẽ không bị ZeroGPT, GPTZero, Copyleaks phát hiện</li>
              <li><strong>Miễn phí 100%:</strong> Không giới hạn số lần sử dụng, hoàn toàn free</li>
              <li><strong>Xử lý siêu nhanh:</strong> Groq AI xử lý trong 2-3 giây, nhanh hơn ChatGPT nhiều lần</li>
              <li><strong>Giữ nguyên ý nghĩa:</strong> Chỉ thay đổi cách diễn đạt, không làm mất thông tin</li>
              <li><strong>Hỗ trợ tiếng Việt:</strong> Humanize text tiếng Việt và tiếng Anh đều tốt</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">🚀 Cách sử dụng</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Copy text AI từ ChatGPT, Gemini hoặc bất kỳ AI tool nào</li>
              <li>Paste vào ô bên trái</li>
              <li>Click nút "Humanize Text"</li>
              <li>Nhận text đã được humanize ở ô bên phải</li>
              <li>Copy và sử dụng - không lo bị AI detector phát hiện!</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">💡 Khi nào cần humanize AI text?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Viết bài blog, article cần qua AI detector của trường/công ty</li>
              <li>Tạo content marketing tự nhiên hơn</li>
              <li>Viết email, report không muốn bị phát hiện dùng AI</li>
              <li>Làm bài tập, assignment cần bypass Turnitin</li>
              <li>Tạo nội dung social media chân thực hơn</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">🔥 Tại sao chọn HumanizeEz?</h3>
            <p>
              Khác với các tool humanize AI khác như QuillBot, Undetectable.ai (tốn phí), HumanizeEz hoàn toàn 
              miễn phí và sử dụng công nghệ Groq AI mới nhất. Groq nổi tiếng với tốc độ xử lý nhanh nhất thế giới, 
              giúp bạn humanize text trong tích tắc. Tool được tối ưu đặc biệt để bypass các AI detector phổ biến 
              như ZeroGPT, GPTZero, Originality.ai, Copyleaks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">🎓 Use Cases phổ biến</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Sinh viên:</strong> Humanize bài luận, essay, research paper</li>
              <li><strong>Content Creator:</strong> Tạo blog post, article tự nhiên hơn</li>
              <li><strong>Marketer:</strong> Viết content marketing, email campaign</li>
              <li><strong>Freelancer:</strong> Tăng tốc viết content cho client</li>
              <li><strong>Blogger:</strong> Tạo nội dung SEO-friendly không bị Google phạt</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">🔒 Bảo mật & Riêng tư</h3>
            <p>
              HumanizeEz không lưu trữ bất kỳ text nào của bạn. Mọi xử lý đều real-time và text của bạn 
              sẽ bị xóa ngay sau khi humanize xong. Chúng tôi tôn trọng quyền riêng tư của người dùng.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-8 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">❓ Câu hỏi thường gặp (FAQ)</h2>
        
        <div className="space-y-4">
          <details className="border-b pb-4">
            <summary className="font-semibold cursor-pointer text-lg">
              HumanizeEz có miễn phí không?
            </summary>
            <p className="mt-2 text-gray-600">
              Có, HumanizeEz hoàn toàn miễn phí. Bạn có thể sử dụng không giới hạn với rate limit 10 requests/phút.
            </p>
          </details>

          <details className="border-b pb-4">
            <summary className="font-semibold cursor-pointer text-lg">
              Tool có bypass được ZeroGPT, GPTZero không?
            </summary>
            <p className="mt-2 text-gray-600">
              Có, HumanizeEz được tối ưu đặc biệt để bypass các AI detector phổ biến như ZeroGPT, GPTZero, 
              Originality.ai, Copyleaks. Tuy nhiên, không có tool nào đảm bảo 100%, nên bạn nên check lại sau khi humanize.
            </p>
          </details>

          <details className="border-b pb-4">
            <summary className="font-semibold cursor-pointer text-lg">
              Text có bị thay đổi ý nghĩa không?
            </summary>
            <p className="mt-2 text-gray-600">
              Không, HumanizeEz chỉ thay đổi cách diễn đạt, cấu trúc câu để text tự nhiên hơn. 
              Ý nghĩa và thông tin chính được giữ nguyên 100%.
            </p>
          </details>

          <details className="border-b pb-4">
            <summary className="font-semibold cursor-pointer text-lg">
              Có hỗ trợ tiếng Việt không?
            </summary>
            <p className="mt-2 text-gray-600">
              Có, HumanizeEz hỗ trợ tốt cả tiếng Việt và tiếng Anh. Model llama-3.3-70b-versatile 
              được train với nhiều ngôn ngữ.
            </p>
          </details>

          <details className="border-b pb-4">
            <summary className="font-semibold cursor-pointer text-lg">
              Giới hạn độ dài text là bao nhiêu?
            </summary>
            <p className="mt-2 text-gray-600">
              Hiện tại giới hạn là 5000 ký tự mỗi lần. Nếu text dài hơn, bạn có thể chia nhỏ ra humanize nhiều lần.
            </p>
          </details>

          <details className="border-b pb-4">
            <summary className="font-semibold cursor-pointer text-lg">
              So sánh với QuillBot, Undetectable.ai thì sao?
            </summary>
            <p className="mt-2 text-gray-600">
              HumanizeEz miễn phí 100% trong khi QuillBot và Undetectable.ai đều tốn phí. 
              Về chất lượng, HumanizeEz sử dụng Groq AI mới nhất nên kết quả rất tốt và xử lý nhanh hơn.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-600">
        <p className="mb-2">Powered by Groq API 🚀 | Model: llama-3.3-70b-versatile</p>
        <p className="text-sm">
          © 2026 HumanizeEz - Free AI Text Humanizer | Bypass AI Detector | 
          Humanize ChatGPT, Gemini, Claude
        </p>
      </footer>
    </main>
  )
}
