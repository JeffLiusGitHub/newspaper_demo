import styles from './H1Element.module.css'
export const H1Element = ({ type, content, children }) => {
    return (
      <h1 className ={styles.h1}>
        {children}
      </h1>
    );
  };
  