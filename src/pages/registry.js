import React from 'react';
import { Link } from 'gatsby';
import Rsvp from '../components/rsvp/rsvp';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <Rsvp />
    <h1>Welcome to the Registry</h1>
    {/* <p>Welcome to page 2</p> */}
  </Layout>
)

export default SecondPage;