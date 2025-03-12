import axios, { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";

const urlApi = "https://dragonball-api.com/api/";

const axiosInstance = axios.create({
  baseURL: urlApi,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<AxiosError, any>) => {
      const data = error.response?.data;
      enqueueSnackbar(data?.message || "Ocurrió un error en la respuesta", {
        variant: "error",
      });
      return Promise.reject(error);
    }
  );

export default axiosInstance;