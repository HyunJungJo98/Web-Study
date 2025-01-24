import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const UseQuery = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNumber((prev) => (prev += 1));
    }, 1000 * 20);
  }, []);

  const { data } = useQuery({
    queryKey: ['exampleData', number],
    queryFn: async () => {
      const date = new Date();
      console.log(
        'fetch!',
        `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, number: ${number}`
      );
      return (
        await fetch('https://api.github.com/repos/TanStack/query')
      ).json();
    },
    staleTime: 1000 * 60, // 60초
  });

  return <div>{data ? data.name : 'Loading'}</div>;
};

export default UseQuery;
