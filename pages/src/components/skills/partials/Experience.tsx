import React from 'react';
import { getYearsOfExperience } from '../utils';

type Props = {
  startDate: number;
  endDate?: number;
};

const Experience: React.FC<Props> = ({ startDate, endDate }) => {
  return (
    <div data-test="experience">
      {`${getYearsOfExperience(startDate, endDate)} years`}
    </div>
  );
};

export default Experience;
