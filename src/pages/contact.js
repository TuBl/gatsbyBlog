import React from "react"
import Layout from "../Components/Layout"
const contact = () => (
  <Layout>
    <div className="layout">
      <h1>Contact</h1>
      <h3>
        <span style={{ fontWeight: "bold" }}>Name: </span> Tariq
      </h3>
      <h3>
        <span style={{ fontWeight: "bold" }}>Email: </span> tariqys@gmail.com
      </h3>
      <h3>
        <span style={{ fontWeight: "bold" }}>Phone number: </span> 0504873367
      </h3>
      <h3>
        <span style={{ fontWeight: "bold" }}>Github: </span>{" "}
        <a
          href="https://github.com/TuBl"
          target="_blank"
          rel="noopener noreferrer"
        >
          TuBl
        </a>
      </h3>
    </div>
  </Layout>
)

export default contact
