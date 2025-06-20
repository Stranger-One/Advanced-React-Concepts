import React from 'react';
// import Memoization from './components/Memoization'

const Memoization = React.lazy(() => import('./components/Memoization'));
const SmartComponent = React.lazy(() => import('./components/SmartComponent'));
import { Suspense } from 'react';

import ErrorFallBack from './components/ErrorFallBack';
import { ErrorBoundary } from 'react-error-boundary';
import CalenderDemo from './components/CalenderDemo';
import RHFWithZod from './components/RHFWithZod';
import ReduxToolkit from './components/ReduxToolkit';
import Zustand from './components/Zustand';

const App = () => {
  return (
    <div className="wfull min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-[30vh] flex items-center justify-center bg-gray-200> ">
        <h1 className="text-4xl font-bold text-center">
          React Performance Optimization
        </h1>
      </div>
      {/* <ErrorBoundary fallbackRender={ErrorFallBack} onReset={()=>{}} >
        <Suspense
          fallback={
            <div className="w-full h-[50vh] flex items-center justify-center bg-gray-200 text-lg">
              Loading...
            </div>
          }
        >
          <Memoization />
        </Suspense>
      </ErrorBoundary> */}

      {/* <ErrorBoundary fallbackRender={ErrorFallBack} onReset={()=>{}} >
        <Suspense
          fallback={
            <div className="w-full h-[50vh] flex items-center justify-center bg-gray-200 text-lg">
              Loading...
            </div>
          }
        >
          <SmartComponent />
        </Suspense>
      </ErrorBoundary> */}
      {/* <RHFWithZod /> */}
      {/* <ReduxToolkit /> */}
      <Zustand />
    </div>

    // <div className="w-full min-h-screen ">
    //   <CalenderDemo />
    // </div>
  );
};

export default App;
