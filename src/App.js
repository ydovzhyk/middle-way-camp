import React from 'react';
import UserRoutes from './components/Routes/UserRoutes.jsx';
import ScrollToTopOnRouteChange from './components/helpers/ScrollToTopOnRouteChange';
import ScrollToTopButton from './components/Shared/ScrollToTopButton';
import SchemaOrg from 'components/helpers/SchemaOrg';

function App() {
  return (
    <>
      <SchemaOrg />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <main>
          <ScrollToTopOnRouteChange />
          <ScrollToTopButton />
          <UserRoutes />
        </main>
      </div>
    </>
  );
}

export default App;
