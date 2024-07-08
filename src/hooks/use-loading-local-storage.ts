import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

type UseLoadingLocalStorageResult<T> = {
  localDataIsLoading: boolean;
  localData: T;
  setLocalData: (value: T) => void;
};

export function useLoadingLocalStorage<T>(
  key: string,
  initialValue: T,
): UseLoadingLocalStorageResult<T> {
  const [localDataIsLoading, setLoading] = useState(true);
  const [localData, setLocalData] = useLocalStorage<T>(key, initialValue);

  useEffect(() => {
    setLoading(false);
  }, [localData]);

  return { localDataIsLoading, localData, setLocalData };
}
