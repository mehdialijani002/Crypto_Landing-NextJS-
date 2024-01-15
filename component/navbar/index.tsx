import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/styles.module.css";
import { FaBtc, FaHome, FaUserFriends, FaInfo, FaList } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <FaBtc />
          </div>
        </Link>
        <div className={styles.navItemsWrapper}>
          <ul
            className={
              isOpen ? `${styles.navItems} ${styles.active}` : styles.navItems
            }
          >
            <li>
              <Link className="btn " href="/" passHref>
                <div className={styles.navLink}>
                  <FaHome /> <span className="">خانه</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className="btn " href="/about" passHref>
                <div className={styles.navLink}>
                  <FaUserFriends />
                  <span className=""> درباره ما </span>
                </div>
              </Link>
            </li>
            <li>
              <Link className="btn " href="/table-data" passHref>
                <div className={styles.navLink}>
                  <FaList />
                  <span className=""> CRUD </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div
            className={isOpen ? `${styles.bar} ${styles.animate}` : styles.bar}
          ></div>
          <div
            className={isOpen ? `${styles.bar} ${styles.animate}` : styles.bar}
          ></div>
          <div
            className={isOpen ? `${styles.bar} ${styles.animate}` : styles.bar}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
