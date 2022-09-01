import React from 'react';
import Curriculum from "./Curriculum";

it('renders without crashing', () => {
  const emptyFunction = jest.fn();
  const wrapper = shallow(<Curriculum setSelectedProject={emptyFunction} />);

  expect(wrapper.length).toBe(1);
});

