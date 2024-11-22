import { AxiosResponse, AxiosInstance } from "axios";

const ConversationService = {
  getResponse: (
    axiosInstance: AxiosInstance,
    query: string
  ): Promise<AxiosResponse<string>> => {
    return axiosInstance.post<string>("Analysis", JSON.stringify(query));
  },
};

export default ConversationService;
