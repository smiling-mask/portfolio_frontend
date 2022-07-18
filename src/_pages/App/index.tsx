import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import loadable from '@loadable/component';

import Home from '_pages/Home';
import { Path } from 'Constants';

import { AppContainer } from './styles';

const HomePage = loadable(() => import('_pages/Home'));

const App: FC = () => {
  return (
    <AppContainer>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path={`/${Path.Home}`} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* Footer */}
    </AppContainer>
  );
};

export default App;
