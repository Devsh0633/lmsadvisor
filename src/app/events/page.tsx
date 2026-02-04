import styles from './page.module.css';

export default function EventsHub() {
    return (
        <div className="container" style={{ padding: '3rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Upcoming Events & Webinars</h1>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.dateBox}>FEB 15 • 2:00 PM EST</div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>The State of LMS 2026: Trends Report</h3>
                        <p className={styles.info}>Live breakdown of our annual industry survey results with Chief Analyst Sarah Jenkins.</p>
                        <a href="#" className={styles.rsvp}>Save my spot</a>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.dateBox}>FEB 28 • 11:00 AM EST</div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>AMA: Migrating from Legacy Systems</h3>
                        <p className={styles.info}>Open Q&A with three enterprise LMS administrators who survived the switch.</p>
                        <a href="#" className={styles.rsvp}>Submit a question</a>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.dateBox}>MAR 10 • 1:00 PM EST</div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Demo Day: AI Features that Actually Work</h3>
                        <p className={styles.info}>Live walkthroughs of genuine AI capabilities from 5 top vendors.</p>
                        <a href="#" className={styles.rsvp}>Register Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
