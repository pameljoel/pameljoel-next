import React, { useState, useEffect } from 'react';
import Loading from '../status/Loading';
import { PropTypes } from 'prop-types';

import Section from './Section';
import Career from './Career';
import Education from './Education';

import { getData } from '../../helpers';
import personalJson from '../../../../static/resources/personal.json';
import educationJson from '../../../../static/resources/education.json';
import careerJson from '../../../../static/resources/career.json';
import StaticHeader from "./StaticHeader";

const Content = (props) => {
  const { isLoading, personal, career, education, setSelectedProject } = props;
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

const Curriculum = ({ setSelectedProject }) => {
  const [personal, setPersonal] = useState(null);
  const [education, setEducation] = useState(null);
  const [career, setCareer] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const logError = (error) => {
    this.setState({ isLoading: false });
    console.error(error);
  };

  useEffect(() => {
    getData(personalJson)
      .then((data) => {
        setPersonal(data);
        setLoading(false);
      })
      .catch((error) => logError(error));
  }, [personal]);

  useEffect(() => {
    getData(educationJson)
      .then((data) => {
        setEducation(data);
        setLoading(false);
      })
      .catch((error) => logError(error));
  }, [education]);

  useEffect(() => {
    getData(careerJson)
      .then((data) => {
        setCareer(data);
        setLoading(false);
      })
      .catch((error) => logError(error));
  }, [career]);

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
