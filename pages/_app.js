// This file is used for adding global css, which is applied to all pages on your app
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}