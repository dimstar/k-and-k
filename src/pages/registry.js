import React from 'react';
// import { Link } from 'gatsby';
import Rsvp from '../components/rsvp/rsvp';

import Layout from '../components/layout';
import RegHeader from '../components/RegHeader/RegHeader';
import RegLoader from '../components/RegLoader';

class SecondPage extends React.Component {

  render() {
    return(
      <Layout>
        <RegHeader />
        <Rsvp />
        <div className="content-wrap">
          <h1 style={{paddingTop: '32px'}}><a href="https://www.zola.com/registry/kkloveday">Our Wedding Registry</a></h1>
          <RegLoader />
      </div>
    </Layout>
  )
  }
}

export default SecondPage;