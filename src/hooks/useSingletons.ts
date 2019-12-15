// @flow

import { useState, useEffect } from "react";
import { getSingleton, Singleton } from "../services/singletonService";

function useSingletons(identifiers: Array<string>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [singletons, setSingletons] = useState<{
    [key: string]: Singleton;
  } | null>(null);

  useEffect(() => {
    async function fetchSingletons() {
      try {
        setIsLoading(true);

        const data = (
          await Promise.all(
            identifiers.map(async id => ({
              id: id,
              data: (await getSingleton(id)).data
            }))
          )
        ).reduce(
          (obj, item) => Object.assign(obj, { [item.id]: item.data }),
          {}
        );

        setSingletons(data);
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setIsLoading(false);

        return false;
      }
    }

    if (!isLoading && !hasError && !singletons) fetchSingletons();
  }, [identifiers, hasError, isLoading, singletons]);

  return { isLoading, singletons, hasError };
}

export default useSingletons;
