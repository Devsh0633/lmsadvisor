import styles from './page.module.css';
import GuideCard from '@/components/cards/GuideCard';

export default function GuidesHub() {
    return (
        <div className="container">
            <div className={styles.intro}>
                <h1 className={styles.title}>LMS Implementation & Strategy Guides</h1>
                <p className={styles.subtitle}>
                    In-depth, editorially reviewed guides to help you navigate the complexities of learning technology.
                </p>
            </div>

            <div className={styles.filterBar}>
                <span className={styles.activeFilter}>All Guides</span>
                <span className={styles.filter}>Strategy</span>
                <span className={styles.filter}>Implementation</span>
                <span className={styles.filter}>Technical</span>
                <span className={styles.filter}>Compliance</span>
            </div>

            <div className={styles.grid}>
                <GuideCard
                    title="Enterprise LMS Implementation Strategy: A 90-Day Plan"
                    description="A step-by-step framework for rolling out a new LMS across a complex organization."
                    slug="enterprise-implementation"
                    updatedAt="Dec 2025"
                    category="Implementation"
                />
                <GuideCard
                    title="SCORM vs xAPI: Technical Decision Matrix"
                    description="Understanding tracking standards."
                    slug="scorm-vs-xapi"
                    updatedAt="Jan 2026"
                    category="Technical"
                />
                <GuideCard
                    title="Designing an Effective Onboarding Path"
                    description="Best practices for new hire training flows."
                    slug="onboarding-design"
                    updatedAt="Oct 2025"
                    category="Strategy"
                />
                <GuideCard
                    title="LMS Accessibility Checklist (WCAG 2.1)"
                    description="Ensuring your learning content is compliant for all users."
                    slug="accessibility-checklist"
                    updatedAt="Sep 2025"
                    category="Compliance"
                />
                <GuideCard
                    title="Gamification: Beyond Points and Badges"
                    description="Real engagement strategies that drive learning outcomes."
                    slug="gamification-strategy"
                    updatedAt="Nov 2025"
                    category="Strategy"
                />
                <GuideCard
                    title="Data Migration Handbook"
                    description="Moving from legacy systems without losing historic records."
                    slug="data-migration"
                    updatedAt="Dec 2025"
                    category="Technical"
                />
            </div>
        </div>
    );
}
