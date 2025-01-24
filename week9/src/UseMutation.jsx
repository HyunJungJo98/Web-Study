import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const UseMutation = () => {
  const [text, setText] = useState({ title: '', body: '' });
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
        return res.json();
      },
      onSuccess: (data) => {
        console.log('success', data);
        setText({ title: data.title, body: data.body });
      },
      onError: (error) => {
        console.log('error', error);
      },
    });

  useEffect(() => {
    mutate({
      userId: 11,
      title: 'testTitle',
      body: 'testBody',
    });
  }, []);

  return (
    <>
      <div>{text.title}</div>
      <div>{text.body}</div>
    </>
  );
};

export default UseMutation;
