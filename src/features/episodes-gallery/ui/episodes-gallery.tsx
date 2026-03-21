"use client"
import styles from "./episodes-gallery.module.scss";
import { useAnimeEpisodes } from "@entities/anime/api/queries";
import { AnimeEpisode } from "@shared/models/anime";
import Card from "@shared/ui/card/card";
import Image from "next/image";
import { BsBroadcast, BsStarFill } from "react-icons/bs";

function EpisodesGallery({ id, animeName, image }: { id: string, animeName: string, image: string }) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useAnimeEpisodes (id);

  const handleSeeMore = () => {
    if(hasNextPage) {
      fetchNextPage();
    }
  }

  const episodes = data?.pages.flatMap((page) => page.data) || []; 

  const renderFooter = (episode: AnimeEpisode) => {
    const airedDate = new Date(episode.aired).toLocaleDateString(
      'en-US',
      {year: 'numeric', month: 'short', day: 'numeric'}
    )
    return (
      <div className={styles.footerContainer}>
        <div className={styles.scoreContainer}>
          <BsStarFill color="#fbbf24" size={16} />
          <span className="small"><strong>{episode.score}</strong></span>
        </div>
        <div className={styles.airedContainer}>
          <BsBroadcast color="#dc2626" size={16} />
          <span className="small"><strong>{airedDate}</strong></span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Error: {(error as Error).message}</p>}
        {episodes && episodes.map((episode) => {
          return (
          <Card
            key={episode.mal_id}
            title={`Episode ${episode.mal_id}`}
            description={episode.title}
            image={image}
            wrapperClassName={styles.horizontalCard}
            footer={renderFooter(episode)}
          />
        )})}
      </div>
      {hasNextPage && <button onClick={handleSeeMore} className={styles.seeMore}>Ver mais</button>}
    </div>
  );
}

export default EpisodesGallery;