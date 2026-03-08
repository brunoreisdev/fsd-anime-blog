import { fetchAnimeBySearch, fetchAnimes, fetchTopAnimes } from "@shared/api/endpoints/animes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useAnimes = (search?: string, page = 1) => {
  return useQuery({
    queryKey: ["animes", page, search],
    queryFn: () => search ? fetchAnimeBySearch(page, search) : fetchAnimes(page),
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
    // getNextPageParam: (lastPage: number) => lastPage.pagination.next,
    // getPreviousPageParam: (prevPage: number) => prevPage.pagination.prev,
  });
}

export const useTopAnimes = (page = 1) => {
  return useQuery({
    queryKey: ["animes", page],
    queryFn: () => fetchTopAnimes(page),
    placeholderData: keepPreviousData,
    staleTime: 60 * 2000,
  })
}
