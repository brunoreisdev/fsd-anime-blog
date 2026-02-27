import { fetchAnimeBySearch, fetchAnimes } from "@shared/api/endpoints/animes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useAnimes = (search?: string) => {
  return useQuery({
    queryKey: ["animes", search],
    queryFn: () => search ? fetchAnimeBySearch(search) : fetchAnimes(),
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
  });
}
