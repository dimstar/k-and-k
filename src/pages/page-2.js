import React from 'react';
import { Link } from 'gatsby';
import Rsvp from '../components/rsvp/rsvp';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    {/* <Rsvp /> */}
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage;