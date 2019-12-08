import React from 'react';
import App from './App';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import './setupTests';
describe('test app', () => {
  const initialState = {};
  const mockStore = configureStore();
  let wrapper,store;
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<App store={store} />);
  });
  it('app component', () => {
    expect(wrapper.exists()).toBe(true);
  });
})

