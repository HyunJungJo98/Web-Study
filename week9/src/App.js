import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import UseQuery from './UseQuery';
import UseMutation from './UseMutation';
import Posts from './Posts';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <UseQuery /> */}
        <UseMutation />
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
