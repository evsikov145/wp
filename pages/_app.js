import '../styles/index.scss'
import NextNprogress from "nextjs-progressbar";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NextNprogress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height="3"
            options={{ easing: 'ease', speed: 500 }}
        />
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
