import { fetchAnimeBySearch, fetchAnimes } from '@shared/api/endpoints/animes'
import { Anime } from '@shared/models/anime'
import { create } from 'zustand'

type Filters = {
  genre: string[],
  search: string,
}

interface AnimeState {
  animes: Anime[]
  filters: Filters
  fetchAnimes: (filters?: Filters) => Promise<void>
}



export const useAnimeStore = create<AnimeState>((set) => ({
  animes: [],
  filters: {
    genre: [],
    search: '',
  },
  fetchAnimes: async (filters?: Filters) => {
    if (filters?.search) {
      const response = await fetchAnimeBySearch(filters.search)
      set({ animes: response })
    } else {
      const response = await fetchAnimes()
      set({ animes: response })
    }
  },
  setFilters: (filters: Filters) => set({ filters }),
}))