"use client";

import { useAnimeById } from "@entities/anime";
import Hero from "@shared/ui/hero/hero";
import { use } from "react";
import styles from "./anime.module.scss";

function AnimePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data, isLoading, error } = useAnimeById(slug);
  const { data: anime } = data || {};
  const imageUrl = anime?.images.jpg.large_image_url || "";
  const title = anime?.title || "";

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {(error as Error).message}</p>}
      {anime && <Hero imageUrl={imageUrl} alt={title} title={title} release={anime.aired.from} status={anime.status}/>}
      <div className={styles.content}>
        <section >
          <p className={styles.synopsis}>{anime?.synopsis}</p>
        </section>
        <section>
          <h2>Episodes</h2>
          {/* <ul>
          {anime?.episodes.map((episode) => (
            <li key={episode.mal_id}>{episode.title}</li>
          ))}
        </ul> */}
      </section>
      </div>
    </div>
  );
}

export default AnimePage;
