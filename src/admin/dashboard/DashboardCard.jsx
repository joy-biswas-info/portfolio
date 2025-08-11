import { motion } from "framer-motion";
import styles from "./dashboard.module.css";

const DashboardCard = ({ title, value }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </motion.div>
  );
};

export default DashboardCard;
