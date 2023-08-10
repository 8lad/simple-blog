import React from 'react';
import { Link } from 'gatsby';
import { container, navLinks, navLinkItem, navLinkText, heading, siteTitle } from './layout.module.scss';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        description,
        title
      }
    }
  }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to='/'>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to='/about'>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to='/blog'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <h2>{data.site.siteMetadata.description}</h2>
        {children}
      </main>
    </div>
  )
}

export default Layout;