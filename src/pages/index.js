import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Hero from '../components/hero/hero'

import bg_brown from '../images/bg-brown.jpg';


const IndexPage = () => (
  <Layout>
    
    <div className="container-fluid" style={{
        background: `url( ${bg_brown} )`,
        position: 'relative',
        height: '100vh',
        overflow: 'hidden'
      }}>
      <div className="row w-100 p0 m0">
        <div className="col-12">
          <Hero />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
