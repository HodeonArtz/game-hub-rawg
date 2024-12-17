import { create } from "zustand";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  filterGenre: (genre: Genre | null) => void;
  filterPlatform: (platform: Platform | null) => void;
  sortBy: (sort: string) => void;
  searchGame: (keywords: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  filterGenre: (genre) => set(() => ({ gameQuery: { genre } })),
  filterPlatform: (platform) => set(() => ({ gameQuery: { platform } })),
  sortBy: (sortOrder) => set(() => ({ gameQuery: { sortOrder } })),
  searchGame: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
