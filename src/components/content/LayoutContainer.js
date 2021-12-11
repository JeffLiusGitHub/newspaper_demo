import styles from './MediaQueryContainer.module.css'
export const MediaQueryContainer = ({children}) => {
    return (
      <div className={styles.layout}>
        {children}
      </div>
    );
  };
  