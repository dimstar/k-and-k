import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import './footer.scss';

const KksImg = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "kate-and-kyle.jpg" }) {
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

const Footer = () => (
    <>
      <div className="footer">
        <div className="kk-together">
            <div className="img-aligner">
                <KksImg />
            </div>
        </div>
      </div>
    </>
  )

export default Footer;