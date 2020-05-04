import React from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import store from './store/reducer/main';
import Login from './pages/Login';
import Home from './pages/Home';

test('main app renders corretly (home page)', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Login page renders correctly', () => {
  const tree = renderer.create(<Login/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Home page renders correctly', () => {
  const tree = renderer.create(<>{withRouter(Home)}</>).toJSON();
  expect(tree).toMatchSnapshot();
});