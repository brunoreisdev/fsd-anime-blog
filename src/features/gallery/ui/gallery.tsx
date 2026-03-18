"use client"
import styles from "./gallery.module.scss";
import { AnimeCards, useAnimeStore } from "@entities/anime";
import { useTopAnimes } from "@entities/anime/api/queries";
import { useRouter } from "next/navigation";

function Gallery({ title }: { title: string }) {
  const search = useAnimeStore((s) => s.filters.search);
  const page = useAnimeStore((s) => s.page);
  const { data, isLoading, error } = useTopAnimes(search, page);
  const router = useRouter();
  const {pagination, data: animes} = data || {};

  const handleSeeMore = () => {
    if(pagination?.has_next_page) {
      useAnimeStore.setState({ page: page + 1 });
    }
  }


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
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
            score={anime.score}
            onClick={() => {router.push(`/anime/${anime.mal_id}`)}}
          />
        )})}
      </div>
      <button onClick={handleSeeMore} className={styles.seeMore}>Ver mais</button>
    </div>
  );
}

export default Gallery;