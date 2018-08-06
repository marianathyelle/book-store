import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/global';

import Header from './components/Header';
import Routes from './routes';

const App = () => (
  <Provider>
    <BrowserRouter>
      <Fragment>
        <Header/>
        <Routes/>
      </Fragment>
    </BrowserRouter>
  </Provider>
) 

export default App;
