import styles from "./Share.module.css";
const Share = ({ url }) => {
  const onShareChick = () => {
    alert("Article has been shared!");
  };
  // const onCopyChick =()=>{
  //   // url.select()
  //   document.execCommand('copy');
  //   alert("Article has been shared!");
  // }
  return (
    <>
      <div className={styles.shareElement}>
        <div className={styles.title}>
          Help keep family & friends informed by sharing this article
        </div>
        <div className={styles.layout}>
          <div className={styles.link}>{url}</div>

          <button className={styles.shareButton} onClick={onShareChick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="3em"
              height="1em"
              data-component="ShareWeb"
              class="_1_xkG _35hyT"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M15 13s-9-1-12.998 7c0 0 0-13 12.998-13V3l7 7-7 7v-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            SHARE
          </button>
        </div>
      </div>
    </>
  );
};
export default Share;
