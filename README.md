# HumanizeEz

Web app để chuyển text AI thành text tự nhiên như người viết - Dễ như ăn kẹo! 🍬

Sử dụng Groq API (free & siêu nhanh).

## Setup

1. Cài đặt dependencies:
```bash
npm install
```

2. Tạo file `.env.local`:
```
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

Lấy API key miễn phí tại: https://console.groq.com/keys

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000)

## Deploy lên Vercel

1. Push code lên GitHub
2. Import vào Vercel
3. Thêm Environment Variables:
   - `GROQ_API_KEY`: API key của bạn
   - `GROQ_MODEL`: llama-3.3-70b-versatile
4. Deploy!

## Models khác

Groq hỗ trợ nhiều models:
- `llama-3.3-70b-versatile` (recommended - mới nhất, thông minh nhất)
- `llama-3.1-8b-instant` (nhanh nhất)
- `mixtral-8x7b-32768` (context dài)

## Sử dụng

1. Paste text AI vào ô bên trái
2. Click "Humanize Text"
3. Nhận kết quả ở ô bên phải
4. Click "Copy Text" để copy kết quả
