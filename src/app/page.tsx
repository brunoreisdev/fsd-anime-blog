import styles from "./page.module.css";
import { Gallery } from "@features/gallery";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Gallery title="Animes" />
      </main>
    </div>
  );
}