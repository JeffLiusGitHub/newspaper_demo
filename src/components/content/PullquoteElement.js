import styles from './PullquoteElement.module.css'
export const PullquoteElement = ({ type, content, children }) => {
    return (
      <pullquote className = {styles.pullquote}>
        {children}
      </pullquote>
    );
  };
  