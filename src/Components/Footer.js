import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../assets/css/style.css"
import footerStyles from "../assets/scss/footer.module.scss"
import classNames from "classnames"
const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  // className="footer-center"
  return (
    <div
      className={classNames({
        [footerStyles.footer]: true,
        "footer-center": true,
      })}
    >
      <ul className="copyright actions">
        <li>
          &copy; {new Date().getFullYear()} {author.site.siteMetadata.author}{" "}
          &nbsp; | &nbsp; Made with{" "}
          <span role="img" aria-label="coffee" style={{ fontSize: "1.6em" }}>
            ☕
          </span>
          &nbsp; | &nbsp; Design by{" "}
          <a
            href="https://html5up.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML5 UP (CC BY 3.0 license)
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
