import React from 'react';
import Home from '../components/home/Home';
import SEO from '../components/seo';
import { server } from "../helpers";

const IndexPage = ({ sections }) => (
  <>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, JavaScript, CSS3, HTML5 projects" />
    <Home sections={sections} />
  </>
);


export async function getServerSideProps () {
  const data = await fetch(`${server}/api/categories`);
  const sections = await data.json();

  return {
    props: {
      sections,
    }
  }
}

export default IndexPage;
