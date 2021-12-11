import styles from "./FigureCaption.module.css";

export const FigureCaption = (caption) => {

  return <div className = {styles.figureCaption}>{caption.caption}</div>;
};
