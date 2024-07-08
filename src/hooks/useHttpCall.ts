import { useState, useEffect } from "react";

export function useHttpCall(
  asyncFunction: any,
  options: {
    initState: any;
    args?: any[];
    enabled?: boolean;
  } = {
    initState: null,
  },
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [data, setData] = useState<any>(options.initState);

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
  }, [args, enabled]);

  return { isLoading, errorMsg, data };
}
