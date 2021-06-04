import React from 'react';
import PropTypes from 'prop-types';

import Tags from '../tags/Tags';

const School = ({ degree, degreeType, school, city, year, subjects }) => {
  return (
    <article className="card school-container">
      <header className="school-role">
        <h1>{degree}</h1>
      </header>
      <div className="school-data-container">
        <span className="school-degree-type">
          <span className="text">{degreeType}</span>
        </span>

        <span className="school-name">
          <span className="prefix">at</span>
          <span className="text">{school}</span>
        </span>

        <span className="school-city">
          <span className="prefix">in</span>
          <span className="text">{city}</span>
        </span>

        <span className="school-year">
          <span className="prefix">year</span>
          <span className="text">{year}</span>
        </span>
      </div>

      <div className="school-skills-container">
        <Tags data={subjects} />
      </div>
      <div className="school-projects" />
    </article>
  );
};

export default School;

School.propTypes = {
  degree: PropTypes.string,
  degreeType: PropTypes.string,
  school: PropTypes.string,
  city: PropTypes.string,
  year: PropTypes.string,
  subjects: PropTypes.arrayOf(PropTypes.string),
};
