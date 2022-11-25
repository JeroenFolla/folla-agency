import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return(
    <main>
      <Layout pageTitle="Welcome to Folla Agency!">
      <p>Lorem Ipsum</p>
      <StaticImage alt='neytiri' src='../images/green-grass.jpg'/>
      </Layout>
    </main>
  )
}

export default IndexPage