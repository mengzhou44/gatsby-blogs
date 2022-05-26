import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/Layout"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h3> {data.site.siteMetadata.title}</h3>
        <Link to="/blogs">Blogs</Link>
      </div>
    </Layout>
  )
}

export default Home
