import React from 'react';
import SEO from '../components/seo';
import Curriculum from '../components/curriculum/Curriculum';
import { PropTypes } from 'prop-types';
import {useAppContext} from "../context/state";

const CurriculumPage = () => {

    const { setSelectedProject } = useAppContext();
    return (
        <>
            <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack"/>
            <Curriculum setSelectedProject={setSelectedProject} />
        </>
    );
};

CurriculumPage.propTypes = {
  setSelectedProject: PropTypes.func,
};

CurriculumPage.defaultProps = {
  setSelectedProject: null,
};

export default CurriculumPage;
