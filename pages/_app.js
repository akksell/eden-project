import Head from 'next/head'

function Eden({ Component, pageProps }) {
    return (
        <>
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
