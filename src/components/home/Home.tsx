import React from "react";
import Loading from '../status/Loading';
import ErrorBoundary from '../status/ErrorBoundary';
import StaticContent from './StaticContent';
import { SectionsType } from '../../types';
import Section from './Section';

type Props = {
  sections: SectionsType;
}

const createSections = (sections: SectionsType) => {
  if (!sections) return null;

  return sections.map((section) => {
    const { name, description, skills } = section;
    return (
      <Section
        key={name}
        name={name}
        description={description}
        skills={skills}
      />
    );
  });
};

const Home: React.FC<Props> = ({ sections }) => {
  const isLoading = sections.length === 0;

  return (
    <div data-test="home">
      <StaticContent />
      <ErrorBoundary isLoading={isLoading}>
        <div className="container">
          <div className="homepage-container">
            <small>These are some of the things I work with</small>
            {isLoading ? (
              <Loading isLoading={isLoading} />
            ) : (
              sections && createSections(sections)
            )}
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
