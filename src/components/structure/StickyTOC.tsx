import styles from './sticky-toc.module.css';

interface TOCItem {
    id: string;
    text: string;
}

interface StickyTOCProps {
    items: TOCItem[];
}

export default function StickyTOC({ items }: StickyTOCProps) {
    return (
        <nav className={styles.container}>
            <h4 className={styles.title}>On this page</h4>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={item.id} className={styles.item}>
                        <a
                            href={`#${item.id}`}
                            className={index === 0 ? styles.active : styles.link} // Mock active state for first item
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
