import React from 'react';
import Airport from './Airport';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Airport />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
