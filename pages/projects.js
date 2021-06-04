import React, { Fragment } from 'react';
import SEO from './src/components/seo';
import Projects from './src/components/projects/Projects';
import { PropTypes } from 'prop-types';

const ProjectsPage = (props) => {
  return (
    <Fragment>
      <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
      <Projects selectedProject={props.selectedProject} />
    </Fragment>
  );
};

ProjectsPage.propTypes = {
  selectedProject: PropTypes.number,
};

ProjectsPage.defaultProps = {
  selectedProject: null,
};

export default ProjectsPage;
