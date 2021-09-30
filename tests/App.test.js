import React from 'react';
import renderer from 'react-test-renderer';
// import {cleanup, fireEvent, render} from '@testing-library/react';
import App from '../client/containers/App.jsx';

test('is an App', () => {
  const component = renderer.create(
    <App></App>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  });
