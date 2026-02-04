import styles from './page.module.css';
import ResourceCard from '@/components/cards/ResourceCard';

export default function ResourcesHub() {
    return (
        <div className="container">
            <div className={styles.intro}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Support Resources</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>Templates, checklists, and glossaries to support your daily operations.</p>
            </div>

            <h2 className={styles.sectionTitle}>Templates & Tools</h2>
            <div className={styles.grid}>
                <ResourceCard
                    title="RFP Template for Enterprise LMS"
                    type="Template"
                    description="Standardized requirements."
                    slug="rfp-template"
                />
                <ResourceCard
                    title="LMS Administrator Job Description"
                    type="Template"
                    description="Role definition."
                    slug="admin-job-desc"
                />
                <ResourceCard
                    title="Cost Calculator"
                    type="Tool"
                    description="Estimate TCO."
                    slug="cost-calculator"
                />
            </div>

            <h2 className={styles.sectionTitle}>Knowledge Base</h2>
            <div className={styles.grid}>
                <ResourceCard
                    title="LMS Glossary of Terms"
                    type="Glossary"
                    description="Definitions (LXP, LRS...)."
                    slug="glossary"
                />
                <ResourceCard
                    title="Migration Checklist"
                    type="Checklist"
                    description="Data safety steps."
                    slug="migration-checklist"
                />
                <ResourceCard
                    title="Accessibility Standards"
                    type="Checklist"
                    description="WCAG 2.1 quick reference."
                    slug="accessibility"
                />
            </div>
        </div>
    );
}
