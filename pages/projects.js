import React, { Fragment } from 'react';
import SEO from './src/components/seo';
import Projects from './src/components/projects/Projects';
import { PropTypes } from 'prop-types';
import {useAppContext} from "./src/context/state";

const ProjectsPage = () => {
  const { selectedProject } = useAppContext();
  return (
    <Fragment>
      <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
      <Projects selectedProject={selectedProject} />
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
