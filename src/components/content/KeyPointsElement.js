import styles from "./KeyPointsElement.module.css";
export const KeyPointsElement = ({ synopsis }) => {
  console.log("this is ", { synopsis });

  let keyPoints = synopsis?.split("\n");
  keyPoints?.shift();
  console.log(keyPoints);
  const keyPointContent = keyPoints?.map((keyPoint, key) => (
    <>
      <li key={key}>
        <span key={key}></span>
        {keyPoint}
      </li>
    </>
  ));
  
  return (
    <div className={styles.layout}>
      <div className={styles.keyPoint}>
        <ul>
          <h1 className={styles.label}>key Points:</h1>
          {keyPointContent}
        </ul>
      </div>
    </div>
  );

};
