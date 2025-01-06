import styles from './LoadingSpinner.module.scss';

function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <div className={styles.message}>Uploading...</div>
    </div>
  );
}

export default LoadingSpinner;
