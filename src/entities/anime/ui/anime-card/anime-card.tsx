import styles from "./anime-card.module.scss";
import { RatingBadge } from "@shared/ui/rating-badge";
import { Chip } from "@shared/ui/chip";
import Card from "@shared/ui/card/card";

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
  score: number;
  onClick: () => void;
}

function AnimeCards({
  title,
  description,
  image,
  episodes,
  rating,
  genres,
  score,
  onClick
}: CardProps) {
  const renderGenres = () => {
    return genres.map((genre) => (
      <Chip key={genre.mal_id} label={genre.name} />
    ));
  };

  const metadata = (
    <div className={styles.cardInfoContainer}>
      <div className={styles.cardInfo}>
        <small className="small">Eps: {episodes}</small>
        <div className={styles.divisor}>•</div>
        <small className="small">Score: {score}</small>
      </div>
      <RatingBadge ratingString={rating} />
    </div>
  );

  const footer = (
    <div className={styles.genresContainer}>{renderGenres()}</div>
  );

  return (
    <Card
      title={title}
      description={description}
      image={image}
      metadata={metadata}
      footer={footer}
      onClick={onClick}
    />
  );
}

export default AnimeCards;
