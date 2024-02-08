import { useQuery } from '@tanstack/react-query';

export default function useAnime(page) {
  return useQuery({
    queryKey: ['anime'],
    queryFn: async () => {
      const response = await fetch( `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity `);
      const data = await response.json();
      return data;
    },
  });
}