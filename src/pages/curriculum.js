import React from 'react';
import SEO from '../components/seo';
import Curriculum from '../components/curriculum/Curriculum';
import { PropTypes } from 'prop-types';
import {useAppContext} from "../context/state";
import { server } from "../helpers";

const CurriculumPage = ({ personal, education, career }) => {
    const { setSelectedProject } = useAppContext();
    return (
        <>
            <SEO title="CV - Pamel Joel Beltrè - Front End Developer & Designer - React, AngularJS, Webpack"/>
            <Curriculum  {...{ personal, education, career, setSelectedProject }} />
        </>
    );
};

export async function getServerSideProps () {
  const personal = await fetch(`${server}/api/personal`);
  const education = await fetch(`${server}/api/education`);
  const career = await fetch(`${server}/api/career`);

  const personalJson = await personal.json();
  const educationJson = await education.json();
  const careerJson = await career.json();

  return {
    props: {
      personal: personalJson,
      education: educationJson,
      career: careerJson,
    }
  }
}

CurriculumPage.propTypes = {
  setSelectedProject: PropTypes.func,
};

CurriculumPage.defaultProps = {
  setSelectedProject: null,
};

export default CurriculumPage;
