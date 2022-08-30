import { fetcherGet } from "@lib/http";
import useSWR from "swr";


export default function useFetch(url, method, params, ...args) {


    return useSWR(
        `/api/searchMovie`,
        fetcherGet
      );
}