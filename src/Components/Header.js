import React, { Fragment } from "react"
import { Link } from "gatsby"

import NavStyle from "../assets/css/header.module.scss"
const Header = () => {
  return (
    <div>
      <nav className={NavStyle.header}>
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> Main page
          </Link>
        </h1>
        <Fragment>
          {" "}
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Fragment>
      </nav>
    </div>
  )
}

export default Header
