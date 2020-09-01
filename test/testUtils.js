import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducer, middleware, and initial state.
 * @function storeFactory
 * @param {object} initialState - Initial state store.
 * @returns {store}= Redux store.
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShalloeWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShalloeWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};
