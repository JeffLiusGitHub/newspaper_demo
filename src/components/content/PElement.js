import styles from './PElement.module.css'
export const PElement = ({ type, content, children }) => {
    return (
      <p className={styles.p}>
        {children}
      </p>
    );
  };
  