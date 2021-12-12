import styles from "./PElement.module.css";
export const PElement = ({ children }) => {
  return <p className={styles.p}>{children}</p>;
};
