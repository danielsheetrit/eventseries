import '../styles/main.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import HeadLayout from '../components/HeadLayout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadLayout />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
