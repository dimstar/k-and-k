import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactSVG from 'react-svg';

import './hero.scss';

// import flowers from '../images/flowers.png';
// import bg_brown from '../images/bg-brown.jpg';
import kkLove from '../../images/kyle-and-kate-love.svg';
// import { isAbsolute } from 'path';

const FlowersImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "flowers.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

const Hero = () => (
    <>
      <div className="flower-wrap"><FlowersImg /></div>
      <div className="kk-wrap">
        <ReactSVG src={kkLove} />
      </div>
    </>
  )

export default Hero;
  