import Footer from '@/components/Footer'
import store from '@/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <div className='bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200'>
      <Component {...pageProps} />
      <Footer />
    </div >
  </Provider>
}
