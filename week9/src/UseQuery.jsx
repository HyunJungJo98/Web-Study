import { useQuery } from '@tanstack/react-query';

const UseQuery = () => {
  const { data } = useQuery({
    queryKey: ['exampleData'],
    queryFn: async () => {
      const date = new Date();
      console.log(
        'fetch!',
        `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
      return (
        await fetch('https://api.github.com/repos/TanStack/query')
      ).json();
    },
    staleTime: 1000 * 10, // 10초
    suspense: true,
  });

  return <div>{data.name}</div>;
};

export default UseQuery;
