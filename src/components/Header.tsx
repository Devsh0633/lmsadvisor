import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                LMS Advisors
            </Link>

            <nav className={styles.nav}>
                <Link href="/guides" className={styles.navLink}>Guides</Link>
                <Link href="/compare" className={styles.navLink}>Compare LMS</Link>
                <Link href="/discussions" className={styles.navLink}>Discussions</Link>
                <Link href="/resources" className={styles.navLink}>Resources</Link>
                <Link href="/events" className={styles.navLink}>Events</Link>
            </nav>

            <div className={styles.searchContainer}>
                <span className={styles.searchPlaceholder}>
                    Search guides, discussions, and resources...
                </span>
            </div>

            <div className={styles.auth}>
                Login / Join
            </div>
        </header>
    );
}
