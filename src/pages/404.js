import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout"
import Head from "../Components/Head"
const notFound = () => {
  return (
    <Layout>
      <Head title="Page not found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home!</Link>
      </p>
    </Layout>
  )
}

export default notFound
