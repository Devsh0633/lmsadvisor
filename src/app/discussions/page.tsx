import styles from './page.module.css';
import DiscussionCard from '@/components/cards/DiscussionCard';

export default function DiscussionsHub() {
    const categories = [
        { title: "Choosing an LMS", count: 124 },
        { title: "Implementation", count: 89 },
        { title: "Pricing & Contracts", count: 56 },
        { title: "Integrations", count: 42 },
        { title: "Adoption & Training", count: 77 },
        { title: "Careers", count: 31 },
    ];

    return (
        <div className="container" style={{ padding: '3rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Community Discussions</h1>

            {/* Category Grid */}
            <div className={styles.categories}>
                {categories.map((cat) => (
                    <div key={cat.title} className={styles.categoryCard}>
                        <div className={styles.categoryTitle}>{cat.title}</div>
                        <div className={styles.categoryMeta}>{cat.count} threads</div>
                    </div>
                ))}
            </div>

            <div className={styles.feedHeader}>
                <h2 className={styles.feedTitle}>Latest Activity</h2>
                <button className={styles.newButton}>Start a Discussion</button>
            </div>

            <div style={{ maxWidth: '800px' }}>
                <DiscussionCard
                    title="Anyone migrated from Moodle to Canvas recently?"
                    category="Choosing an LMS"
                    slug="moodle-to-canvas"
                    authorInitials="JS"
                    replyCount={34}
                    timeAgo="2 hours ago"
                />
                <DiscussionCard
                    title="Hidden costs in Docebo contracts - watch out for average active users"
                    category="Pricing & Contracts"
                    slug="docebo-hidden-costs"
                    authorInitials="MK"
                    replyCount={89}
                    timeAgo="Yesterday"
                />
                <DiscussionCard
                    title="SCORM 1.2 vs 2004 4th Edition - which one for Workday?"
                    category="Integrations"
                    slug="scorm-workday"
                    authorInitials="DR"
                    replyCount={5}
                    timeAgo="Yesterday"
                />
                <DiscussionCard
                    title="Employee engagement dropping after 3 months"
                    category="Adoption"
                    slug="engagement-drop"
                    authorInitials="SL"
                    replyCount={18}
                    timeAgo="2 days ago"
                />
            </div>
        </div>
    );
}
