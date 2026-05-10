import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PreLaunchBanner from './PreLaunchBanner'
import Header from './Header'
import Footer from './Footer'
import WhatsAppWidget from './WhatsAppWidget'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-40">
        <PreLaunchBanner />
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
