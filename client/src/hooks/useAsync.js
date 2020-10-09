import { useState, useEffect } from "react";

function useAsync(asyncFunction, args) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      try {
        setLoading(true);
        setError(false);
        setData(null);
        const data = await asyncFunction(args);
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [asyncFunction, args]);

  return { data, loading, error };
}

export default useAsync;
