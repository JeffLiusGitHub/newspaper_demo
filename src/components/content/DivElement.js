import styles from './DivElement.module.css'
export const DivElement = ({ type, content, children }) => {
    return (
      <div className={styles.div}>
        {children}
      </div>
    );
  };
  