import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout"
import Head from "../Components/Head"
const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <div className="layout">
      <h1>Hello</h1>
      <h2>I'm Tariq, a full-stack developer living in London, ON.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </div>
  </Layout>
)
export default IndexPage
