import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Dashboard from './Dashboard';

describe('App Rendering', () => {
  test('Render dashboard component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </BrowserRouter>,
    );
    screen.debug();
  });
  test('Dashboard data loads properly', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
