import Image from "next/image";
import styles from "./anime-card.module.scss";
import { RatingBadge } from "@shared/ui/rating-badge";
import { Chip } from "@shared/ui/chip";

interface Genre {
  mal_id: number;
  name: string;
}

interface CardProps {
  title: string;
  description: string;
  image: string;
  episodes: number;
  rating: string;
  genres: Array<Genre>;
  onClick: () => void;
}

function AnimeCards({
  title,
  description,
  image,
  episodes,
  rating,
  genres,
  onClick
}: CardProps) {
  const renderGenres = () => {
    return genres.map((genre) => (
      <Chip key={genre.mal_id} label={genre.name} />
    ));
  };

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.cardHeader}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          width={196}
          height={100}
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardInfoContainer}>
          <div className={styles.cardInfo}>
            <small className="small">Eps: {episodes}</small>
            <div className={styles.divisor}>•</div>
            <small className="small">Popularity: 42</small>
          </div>
          <RatingBadge ratingString={rating} />
        </div>
        <h3>{title}</h3>
        <p className={styles.synopsis}>{description}</p>
        <div className={styles.genresContainer}>{renderGenres()}</div>
      </div>
    </div>
  );
}

export default AnimeCards;
