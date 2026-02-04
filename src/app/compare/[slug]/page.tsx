import styles from './page.module.css';
import PlaceholderBlock from '@/components/structure/PlaceholderBlock';

export default async function CompareDetail({ params }: { params: Promise<{ slug: string }> }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { slug } = await params;

    return (
        <div className="container">
            <div className={styles.header}>
                <h1 className={styles.title}>Docebo vs Cornerstone</h1>
                <p>Which enterprise LMS is right for your scale?</p>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Feature / Metric</th>
                            <th>
                                <span className={styles.colHeader}>Docebo</span>
                                <div className={styles.rating}>4.6/5</div>
                                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>Best for User Experience</div>
                            </th>
                            <th>
                                <span className={styles.colHeader}>Cornerstone</span>
                                {/* <span className={styles.sponsoredBadge}>Sponsored</span> */}
                                <div className={styles.rating}>4.3/5</div>
                                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>Best for Talent Management</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Pricing Model</th>
                            <td>Active User model. Starting at ~$25k/yr.</td>
                            <td>Quote-based. Typical enterprise contracts start at $50k+.</td>
                        </tr>
                        <tr>
                            <th>Core strengths</th>
                            <td>
                                <ul className={styles.featureList}>
                                    <li>✅ AI-powered suggestions</li>
                                    <li>✅ Modern, Netflix-style UI</li>
                                    <li>✅ Speed of deployment</li>
                                </ul>
                            </td>
                            <td>
                                <ul className={styles.featureList}>
                                    <li>✅ Deep Talent integration</li>
                                    <li>✅ Performance Management</li>
                                    <li>✅ Compliance robustness</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Best suited for</th>
                            <td>Mid-to-large enterprises focused on learning culture and adoption.</td>
                            <td>Global corporations needing unified HR and Learning suites.</td>
                        </tr>
                        <tr>
                            <th>Visit Website</th>
                            <td><a href="#" className={styles.ctaButton}>Visit Docebo</a></td>
                            <td><a href="#" className={styles.ctaButton}>Visit Cornerstone</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Editorial Verdict</h3>
            <PlaceholderBlock type="Monetization" height="medium" />

            <h3>Detailed Feature Breakdown</h3>
            <PlaceholderBlock type="Monetization" height="tall" />
        </div>
    );
}
