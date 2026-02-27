import styles from "./page.module.css";
import { Header } from "@widgets/header";
import { Gallery } from "@features/gallery";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Gallery title="Animes" />
      </main>
    </div>
  );
}
