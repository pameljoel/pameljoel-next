import React, { Fragment } from 'react';
import SEO from './src/components/seo';
import Curriculum from './src/components/curriculum/Curriculum';
import { PropTypes } from 'prop-types';

const CurriculumPage = ({ setSelectedProject }) => (
  <Fragment>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
    <Curriculum setSelectedProject={setSelectedProject} />
  </Fragment>
);

CurriculumPage.propTypes = {
  setSelectedProject: PropTypes.func,
};

CurriculumPage.defaultProps = {
  setSelectedProject: null,
};

export default CurriculumPage;
