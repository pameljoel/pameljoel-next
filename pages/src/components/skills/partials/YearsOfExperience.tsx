import React from 'react';
import { Tooltip } from 'react-tippy';
import { generateExperienceClassName, formatExperienceTooltip } from '../utils.ts';
import Experience from './Experience.tsx';

type Props = {
  startDate: number;
  endDate?: number;
  tooltipName: string;
};

const YearsOfExperience: React.FC<Props> = ({
  startDate,
  endDate,
  tooltipName,
}) => {
  return startDate ? (
    <div
      className={`skill__experience ${generateExperienceClassName({
        startDate,
        endDate,
      })}`}
      data-test="skill-experience"
    >
      <Tooltip
        className="tag__tooltip"
        title={formatExperienceTooltip({ startDate, endDate })}
        position="top"
        trigger="mouseenter"
        data-test={`tooltip-${tooltipName}`}
        arrow={true}
      >
        <Experience startDate={startDate} endDate={endDate} />
      </Tooltip>
    </div>
  ) : null;
};

export default YearsOfExperience;
