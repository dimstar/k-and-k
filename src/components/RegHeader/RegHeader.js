import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import './RegHeader.scss';

const RegImage = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "travels.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <Image fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
)

const RegHeader = () => (
    <>
      <div className="reg-header">
        <div className="image-wrapper">
            <div className="img-aligner">
                <RegImage />
            </div>
        </div>
      </div>
    </>
  )

export default RegHeader;