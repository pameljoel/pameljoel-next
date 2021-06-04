import React from 'react';
import Home from '../components/home/Home.tsx';
import SEO from '../components/seo';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';
import '../buttons.scss';
import '../components/crisp/crisp.scss';

const IndexPage = () => (
  <>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, JavaScript, CSS3, HTML5 projects" />
    <Home />
  </>
);

export default IndexPage;
