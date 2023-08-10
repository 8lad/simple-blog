import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
  return (
    <Layout title='My Blog Post'>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              <a href={node.absolutePath}>
                {node.name}
              </a>
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name,
      absolutePath
    }
  }
}
`;

export const Head = () => <Seo title='My blog post' />

export default BlogPage;