import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className='bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200'>

    <Component {...pageProps} />
    <Footer />
  </div>
}
