import styles from './TopBanner.module.css';

export default function TopBanner() {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        <strong>Important Notice:</strong> JET 2026 Applications are now live. <a href="/admissions" className={styles.link}>Apply today.</a>
      </p>
    </div>
  );
}
