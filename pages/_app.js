import '../styles/index.scss'
import NextNprogress from "nextjs-progressbar";
import React from "react";
import { Provider } from 'react-redux'
import {initializeStore, useStore} from '../store/store'

import "../styles/slick.css";


function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    return (
      <>
          <Provider store={store}>
              <NextNprogress
                  color="#29D"
                  startPosition={0.3}
                  stopDelayMs={200}
                  height="3"
                  options={{ easing: 'ease', speed: 500 }}
              />
              <Component {...pageProps} />
          </Provider>
      </>
    )
}

export function getServerSideProps() {
    const reduxStore = initializeStore()
    return { props: { initialReduxState: reduxStore.getState() } }
}

export default MyApp
