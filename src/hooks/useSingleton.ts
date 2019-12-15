// @flow

import { useState, useEffect } from "react";
import { getSingleton, Singleton } from "../services/singletonService";

function useSingleton(identifier: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [singleton, setSingleton] = useState<Singleton | null>(null);

  useEffect(() => {
    async function fetchSingleton() {
      try {
        setIsLoading(true);

        const { data } = await getSingleton(identifier);

        setSingleton(data);
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setIsLoading(false);
      }
    }

    if (!isLoading && !hasError && !singleton) fetchSingleton();
  }, [identifier]);

  return { isLoading, singleton, hasError };
}

export default useSingleton;
