import styles from "./KeyPointsElement.module.css";
export const KeyPointsElement = ({ type, content, children }) => {
  return (
    <keyPoint className={styles.keyPoint}>
      <ul>
        <li>
          <span>a</span>
        </li>
        <li>
          <span>b</span>
        </li>
      </ul>
      {children}
    </keyPoint>
  );
};
