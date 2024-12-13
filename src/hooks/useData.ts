import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies?: any[]
) {
  const [data, setData] = useState<T[]>([]),
    [error, setError] = useState(""),
    [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies ? [...dependencies] : []
  );
  return { data, error, isLoading };
}
