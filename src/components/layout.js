import * as React from 'react';
import {Link} from 'gatsby';
import {container, nav, navLinks, navLinksItem, navLinkText} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
  return(
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinksItem}><Link to='/' className={navLinkText}>Home</Link></li>
          <li className={navLinksItem}><Link to='/about' className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout;