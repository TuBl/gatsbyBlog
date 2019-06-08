import React, { Fragment } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"
import "../assets/css/style.css"
import NavStyle from "../assets/scss/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={NavStyle.header}>
      <nav
        className={classNames({
          [NavStyle.link]: true,
        })}
      >
        <h1>
          <Link className={NavStyle.title} to="/">
            <i className="fas fa-code" /> {data.site.siteMetadata.title}
          </Link>
        </h1>
        <Fragment>
          {" "}
          <ul className={NavStyle.navList}>
            <li>
              <Link
                className={NavStyle.navItem}
                activeClassName={NavStyle.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={NavStyle.navItem}
                activeClassName={NavStyle.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={NavStyle.navItem}
                activeClassName={NavStyle.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={NavStyle.navItem}
                activeClassName={NavStyle.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </Fragment>
      </nav>
    </div>
  )
}

export default Header
