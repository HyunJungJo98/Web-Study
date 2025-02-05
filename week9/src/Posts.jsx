import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const Posts = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');

      return res.json();
    },
    staleTime: 1000 * 60 * 5, // 5분
  });

  useEffect(() => {
    console.log('data length: ', data ? data.length : '');
  }, [data]);

  return <div>{data && data[data.length - 1].title}</div>;
};

export default Posts;
