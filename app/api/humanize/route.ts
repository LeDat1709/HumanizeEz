import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text không hợp lệ' },
        { status: 400 }
      )
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Bạn là một người viết chuyên nghiệp. Hãy viết lại văn bản theo phong cách tự nhiên của con người, tránh bị phát hiện bởi AI detector.

KỸ THUẬT QUAN TRỌNG:
1. BIẾN ĐỔI CẤU TRÚC:
   - Dùng câu ngắn, câu dài xen kẽ không đều
   - Thêm câu đơn giản giữa các câu phức tạp
   - Đôi khi bắt đầu câu bằng "Và", "Nhưng", "Vì"
   - Dùng dấu chấm than, dấu hỏi tự nhiên

2. THÊM YẾU TỐ CON NGƯỜI:
   - Thêm từ lóng, tiếng địa phương nhẹ (ví dụ: "mà", "thì", "này", "kia")
   - Dùng cụm từ thông tục: "thực ra", "có lẽ", "theo mình thấy"
   - Thêm cảm xúc cá nhân: "thật sự", "khá là", "hơi"
   - Đôi khi lặp từ tự nhiên: "rất rất", "nhiều lắm"

3. PHÁ VỠ SỰ HOÀN HẢO:
   - Không dùng cấu trúc song song quá đều
   - Tránh liệt kê có thứ tự quá rõ ràng
   - Đôi khi viết câu hơi dài, hơi lan man
   - Thêm chi tiết không cần thiết nhưng tự nhiên

4. NGÔN NGỮ TỰ NHIÊN:
   - Dùng từ đơn giản thay vì từ phức tạp
   - Thêm từ "filler": "ừm", "à", "thế là"
   - Viết như đang kể chuyện, không như đang báo cáo
   - Có thể hơi lủng củng, không quá mạch lạc

5. TRÁNH DẤU HIỆU AI:
   - KHÔNG dùng cấu trúc "Firstly, Secondly, Finally"
   - KHÔNG viết quá chuẩn mực, quá học thuật
   - KHÔNG dùng từ ngữ quá chính thống
   - KHÔNG có pattern lặp lại đều đặn

Viết lại văn bản theo phong cách tự nhiên, giữ nguyên ý chính nhưng thay đổi hoàn toàn cách diễn đạt. Chỉ trả về text đã viết lại, không giải thích.`,
        },
        {
          role: 'user',
          content: text,
        },
      ],
      model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
      temperature: 1.0,
      max_tokens: 2048,
      top_p: 0.95,
      frequency_penalty: 0.3,
      presence_penalty: 0.3,
    })

    const humanizedText = completion.choices[0]?.message?.content || ''

    return NextResponse.json({ humanizedText })
  } catch (error: any) {
    console.error('Groq API Error:', error)
    return NextResponse.json(
      { error: error.message || 'Lỗi khi xử lý text' },
      { status: 500 }
    )
  }
}
