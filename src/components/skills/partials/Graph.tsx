import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { randomDelay, skillLevel } from '../utils';
import useBreakpoint from '../../utils/useBreakpoint';
import { breakpoints } from '../../utils/breakpoints';
import { ProgressBar } from './ProgressBar';

type GraphProps = { percentage: number; chartData: any[] };
type Props = { percentage: number; color?: string };

const SelectGraphType = ({ percentage, chartData }: GraphProps) => {
  return useBreakpoint(breakpoints.xs) ? (
    <ProgressBar percentage={percentage} delay={randomDelay()} />
  ) : (
    <PieChart
      className="graph-item"
      data={chartData}
      lineWidth={4}
      rounded
      totalValue={100}
      animate
      animationDuration={5000}
      animationEasing="ease-in-out"
    />
  );
};

const Graph: React.FC<Props> = ({ percentage, color }) => {
  const chartData = [
    {
      value: percentage,
      color: color,
    },
  ];

  return (
    <div className="skill-graph-image" data-test="skill-graph">
      <div className="skill-level-container">
        <div className="skill-level-label">Proficiency: </div>
        <div className="skill-level">{skillLevel(percentage)}</div>
      </div>
      <SelectGraphType percentage={percentage} chartData={chartData} />
    </div>
  );
};

export default Graph;
