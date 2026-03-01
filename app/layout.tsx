import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HumanizeEz - Chuyển AI Text thành Human Text',
  description: 'Công cụ chuyển đổi text AI thành text tự nhiên như người viết',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
