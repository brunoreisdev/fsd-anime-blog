import { AnimeResponse, AnimesResponse } from "@shared/models/anime";
import { Client } from "../client";

const client = new Client();

const params = {
  limit: 24,
}

export function fetchAnimes(page: number): Promise<AnimesResponse> {
  return client.get("anime", { ...params, page }).then((response) => response);
}

export function fetchAnimeById(id: string): Promise<AnimeResponse> {
  return client.get(`anime/${id}/full`).then((response) => response);
}

export function fetchAnimeBySearch(page: number, search: string): Promise<AnimesResponse> {
  return client.get('anime', { ...params, page, q: search }).then((response) => response);
}

export function fetchTopAnimes(page: number): Promise<AnimesResponse> {
  return client.get('top/anime', {...params, page }).then((response) => response)
}