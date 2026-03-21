import { fetchAnimeById, fetchAnimeBySearch, fetchAnimeEpisodes, fetchAnimes, fetchTopAnimes } from "@shared/api/endpoints/animes";
import { AnimeEpisodesResponse } from "@shared/models/anime";
import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

export const useTopAnimes = (search?: string, page = 1) => {
  return useQuery({
    queryKey: ["animes", page],
    queryFn: () => fetchTopAnimes(page),
    placeholderData: keepPreviousData,
    staleTime: 60 * 2000,
  })
}

export const useAnimeById = (id: string) => {
  return useQuery({
    queryKey: ["anime", id],
    queryFn: () => fetchAnimeById(id),
    staleTime: 60 * 1000,
  })
}

export const useAnimeEpisodes = (id: string) => {
  return useInfiniteQuery({
    queryKey: ["anime", id, "episodes"],
    initialPageParam: 1,
    queryFn: ({pageParam}) => fetchAnimeEpisodes(id, pageParam),
    getNextPageParam: (lastPage: AnimeEpisodesResponse, allPages) => {
      if (lastPage.pagination.has_next_page) {
        return allPages.length + 1
      }
      return undefined
    },
    getPreviousPageParam: (prevPage: AnimeEpisodesResponse, allPages) => {
      if (prevPage.pagination.last_visible_page > 1) {
        return allPages.length - 1
      }
      return undefined
    },
  })
}

