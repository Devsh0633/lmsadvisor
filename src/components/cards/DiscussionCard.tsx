import Link from 'next/link';
import styles from './discussion-card.module.css';

interface DiscussionCardProps {
    title: string;
    category: string;
    slug: string;
    authorInitials: string;
    replyCount: number;
    timeAgo: string;
}

export default function DiscussionCard({ title, category, slug, authorInitials, replyCount, timeAgo }: DiscussionCardProps) {
    return (
        <Link href={`/discussions/${slug}`} className={styles.card}>
            <div className={styles.header}>
                <div className={styles.avatar}>{authorInitials}</div>
                <span className={styles.category}>{category}</span>
                <span className={styles.timestamp}>{timeAgo}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.stats}>
                <span className={styles.statItem}>💬 {replyCount} replies</span>
            </div>
        </Link>
    );
}
