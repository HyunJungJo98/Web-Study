import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import Loading from './Loading';

const UseQuery = React.lazy(() => import('./UseQuery'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <UseQuery />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
