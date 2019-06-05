import React, { Fragment } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import "../assets/css/index.scss"
const Layout = props => (
  <Fragment>
    <Header />
    {props.children}
    <Footer />
  </Fragment>
)

export default Layout
