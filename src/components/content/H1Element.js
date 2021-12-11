import styles from './H1Element.module.css'
import classNames from 'classnames/bind';
export const H1Element = ({ type, content, children }) => {
  let cx = classNames.bind(styles)
  const wrapperClasses = cx("h1Element")
    return (
      <h1
      //  className ={styles.h1Element}
       className ={wrapperClasses}
       >
        {children}
      </h1>
    );
  };
  