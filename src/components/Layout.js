import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <div>
      <SEO />
      <header>
        <h2>Blogs App</h2>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
