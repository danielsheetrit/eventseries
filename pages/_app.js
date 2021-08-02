import '../styles/main.scss'
import Header from '../components/Header'
import HeadLayout from '../components/HeadLayout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadLayout />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
