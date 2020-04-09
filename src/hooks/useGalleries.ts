import { useState, useEffect } from 'react';
import { getGalleries, Gallery } from '../services/galleryService';

function useGalleries() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [galleries, setGalleries] = useState<Array<Gallery> | null>(null);

  useEffect(() => {
    async function fetchGalleries() {
      try {
        setIsLoading(true);

        const { data } = await getGalleries();

        setGalleries(data.entries);
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setIsLoading(false);

        return false;
      }
    }

    if (!isLoading && !hasError && !galleries) fetchGalleries();
  });

  return { isLoading, galleries, hasError };
}

export default useGalleries;
