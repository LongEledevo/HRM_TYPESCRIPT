import Axios from "axios";
import { REST_API_METHOD } from "../../constants";

type Params = { paths?: any; queries?: any; payload?: any };

type IRequest<T> = (params?: Params) => Promise<T>;

export default function createApi<T, R>({
  url,
  method,
}: {
  url: string;
  method: REST_API_METHOD;
}): IRequest<R> {
  const request = async (params?: Params): Promise<R> => {
    const config: {
      url: string;
      method: REST_API_METHOD;
      data: T | unknown;
    } = {
      url,
      method,
      data: null,
    };
    // const { paths, payload, queries } = params;
    if (params?.paths) {
      config.url = Object.keys(params.paths).reduce(
        (prev, curr) => prev.replace(`:${curr}`, params.paths[curr]),
        url
      );
    }

    if (params?.queries) {
      config.url = Object.keys(params.queries).reduce(
        (prev, curr) => prev + `${curr}=${params.queries[curr]}`,
        `${config.url}?`
      );
    }

    if (params?.payload) {
      config.data = params.payload;
    }

    console.log("config", config);

    return Axios<R>(config)
      .then((res) => res.data)
      .catch((res) => res.error);
  };

  return request;
}
