import React from 'react';
import SEO from './src/components/seo';
import Curriculum from './src/components/curriculum/Curriculum';
import { PropTypes } from 'prop-types';
import {useAppContext} from "./src/context/state";

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
