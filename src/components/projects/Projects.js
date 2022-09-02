import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Loading from '../status/Loading';
import { enableCrisp } from '../crisp/Crisp';
import Project from './Project';

const Projects = ({ selectedProject, projects }) => {
  const isLoading = !projects || projects.length === 0;

  useEffect(() => {
    enableCrisp();
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: selectedProject || 0,
  };

  return (
    <div>
      <header
        className="big-header"
        style={{ marginBottom: '-300px', paddingBottom: '200px' }}
      >
        <div className="big-header-content">
          <h1 className="">PROJECTS</h1>
          <div className="subtitle">This is a selection of my web projects</div>
        </div>
        <div className="big-header-background" />
      </header>
      <div className="projects-container">
        {!isLoading && projects ? (
          <div className="projects">
            {projects.length > 0 && (
              <Slider {...settings}>
                {projects.map((project) => (
                  <div key={`project-slider-${project.slug}`}>
                    <Project {...project} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        ) : (
          <Loading isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      about: PropTypes.string,
      category: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      job: PropTypes.string,
      myWork: PropTypes.string,
      name: PropTypes.string,
      sliderId: PropTypes.number,
      slug: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  selectedProject: PropTypes.number,
};

Projects.defaultProps = {
  selectedProject: 0,
};

export default Projects;
