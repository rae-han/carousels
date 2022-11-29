import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore'

import '../public/stylesheets/reset.scss'
import '../public/stylesheets/normalize.scss'
import '../public/stylesheets/common.scss'
import '../public/stylesheets/global.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>`
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Menu-mobile</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default wrapper.withRedux(App);
