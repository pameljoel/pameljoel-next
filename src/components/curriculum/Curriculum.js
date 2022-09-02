import React from 'react';
import Loading from '../status/Loading';
import { PropTypes } from 'prop-types';

import Section from './Section';
import Career from './Career';
import Education from './Education';
import StaticHeader from "./StaticHeader";

const Content = ({ isLoading, personal, career, education, setSelectedProject }) => {
  return (
    <div className="container">
      {!isLoading && (personal || career || education) ? (
        <div className="curriculum-container">
          <Section data={personal} />
          <Career data={career} setSelectedProject={setSelectedProject} />
          <Education data={education} />
        </div>
      ) : (
        <Loading isLoading={isLoading} />
      )}
    </div>
  );
};

const Curriculum = ({ personal, education, career, setSelectedProject }) => {
  const isLoading = !personal && !education && !career;

  return (
    <div>
      <StaticHeader />
      <Content
        isLoading={isLoading}
        personal={personal}
        career={career}
        education={education}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
};

Curriculum.propTypes = {
  setSelectedProject: PropTypes.func,
};

Curriculum.defaultProps = {
  setSelectedProject: null,
};

export default Curriculum;
