
import { useEffect, useState } from 'react';

function useAnime(page) {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    // Example fetch call, replace with your actual data fetching logic
   fetch( `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity `)
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of anime objects
        setAnimeData(prevData => [...prevData, ...data]);
      })
      .catch(error => {
        console.error('Error fetching anime:', error);
      });
  }, [page]);

  return animeData;
}

export default useAnime;
