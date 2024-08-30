import axios, { AxiosRequestConfig } from "axios";
import { AuthUser } from "../components/common/Utils";
import { toast } from "react-toastify";
const baseURL = import.meta.env.VITE_API_URL;

class APIClient {
  private instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: baseURL,
    });

    const authUser: any = AuthUser();
    const token: string | null = authUser ? authUser?.token : null;
    if (token) this.instance.defaults.headers.common["Authorization"] = token;

    this.instance.interceptors.response.use(
      function (response: any) {
        return response?.data ? response?.data : response;
      },

      function (error: any) {
        if (!navigator.onLine) window.location.href = "/#/auth-offline";
        let message: string;
        switch (error.response.status) {
          case 500:
            window.location.href = "/#/auth-500";
            break;
          case 502:
            message = "Bad Gateway";
            break;
          case 503:
            window.location.href = "/#/pages-maintenance";
            break;
          case 400:
            message = error.response.data?.msg;
            toast.error(message);
            break;
          case 440:
            // case 401:
            window.location.href = "/#/sessionexpired";
            break;
          case 404:
            window.location.href = "/#/auth-404-alt";
            break;
          case 403:
            return Promise.reject(error.response.status);
          default:
            message = error.response.data.msg || error.msg;
            toast.error(message);
            return Promise.reject(message);
        }
      }
    );
  }

  public get(url: string, data: any = {}) {
    return this.instance.get(url, data);
  }

  public post(url: string, data: any, isMultipartFormData = false) {
    return this.instance.post(url, data, {
      headers: {
        "Content-Type": isMultipartFormData
          ? "multipart/formdata"
          : "application/json",
      },
    });
  }

  public update(url: string, data: any, isMultipartFormData = false) {
    return this.instance.patch(url, data, {
      headers: {
        "Content-Type": isMultipartFormData
          ? "multipart/formdata"
          : "application/json",
      },
    });
  }

  public put(url: string, data: any, isMultipartFormData = false) {
    return this.instance.put(url, data, {
      headers: {
        "Content-Type": isMultipartFormData
          ? "multipart/formdata"
          : "application/json",
      },
    });
  }

  public delete(url: string, config?: AxiosRequestConfig) {
    return this.instance.delete(url, { ...config });
  }

  public login(url: string, data: any) {
    let encodedData = window.btoa(data.username + ":" + data.password);
    return this.instance.post(url, encodedData);
  }
}

export { APIClient };
