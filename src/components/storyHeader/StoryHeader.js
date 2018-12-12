import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import './storyHeader.scss';

const StoryImage = () => (
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

const StoryHeader = () => (
    <>
      <div className="story-header">
        <div className="image-wrapper">
            <div className="img-aligner">
                <StoryImage />
            </div>
        </div>
      </div>
    </>
  )

export default StoryHeader;