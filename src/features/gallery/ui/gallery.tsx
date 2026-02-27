"use client"
import styles from "./gallery.module.scss";
import { AnimeCards, useAnimeStore } from "@entities/anime";
import { useAnimes } from "@entities/anime/api/queries";

function Gallery({ title }: { title: string }) {
  const search = useAnimeStore((s) => s.filters.search);
  const { data: animes, isLoading, error } = useAnimes(search);

  return (
    <>
      <h2>{title}</h2>
      <div className={styles.gridWrapper}>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Error: {(error as Error).message}</p>}
        {animes && animes.map((anime) => {
          return (
          <AnimeCards
            key={anime.mal_id}
            title={anime.title}
            description={anime.synopsis}
            image={anime.images.jpg.image_url}
            episodes={anime.episodes}
            rating={anime.rating}
            genres={anime.genres}
            popularity={anime.popularity}
            onClick={() => {}}
          />
        )})}
      </div>
    </>
  );
}

export default Gallery;