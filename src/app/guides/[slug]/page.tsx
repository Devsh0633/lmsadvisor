import Link from 'next/link';
import styles from './page.module.css';
import PlaceholderBlock from '@/components/structure/PlaceholderBlock';
import StickyTOC from '@/components/structure/StickyTOC';
import { enterpriseGuide } from '@/data/guides';

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Logic to determine content source
    const isRealContent = slug === enterpriseGuide.slug;
    const data = isRealContent ? enterpriseGuide : {
        title: "Enterprise LMS Strategy: The Complete Framework",
        author: "Editorial Team",
        updatedAt: "Dec 15, 2025",
        lastUpdated: "Dec 15, 2025", // Fallback for types
        // Default mock data for non-matching slugs
        category: "Implementation"
    };

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
                        <span className={styles.badge}>{isRealContent ? data.category : 'Implementation Guide'}</span>
                        <h1 className={styles.title}>{data.title}</h1>
                        <div className={styles.meta}>
                            <span className={styles.author}>By {data.author}</span>
                            <span>Updated {isRealContent ? data.lastUpdated : 'Dec 15, 2025'}</span>
                            <span>{isRealContent ? '12 min read' : '15 min read'}</span>
                        </div>
                    </div>

                    <div className={styles.contentBody}>
                        {isRealContent ? (
                            // REAL CONTENT RENDERING
                            <div dangerouslySetInnerHTML={{ __html: enterpriseGuide.content }} />
                        ) : (
                            // PLACEHOLDER RENDERING
                            <>
                                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                                    Selecting a Learning Management System is one of the most high-stakes technology decisions an organization can make. This guide details the exact steps to ensure success.
                                </p>

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
                            </>
                        )}
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
                            {isRealContent && enterpriseGuide.relatedDiscussions ? (
                                enterpriseGuide.relatedDiscussions.map((d, i) => (
                                    <a key={i} href="#" className={styles.relatedLink}>{d}</a>
                                ))
                            ) : (
                                <>
                                    <a href="#" className={styles.relatedLink}>Any experience with SimplyTrain for 5000+ users?</a>
                                    <a href="#" className={styles.relatedLink}>Implementation timelines: Realistic or sales fluff?</a>
                                </>
                            )}
                        </div>
                    </div>

                    <div className={styles.sidebarWidget}>
                        <h4 className={styles.widgetTitle}>Tools</h4>
                        {isRealContent && enterpriseGuide.premiumAsset ? (
                            <a href="#" className={styles.relatedLink}>↓ {enterpriseGuide.premiumAsset}</a>
                        ) : null}
                        <a href="#" className={styles.relatedLink}>↓ Download RFP Template</a>
                        <a href="#" className={styles.relatedLink}>↓ ROI Calculator.xlsx</a>
                    </div>
                </aside>
            </div>
        </div>
    );
}
