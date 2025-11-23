import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import "../styles/portfolio.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Safwan Ahmad - Full Stack Developer & Creative Technologist",
  description:
    "Portfolio showcasing my expertise in full-stack web development, cloud architecture, and UI/UX optimization.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  keywords: ["full stack developer", "web development", "React", "Node.js", "portfolio"],
  authors: [{ name: "Safwan Ahmad" }],
  openGraph: {
    title: "Safwan Ahmad - Full Stack Developer",
    description: "Explore my portfolio of web development projects and services",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${_geist.className} antialiased`}>{children}</body>
    </html>
  )
}
