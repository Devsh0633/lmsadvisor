import Link from 'next/link';
import styles from './compare-card.module.css';

interface CompareCardProps {
    title: string;
    items: string[]; // e.g. ["LMS A", "LMS B"]
    slug: string;
}

export default function CompareCard({ title, items, slug }: CompareCardProps) {
    return (
        <Link href={`/compare/${slug}`} className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>Head-to-head comparison</p>
            </div>

            <div className={styles.vsContainer}>
                {items[0]} <span className={styles.vs}>vs</span> {items[1]}
            </div>

            <div className={styles.cta}>View Comparison</div>

            <div className={styles.disclosure}>
                Independent analysis. We may earn from links.
            </div>
        </Link>
    );
}
