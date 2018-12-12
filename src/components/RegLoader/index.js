import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import spinner from '../../images/spinner.gif';
import { Z_BLOCK } from 'zlib';

const RegSpinner = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "" }) {
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

class RegLoader extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (<>
            <a className="zola-registry-embed" href="https://www.zola.com/registry/kkloveday" data-registry-key="kkloveday">
                <img  src={spinner} style={{
                    width: '280px',
                    display: 'block',
                    margin: '0 auto',
                }} />
            </a>
        </>);
    }
}

export default RegLoader;