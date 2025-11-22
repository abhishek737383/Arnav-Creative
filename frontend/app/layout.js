import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Arnav Creative ',
  description: 'Transform your business with our premium web development, mobile apps, UI/UX design, and digital marketing services. Fast, reliable, and results-driven.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}