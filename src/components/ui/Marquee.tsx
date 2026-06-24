"use client";

import styles from './Marquee.module.css';

export default function Marquee({ items }: { items: string[] }) {
  // Duplicate the list so the track can loop seamlessly.
  const track = [...items, ...items];
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {track.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
