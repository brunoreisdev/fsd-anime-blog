"use client"
import logo from "@shared/assets/images/logo.png";
import styles from "./header.module.scss";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useAnimeStore } from "@entities/anime";

function Header() {
  const { fetchAnimes, filters } = useAnimeStore()

  const debounce = () => {
    let timeoutId: NodeJS.Timeout
    return (func: () => void, delay: number) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(), delay)
    }
  }
  
  const debouncedFetchAnimes = debounce()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFetchAnimes(() => fetchAnimes({ ...filters, search: e.target.value }), 1000)
  }




  return (
    <div className={styles.header}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} placeholder="Buscar" onChange={handleSearch} />
        <button className={styles.searchButton}>
          <FaSearch size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default Header;
