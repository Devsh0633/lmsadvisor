import Link from 'next/link';
import styles from './page.module.css';
import PlaceholderBlock from '@/components/structure/PlaceholderBlock';
import StickyTOC from '@/components/structure/StickyTOC';

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div className="container">
            <div className={styles.layout}>
                {/* Sticky TOC Column */}
                <div style={{ width: '220px', flexShrink: 0 }}>
                    <StickyTOC items={[
                        { id: 'strategy', text: '1. Defining Your Strategy' },
                        { id: 'requirements', text: '2. Gathering Requirements' },
                        { id: 'vendors', text: '3. Evaluating Vendors' },
                        { id: 'implementation', text: '4. Implementation Plan' },
                        { id: 'launch', text: '5. Launch & Adoption' }
                    ]} />
                </div>

                <article className={styles.mainContent}>
                    <div className={styles.header}>
                        <span className={styles.badge}>Implementation Guide</span>
                        <h1 className={styles.title}>Enterprise LMS Strategy: The Complete Framework</h1>
                        <div className={styles.meta}>
                            <span className={styles.author}>By LMS Advisors Editorial Team</span>
                            <span>Updated Dec 15, 2025</span>
                            <span>15 min read</span>
                        </div>
                    </div>

                    <div className={styles.contentBody}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                            Selecting a Learning Management System is one of the most high-stakes technology decisions an organization can make. This guide details the exact steps to ensure success.
                        </p>

                        {/* Content Placeholders */}
                        <h2 id="strategy">1. Defining Your Strategy</h2>
                        <PlaceholderBlock type="Authority" height="tall" />

                        <h2 id="requirements">2. Gathering Requirements</h2>
                        <PlaceholderBlock type="Authority" height="tall" />

                        <h2 id="vendors">3. Evaluating Vendors</h2>
                        <PlaceholderBlock type="Authority" height="medium" />

                        <h2 id="implementation">4. Implementation Plan</h2>
                        <PlaceholderBlock type="Authority" height="tall" />

                        <h2 id="launch">5. Launch & Adoption</h2>
                        <PlaceholderBlock type="Authority" height="medium" />
                    </div>
                </article>

                <aside className={styles.sidebar}>
                    <div className={`${styles.sidebarWidget} ${styles.sponsored}`}>
                        <h4 className={styles.widgetTitle}>Recommended LMS <span className={styles.sponsoredLabel}>Sponsored</span></h4>
                        {/* Mock Sponsored List */}
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <div style={{ width: 30, height: 30, background: '#eee', borderRadius: 4 }}></div>
                            <span style={{ fontWeight: 600 }}>SimplyTrain</span>
                        </div>
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <div style={{ width: 30, height: 30, background: '#eee', borderRadius: 4 }}></div>
                            <span style={{ fontWeight: 600 }}>LearnCorp Ultra</span>
                        </div>
                        <Link href="/compare" style={{ fontSize: '0.9rem', color: 'var(--color-primary)', textDecoration: 'underline' }}>View Top 10 Enterprise LMS</Link>
                    </div>

                    <div className={styles.sidebarWidget}>
                        <h4 className={styles.widgetTitle}>Related Discussions</h4>
                        <div>
                            <a href="#" className={styles.relatedLink}>Any experience with SimplyTrain for 5000+ users?</a>
                            <a href="#" className={styles.relatedLink}>Implementation timelines: Realistic or sales fluff?</a>
                        </div>
                    </div>

                    <div className={styles.sidebarWidget}>
                        <h4 className={styles.widgetTitle}>Tools</h4>
                        <a href="#" className={styles.relatedLink}>↓ Download RFP Template</a>
                        <a href="#" className={styles.relatedLink}>↓ ROI Calculator.xlsx</a>
                    </div>
                </aside>
            </div>
        </div>
    );
}
