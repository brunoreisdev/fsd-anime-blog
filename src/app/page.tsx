import styles from "./page.module.css";
import { Header } from "@widgets/header";
import { AnimeCards } from "@entities/anime";
import mock from "./mocks.json";
import { Gallery } from "@features/gallery";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Gallery />
      </main>
    </div>
  );
}
