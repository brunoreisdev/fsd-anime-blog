"use client"
import logo from "@shared/assets/images/logo.png";
import styles from "./header.module.scss";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useAnimeStore } from "@entities/anime";
import { useEffect, useState } from "react";
import { useDebounce } from "@shared/hooks/use-debounce";

function Header() {
  const { filters, setFilters } = useAnimeStore()
  const [search, setSearch] = useState(filters.search)
  const debouncedSearch = useDebounce(search, 500)
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFilters({ ...filters, search: debouncedSearch });
  }, [debouncedSearch]);
  
  return (
    <div className={styles.header}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} value={search} placeholder="Buscar" onChange={handleSearch} />
        <button className={styles.searchButton}>
          <FaSearch size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default Header;
