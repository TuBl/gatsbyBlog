import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../Components/Layout"
import Head from "../Components/Head"
import blogStyles from "../assets/scss/blog.module.scss"
const BlogPage = () => {
  const post = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const posts = post.allContentfulBlogPost.edges.map(p => {
    return {
      title: p.node.title,
      date: p.node.publishedDate,
      slug: p.node.slug,
    }
  })
  return (
    <Layout>
      <Head title="Blog" />
      <div className="layout">
        <h1>Blog</h1>
        <ol>
          {posts.map(p => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${p.slug}`}>
                  <h2>{p.title}</h2>
                </Link>
                <p>{p.date}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
