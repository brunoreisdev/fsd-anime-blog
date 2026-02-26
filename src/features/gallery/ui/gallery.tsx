"use client"
import { useEffect, useState, useTransition } from "react";
import styles from "./gallery.module.scss";
import { AnimeCards, useAnimeStore } from "@entities/anime";

function Gallery() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<Error | null>(null)
  const { animes, fetchAnimes } = useAnimeStore()
  
  useEffect(() => {
    if(animes.length > 0) return

    startTransition(() => {
      fetchAnimes().catch((error) => {
        setError(error)
      })
    })
  }, [animes.length, fetchAnimes])

  return (
    <div className={styles.gridWrapper}>
      {isPending && <h1>Loading...</h1>}
      {error && <p>Error: {error.message}</p>}
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
  );
}

export default Gallery;