import Image from "next/image";
import styles from "./card.module.scss";

interface CardProps {
  title: string;
  description: string;
  image: string;
  metadata?: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
  wrapperClassName?: string;
}

function Card({
  title,
  description,
  image,
  metadata,
  footer,
  onClick,
  wrapperClassName
}: CardProps) {

  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`} onClick={onClick || undefined}>
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
        {metadata && <div className={styles.metadataContainer}>
          {metadata}
        </div>}
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        {footer}
      </div>
    </div>
  );
}

export default Card;
