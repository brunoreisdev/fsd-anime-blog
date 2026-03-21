"use client";

import { useAnimeById } from "@entities/anime";
import Hero from "@shared/ui/hero/hero";
import { use } from "react";
import styles from "./anime.module.scss";
import { RatingBadge } from "@shared/ui/rating-badge";
import { Chip } from "@shared/ui/chip";
import { EpisodesGallery } from "@features/episodes-gallery";

function AnimePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data, isLoading, error } = useAnimeById(slug);
  const { data: anime } = data || {};
  const imageUrl = anime?.images.jpg.large_image_url || "";
  const title = anime?.title || "";

  const renderGenres = () => {
    return anime?.genres.map((genre) => (
      <Chip key={genre.mal_id} label={genre.name} />
    ));
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {(error as Error).message}</p>}
      {anime && <Hero imageUrl={imageUrl} alt={title} title={title} release={anime.aired.from} status={anime.status}/>}
      <div className="page-content">
        <div className={styles.content}>
          <section className={styles.ratingAndGenres}>
            <div className={styles.genresContainer}>
              {renderGenres()}
            </div>
            <RatingBadge ratingString={anime?.rating || ""} />
          </section>
          <section>
            <p className={styles.synopsis}>{anime?.synopsis}</p>
          </section>
          <div className="divisor" />
          <section>
            <h2>Episodes</h2>
            <EpisodesGallery id={slug} animeName={title} image={imageUrl} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default AnimePage;
