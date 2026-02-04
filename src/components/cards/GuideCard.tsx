import Link from 'next/link';
import styles from './guide-card.module.css';

interface GuideCardProps {
    title: string;
    description: string;
    slug: string;
    updatedAt: string;
    category: string;
}

export default function GuideCard({ title, description, slug, updatedAt, category }: GuideCardProps) {
    return (
        <Link href={`/guides/${slug}`} className={styles.card}>
            <div className={styles.badge}>{category}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.meta}>
                <span>Updated {updatedAt}</span>
                <span className={styles.readMore}>Read Guide →</span>
            </div>
        </Link>
    );
}
