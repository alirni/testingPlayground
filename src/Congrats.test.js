import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Create a ShallowWrapper for th Congrats component.
 * @function setup
 * @param {object} props - Component props.
 * @returns {ShalloeWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'componentCongrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'componentCongrats');
  expect(component.text()).toBe('');
});

test('renders non-empty Congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congratsMessage');
  expect(component.text().length).not.toBe(0);
});
