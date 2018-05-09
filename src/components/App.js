// @flow

import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import Router from './Router'
import Nav from './Nav'
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <div id="main-logo" />
      <Header />
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Router />
        </React.Fragment>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
