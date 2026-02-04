import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3>LMS Advisors</h3>
                    <ul>
                        <li><Link href="/" className={styles.link}>About Us</Link></li>
                        <li><Link href="/" className={styles.link}>Editorial Policy</Link></li>
                        <li><Link href="/" className={styles.link}>Careers</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Community</h3>
                    <ul>
                        <li><Link href="/discussions" className={styles.link}>Discussions</Link></li>
                        <li><Link href="/events" className={styles.link}>Events</Link></li>
                        <li><Link href="/" className={styles.link}>Code of Conduct</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Legal</h3>
                    <ul>
                        <li><Link href="/" className={styles.link}>Privacy Policy</Link></li>
                        <li><Link href="/" className={styles.link}>Terms of Use</Link></li>
                        <li><Link href="/" className={styles.link}>Sponsorship & Disclosure</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Connect</h3>
                    <ul>
                        <li><Link href="/" className={styles.link}>Twitter</Link></li>
                        <li><Link href="/" className={styles.link}>LinkedIn</Link></li>
                        <li><Link href="/" className={styles.link}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                © {new Date().getFullYear()} LMS Advisors. All rights reserved. A structural demo.
            </div>
        </footer>
    );
}
