import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import IndexImg from 'gatsby-image';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/hero/hero';

import bg_brown from '../images/bg-brown.jpg';
import './index.scss';

class IndexPage extends React.Component {

  componentDidMount(){
  }

  BrittScrippsImg = () => {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "bsm-ceremony.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <IndexImg fluid={data.placeholderImage.childImageSharp.fluid} />}
      />
    )
  }

  render(){
    return (<Layout>
      <div className="container-fluid" style={{
          background: `url( ${bg_brown} )`,
          position: 'relative',
          height: '100vh',
          overflow: 'hidden'
        }}>
        <div className="row w-100 p0 m0" style={{margin: 0}}>
          <div className="col-12">
            <Hero />
          </div>
        </div>
      </div>
      <div className="fluid-container">
        <div className="row">
          <div className="col-12">
            <div className="header-img">
              <this.BrittScrippsImg />
            </div>
            <div className="content-wrap">
              <h1>THIS FEBRUARY SECOND, TWO THOUSAND NINETEEN</h1>
              <p>at four o’clock in the afternoon</p>
  
              <h2>BRITT SCRIPPS MANOR
              406 Maple Street 
              San Diego, California 92103</h2>
              <p>RECEPTION TO FOLLOW</p>
  
              <p>Britt Scripps Manor is located at 406 maple street, San Diego, CA, 92103. It is three blocks from the west side of Balboa Park and complimentary parking is located directly across the street in the Ace Parking garage. The ceremony will begin at 4 pm with reception to follow at same location.</p>
  
              <p>We would love for our guests to have fun with it and wear formal yet comfortable attire. Don’t forget to bring a sweater as February can get a bit chilly. 
              Please check out our website at kyleandkate.love to RSVP, links to our registry, and hotel group rate information. We are so excited to celebrate with you all on February 2nd!</p>
  
              <p>Please RSVP by January 1st so we can have an accurate count</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>)
  }
}

export default IndexPage
