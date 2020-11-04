import React, {Suspense} from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import ScrollTop from './hooks/useScrollToTop';
import Spinner from './components/Spinner';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <ScrollTop>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Calculator />
        </Suspense>
      </ErrorBoundary>
    </ScrollTop>
  );
}

export default App;
