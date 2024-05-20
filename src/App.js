import React from 'react';
import UserRoutes from './components/Routes/UserRoutes.jsx';
// import { Helmet } from 'react-helmet';
import ScrollToTopOnRouteChange from './components/helpers/ScrollToTopOnRouteChange';
import ScrollToTopButton from './components/Shared/ScrollToTopButton';
import SchemaOrg from 'components/helpers/SchemaOrg';

function App() {
  // const googleAnalyticsScript = `
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'G-QS0LELBS8K');
  // `;

  return (
    <>
      {/* <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QS0LELBS8K"
        />
        <script>{googleAnalyticsScript}</script>
      </Helmet> */}
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
