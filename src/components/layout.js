import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Footer from './footer/footer';
import Rsvp from './rsvp/rsvp';
import KkNavbar from './nav/kkNav';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/scss/bootstrap-reboot.scss';
import './layout.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Welcome to Kate & Kyle Magee\'s Wedding Website!' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <KkNavbar />
        <Rsvp />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
