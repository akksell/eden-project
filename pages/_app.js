import Head from 'next/head'
import Script from 'next/script'
import '@/styles/main.css'

function Eden({ Component, pageProps }) {
    return (
        <>
            <Script src="https://kit.fontawesome.com/b2b606ab07.js" crossOrigin="anonymous"></Script>
            <Head>
                <title>Eden - TAMUHack</title>
            </Head>

            <div>
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default Eden
