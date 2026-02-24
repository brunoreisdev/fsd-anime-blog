"use client";
import { useEffect, useState, useTransition } from "react";
import styles from "./gallery.module.scss";
import { fetchAnimes } from "@shared/api/endpoints/animes";
import { AnimeCards } from "@entities/anime";

function Gallery() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<any>(null)
  
  useEffect(() => {
    startTransition(() => {
      fetchAnimes().then(({ data }) => {
        setData(data)
      }).catch((error) => {
        setError(error)
      })
    })
  }, [])

  return (
    <div className={styles.gridWrapper}>
      {isPending && <h1>Loading...</h1>}
      {error && <p>Error: {error.message}</p>}
      {data && data.map((anime: any) => {
        console.log(anime)
        return (
        <AnimeCards
          key={anime.mal_id}
          title={anime.title}
          description={anime.synopsis}
          image={anime.images.jpg.image_url}
          episodes={anime.episodes}
          rating={anime.rating}
          genres={anime.genres}
        />
      )})}
    </div>
  );
}

export default Gallery;