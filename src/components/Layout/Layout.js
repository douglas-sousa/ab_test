import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Header from "./Header/Header";
import "./layout.css"
import Footer from "./Footer/Footer"

const Layout = ({ children, removeHeader, props, target }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKQ3ND2"
        height="0" width="0" style={{display:'none', visibility:'hidden'}} />
      </noscript>
      {removeHeader ? <div/> : <Header {...props}/>}
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <main>{children}</main>
        <Footer {...props}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
