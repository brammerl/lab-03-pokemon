import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import Select from './Select.js';
it('renders welcome message', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});

it('renders welcome message', () => {
  const wrapper = shallow(<Select />);

  expect(wrapper).toMatchSnapshot();
});


