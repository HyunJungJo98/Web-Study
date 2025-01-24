import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import UseQuery from './UseQuery';
import UseMutation from './UseMutation';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <UseQuery /> */}
        <UseMutation />
      </div>
    </QueryClientProvider>
  );
}

export default App;
