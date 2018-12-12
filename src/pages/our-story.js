import React from 'react';
import { Link } from 'gatsby';
import Rsvp from '../components/rsvp/rsvp';

import Layout from '../components/layout';
import Footer from '../components/footer/footer';

const SecondPage = () => (
  <Layout >
    <Footer />
    <Rsvp />
    <div className="content-wrap">
    <h1 style={{paddingTop: '32px'}}>Our Story</h1>
    <p>Kyle and I first met here in San Diego circa 2008, seeing that we were in the same social circle. Attending the same shows & house parties we knew of each other, but did not start dating until 2011. At that point, Kyle had moved into a different neighborhood and had begun spending time with my brother Shane. I just happened to be at the house one day when Kyle was visiting. We started talking (and laughing) and from that day forward never stopped. Since then we have been inseparable, not spending a single night apart. We have adopted two cats we are obsessed with, traveled through the US & The World, and began exploring new hobbies, starting new jobs and expanded our education. I have read 1000`s of books and we have both drank entirely too much coffee. We have supported each other through intense joy and heartbreaking sorrow. We are so excited to get married, and to share our wedding day with friends & family.</p>
    </div>
  </Layout>
)

export default SecondPage;