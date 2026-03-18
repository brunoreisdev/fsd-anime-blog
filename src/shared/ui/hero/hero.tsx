import { GrSatellite } from "react-icons/gr";
import styles from "./hero.module.scss";
import Image from "next/image";
import { BsBroadcast } from "react-icons/bs";

function Hero({imageUrl, alt, title, release, status}: {imageUrl: string, alt: string, title: string, release: string, status: string}) {

  const releaseDate = new Date(release).toLocaleDateString(
    'en-US',
    {year: 'numeric', month: 'short', day: 'numeric'}
  )

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image src={imageUrl} alt={alt} fill/>
      </div>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt={alt} width={198} height={280}/>
        </div>
        <div className={styles.info}>
          <h2>{title}</h2>
          <div className={styles.airedInformationWrapper}>
            <BsBroadcast size={24} />
            <div className={styles.airedInformation}>
              <small className="small">Status: <strong>{status}</strong></small>
              <small className="small">Release Date: <strong>{releaseDate}</strong></small>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>watch trailer</button>
            <button className={styles.buttonTransparent}>add to favorites</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;