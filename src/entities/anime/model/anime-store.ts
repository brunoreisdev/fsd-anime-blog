import { create } from 'zustand'

type Filters = {
  genre: string[],
  search: string,
}

interface AnimeState {
  filters: Filters
  setFilters: (filters: Filters) => void
}

export const useAnimeStore = create<AnimeState>((set) => ({
  filters: {
    genre: [],
    search: '',
  },
  setFilters: (filters: Filters) => set({ filters }),
}))