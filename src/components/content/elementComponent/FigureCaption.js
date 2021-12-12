import styles from "./FigureCaption.module.css";
export const FigureCaption = (caption) => {
  return <p className={styles.figureCaption}>{caption.caption}</p>;
};
