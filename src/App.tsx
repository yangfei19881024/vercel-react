import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import './App.css';

const App: React.FC = props => {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        {useRoutes(routes)}
      </ErrorBoundary>
    </div>
  );
};

export default App;
