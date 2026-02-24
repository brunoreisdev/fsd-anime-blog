import { Client } from "../client";

const client = new Client();

export function fetchAnimes(): Promise<any> {
  return client.get("anime");
}

export function fetchAnimeById(id: string): Promise<any> {
  return client.get(`anime/${id}`);
}

export function fetchAnimeBySearch(search: string): Promise<any> {
  return client.get(`anime?q=${search}`);
}

