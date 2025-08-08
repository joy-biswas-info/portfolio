import styles from "./dashboard.module.css";

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <h1 className={styles.h1}>Welcome, Joy 👋</h1>
      <input className={styles.search} type="text" placeholder="Search..." />
    </header>
  );
};

export default Topbar;
