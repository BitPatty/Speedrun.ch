import axios, { AxiosResponse, AxiosInstance } from 'axios';
import config from '../config/config.json';

type Headers = {
  [headerName: string]: string | void;
};

const getDefaultHeaders = (): Headers => ({
  Accept: 'application/json',
});

const instance: AxiosInstance = axios.create({
  baseURL: `${config.backendurl}/collections/get/galleries`,
});

export type GalleryResponse = {
  entries: Array<Gallery>;
};

export type Gallery = {
  title: string;
  description: string;
  pictures: Array<{ meta: Object; path: string }>;
};

export function getGalleries(): Promise<AxiosResponse<GalleryResponse>> {
  return instance.request<GalleryResponse>({
    url: '/',
    method: 'GET',
    headers: getDefaultHeaders(),
  });
}
