import { Anime } from "@shared/models/anime";
import { Client } from "../client";

const client = new Client();

export function fetchAnimes(): Promise<Anime[]> {
  return client.get("anime").then((response) => response.data);
}

export function fetchAnimeById(id: string): Promise<Anime> {
  return client.get(`anime/${id}`).then((response) => response.data);
}

export function fetchAnimeBySearch(search: string): Promise<Anime[]> {
  return client.get(`anime?q=${search}`).then((response) => response.data);
}

