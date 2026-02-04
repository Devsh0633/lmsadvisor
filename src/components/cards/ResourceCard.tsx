import Link from 'next/link';
import styles from './resource-card.module.css';

interface ResourceCardProps {
    title: string;
    type: 'Template' | 'Checklist' | 'Glossary' | 'Tool';
    description: string;
    slug: string;
}

export default function ResourceCard({ title, type, description, slug }: ResourceCardProps) {
    return (
        <Link href={`/resources/${slug}`} className={styles.card}>
            <div className={styles.type}>{type}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.action}>Download / View →</div>
        </Link>
    );
}
