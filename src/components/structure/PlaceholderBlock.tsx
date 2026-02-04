import styles from './placeholder-block.module.css';

interface PlaceholderBlockProps {
    type: 'Authority' | 'Discussion' | 'Support' | 'Monetization';
    height?: 'tall' | 'medium' | 'short';
}

export default function PlaceholderBlock({ type, height = 'medium' }: PlaceholderBlockProps) {
    let text = '';

    switch (type) {
        case 'Authority':
            text = '[Authority guide content section placeholder]';
            break;
        case 'Discussion':
            text = '[Community discussion content placeholder]';
            break;
        case 'Support':
            text = '[Support / glossary explanation placeholder]';
            break;
        case 'Monetization':
            text = '[Monetization / Comparison table placeholder]';
            break;
    }

    return (
        <div className={`${styles.block} ${styles[height]}`}>
            <span className={styles.text}>{text}</span>
        </div>
    );
}
