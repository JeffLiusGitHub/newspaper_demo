import styles from "./KeyPointsElement.module.css";
export const KeyPointsElement = ({ synopsis }) => {
  let keyPoints = synopsis?.split("\n");
  keyPoints?.shift();
  const keyPointContent = keyPoints?.map((keyPoint, key) => (
    <li key={key}>
      <span></span>
      {keyPoint}
    </li>
  ));

  return (
    <div className={styles.keyPoint}>
      <h1 className={styles.label}>key Points:</h1>
      <ul>{keyPointContent}</ul>
    </div>
  );
};
