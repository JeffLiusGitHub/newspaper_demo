import styles from "./ImageElement.module.css";
import classNames from "classnames/bind";
import { FigureCaption } from "./FigureCaption";
export const ImageElement = ({ url, alt, align, caption }) => {
  let cx = classNames.bind(styles);
  const wrapperClasses = cx("imageElement", { right: align === "right" });
  return (
    <div className={wrapperClasses}>
      <img src={url} alt={alt} />
      <FigureCaption caption={caption}></FigureCaption>
    </div>
  );
};
