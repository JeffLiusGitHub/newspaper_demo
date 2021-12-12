import styles from "./PullquoteElement.module.css";
export const PullquoteElement = ({ children }) => {
  return (
    <blockquote>
      <div className={styles.pullquote}>{children}</div>
    </blockquote>
  );
};
