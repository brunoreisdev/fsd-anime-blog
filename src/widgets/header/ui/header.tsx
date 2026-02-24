import logo from "@shared/assets/images/logo.png";
import styles from "./header.module.scss";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.header}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} placeholder="Buscar" />
        <button className={styles.searchButton}>
          <FaSearch size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default Header;
