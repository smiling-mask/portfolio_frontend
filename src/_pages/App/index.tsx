import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import loadable from '@loadable/component';

import { Path } from 'Constants';

import { AppContainer } from './styles';

const HomePage = loadable(() => import('_pages/Home'));
const WorkPage = loadable(() => import('_pages/Work'));
const AboutPage = loadable(() => import('_pages/About'));
const ContactPage = loadable(() => import('_pages/Contact'));

const App: FC = () => {
  return (
    <AppContainer>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path={Path.Home} element={<HomePage />} />
          <Route path={Path.Work} element={<WorkPage />} />
          <Route path={Path.About} element={<AboutPage />} />
          <Route path={Path.Contact} element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      {/* Footer */}
    </AppContainer>
  );
};

export default App;
