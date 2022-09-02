import React, { Fragment } from 'react';
import SEO from '../components/seo';
import Projects from '../components/projects/Projects';
import { PropTypes } from 'prop-types';
import {useAppContext} from "../context/state";
import { server } from "../helpers";

const ProjectsPage = ({ projects }) => {
  const { selectedProject } = useAppContext();
  return (
    <Fragment>
      <SEO title=" Projects - Pamel Joel Beltrè - Front End Developer & Designer - React, AngularJS, Webpack" />
      <Projects { ...{projects, selectedProject} } />
    </Fragment>
  );
};

export async function getServerSideProps () {
  const data = await fetch(`${server}/api/projects`);
  const projects = await data.json();

  return {
    props: {
      projects,
    }
  }
}

ProjectsPage.propTypes = {
  selectedProject: PropTypes.number,
};

ProjectsPage.defaultProps = {
  selectedProject: null,
};

export default ProjectsPage;
