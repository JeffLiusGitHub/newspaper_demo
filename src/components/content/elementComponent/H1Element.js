import styles from "./H1Element.module.css";
import classNames from "classnames/bind";
export const H1Element = ({ children }) => {
  let cx = classNames.bind(styles);
  const wrapperClasses = cx("h1Element");
  return <h1 className={wrapperClasses}>{children}</h1>;
};
