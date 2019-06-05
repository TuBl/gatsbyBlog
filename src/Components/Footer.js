import React, { Fragment } from "react"

const Footer = () => {
  return (
    <Fragment>
      <ul className="copyright actions">
        <li>
          &copy; {new Date().getFullYear()} Tariq Elmughrabi &nbsp; | &nbsp;
          Made with{" "}
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
    </Fragment>
  )
}

export default Footer
