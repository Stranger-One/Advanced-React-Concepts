import React from "react";
// import Memoization from './components/Memoization'

const Memoization = React.lazy(() => import("./components/Memoization"));
import { Suspense } from "react";

import ErrorFallBack from "./components/ErrorFallBack";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  return (
    <div>
      <div className="w-full h-[30vh] flex items-center justify-center bg-gray-200> ">
        <h1 className="text-4xl font-bold text-center">
          React Performance Optimization
        </h1>
      </div>
      <ErrorBoundary fallbackRender={ErrorFallBack} onReset={()=>{}} >
        <Suspense
          fallback={
            <div className="w-full h-[50vh] flex items-center justify-center bg-gray-200 text-lg">
              Loading...
            </div>
          }
        >
          <Memoization />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
