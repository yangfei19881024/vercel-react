import { useQuery } from 'react-query';
import http from 'service/http';
import * as Keys from 'service/keys';

async function fetchUsers() {
  const data = await http.request({
    url: '/users',
  });
  return data;
}

export default function useUsers() {
  const { data, isLoading, isError } = useQuery([Keys.fetch_users], fetchUsers);

  return {
    data,
    isLoading,
    isError,
  };
}
