import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"

const GET_BLOGS = graphql`
  query GetBlogs {
    allFile {
      nodes {
        name
      }
    }
  }
`

const Blogs = () => {
  const data = useStaticQuery(GET_BLOGS)

  return (
    <Layout>
      <div>
        {data.allFile.nodes.map(node => (
          <div>{node.name}</div>
        ))}
      </div>
    </Layout>
  )
}

export default Blogs
