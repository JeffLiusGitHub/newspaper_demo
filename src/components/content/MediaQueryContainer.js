import styles from "./MediaQueryContainer.module.css";

export const MediaQueryContainer = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};
