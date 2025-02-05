import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const UseMutation = () => {
  const queryClient = useQueryClient();

  const { data, error, isPending, isError, isLoading, mutate, mutateAsync } =
    useMutation({
      mutationFn: async (data) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(data),
        });

        console.log('mutationFn: ', data);

        return res.json();
      },
      onMutate: async (data) => {
        console.log('onMutate: ', data);

        await queryClient.cancelQueries({ queryKey: ['posts'] });
        const prevPosts = queryClient.getQueryData(['posts']);

        if (prevPosts) {
          queryClient.setQueryData(['posts'], [...prevPosts, data]);
        }

        return { prevPosts };
      },
      onSuccess: (data) => {
        console.log('success', data);
        queryClient.invalidateQueries({ queryKey: ['posts'] });
      },
      onError: (error, newPost, context) => {
        console.log('error', error, newPost);
        if (context) {
          queryClient.setQueryData(['posts'], context.previousUsers);
        }
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      userId: 11,
      title: 'testTitle',
      body: 'testBody',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseMutation;
