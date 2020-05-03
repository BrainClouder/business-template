import React from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/reducer/main';

test('it renders corretly', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
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
