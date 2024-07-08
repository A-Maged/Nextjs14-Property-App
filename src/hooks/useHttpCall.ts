import { useState, useEffect } from "react";

type Options = {
  initState: any;
  args?: any[];
  enabled?: boolean;
};

export function useHttpCall<T>(
  asyncFunction: (...args: any[]) => Promise<T>,
  options: Options = {
    initState: null,
  },
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [data, setData] = useState<T>(options.initState);

  const args = options.args || [];
  const enabled = options.enabled === undefined ? true : options.enabled;

  async function fetchData() {
    setIsLoading(true);

    try {
      const response = await asyncFunction(...args);

      setData(response);
    } catch (error) {
      setErrorMsg((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [...args, enabled]);

  return { isLoading, errorMsg, data };
}
