import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HumanizeEz - Chuyển Text AI Thành Text Người Viết Miễn Phí 2026',
  description: 'Công cụ humanize AI text miễn phí, chuyển đổi văn bản ChatGPT, Gemini thành text tự nhiên như người viết. Bypass AI detector, không bị phát hiện. Sử dụng Groq AI siêu nhanh.',
  keywords: [
    'humanize ai text',
    'chuyển text ai thành người viết',
    'bypass ai detector',
    'ai text converter',
    'humanize chatgpt',
    'undetectable ai',
    'ai to human text',
    'groq ai',
    'free ai humanizer',
    'humanize ai free',
    'chatgpt humanizer',
    'ai content humanizer',
    'text humanizer online',
    'humanize ai writing',
    'bypass zerogpt',
    'bypass gptzero',
  ],
  authors: [{ name: 'HumanizeEz Team' }],
  creator: 'HumanizeEz',
  publisher: 'HumanizeEz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://humanizeez.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HumanizeEz - Chuyển Text AI Thành Text Người Viết Miễn Phí',
    description: 'Công cụ humanize AI text miễn phí, bypass AI detector. Chuyển văn bản ChatGPT, Gemini thành text tự nhiên như người viết.',
    url: 'https://humanizeez.vercel.app',
    siteName: 'HumanizeEz',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HumanizeEz - AI Text Humanizer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HumanizeEz - Chuyển Text AI Thành Text Người Viết',
    description: 'Công cụ humanize AI text miễn phí, bypass AI detector',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'HumanizeEz',
    description: 'Công cụ chuyển đổi text AI thành text tự nhiên như người viết',
    url: 'https://humanizeez.vercel.app',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Chuyển text AI thành text người viết',
      'Bypass AI detector',
      'Miễn phí không giới hạn',
      'Xử lý siêu nhanh với Groq AI',
    ],
  }

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://humanizeez.vercel.app" />
      </head>
      <body>{children}</body>
    </html>
  )
}
