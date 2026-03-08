import { create } from 'zustand'

type Filters = {
  genre: string[],
  search: string,
}

interface AnimeState {
  filters: Filters
  setFilters: (filters: Filters) => void
  page: number
  setPage: (page: number) => void
}

export const useAnimeStore = create<AnimeState>((set) => ({
  filters: {
    genre: [],
    search: '',
  },
  page: 1,
  setPage: (page: number) => set({ page }),
  setFilters: (filters: Filters) => set({ filters }),
}))