import React, { Fragment } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import "../assets/scss/index.scss"
import layoutStyles from "../assets/scss/layout.module.scss"
const Layout = props => (
  <Fragment>
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </Fragment>
)

export default Layout
