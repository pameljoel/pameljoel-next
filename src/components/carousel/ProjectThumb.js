import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const ProjectThumb = ({ project }) => {
  return <Link href="/src/pages/projects">
      <a>
          <img
              className="project-image"
              src={`/images/works/${project.slug}/thumb.jpg`}
              alt={project.about}
          />
      </a>
  </Link>
};

export default ProjectThumb;

ProjectThumb.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string,
    about: PropTypes.string,
  }),
};
