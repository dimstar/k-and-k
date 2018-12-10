import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactSVG from 'react-svg';

import kkLove from '../../images/kyle-and-kate-love.svg';
import './hero.scss';

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
        <h3 className="sub-head">invite you to join them in celebration of their wedding day</h3>
      </div>
    </>
  )

export default Hero;
  