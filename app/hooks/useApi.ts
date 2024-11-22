import { useCallback, useState } from "react";
import { AxiosInstance, AxiosResponse } from "axios";

interface ApiService {
  request: () => Promise<AxiosResponse<any>>;
}

const useApi = (apiService: ApiService, axiosInstance: AxiosInstance) => {
  const [data, setData] = useState<any>(null);
  const [loading, isLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    isLoading(true);
    try {
      const response = await apiService.request();
      setData(response.data);
      return response.data;
    } catch (error) {
      setError(error);
    } finally {
      isLoading(false);
    }
  }, [apiService]);

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useApi;
