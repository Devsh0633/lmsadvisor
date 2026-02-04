import Link from "next/link";
import styles from "./page.module.css";
import GuideCard from "@/components/cards/GuideCard";
import DiscussionCard from "@/components/cards/DiscussionCard";
import ResourceCard from "@/components/cards/ResourceCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Practical guidance for choosing, implementing,<br />and using Learning Management Systems.
          </h1>
          <p className={styles.heroSubtitle}>
            Independent guides, real discussions, and transparent comparisons for LMS decision-makers.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/guides" className={styles.primaryCta}>Explore Guides</Link>
            <Link href="/discussions" className={styles.secondaryCta}>Join the Discussion</Link>
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Guides</h2>
          <div className={styles.grid}>
            <GuideCard
              title="Enterprise LMS Implementation Strategy: A 90-Day Plan"
              description="A step-by-step framework for rolling out a new LMS across a complex organization without disrupting operations."
              slug="enterprise-implementation"
              updatedAt="Dec 2025"
              category="Implementation"
            />
            <GuideCard
              title="SCORM vs xAPI: Technical Decision Matrix"
              description="Understanding the trade-offs between legacy standards and modern tracking capabilities for your learning data."
              slug="scorm-vs-xapi"
              updatedAt="Jan 2026"
              category="Technical"
            />
            <GuideCard
              title="Calculuating ROI for Learning Technologies"
              description="How to build a financial case for your LMS investment using proven engagement metrics."
              slug="lms-roi-calculator"
              updatedAt="Nov 2025"
              category="Strategy"
            />
          </div>
        </div>
      </section>

      {/* Active Discussions Section */}
      <section className={styles.section} style={{ background: '#F8F9FA' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Active Discussions</h2>
          <div className={styles.discussionList}>
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
              title="Best authoring tool for heavy video content?"
              category="Integrations"
              slug="video-authoring-tools"
              authorInitials="AL"
              replyCount={12}
              timeAgo="3 days ago"
            />
          </div>
        </div>
      </section>

      {/* Resource Highlights Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Resource Highlights</h2>
          <div className={styles.grid}>
            <ResourceCard
              title="RFP Template for Enterprise LMS"
              type="Template"
              description="Standardized requirements document to send to vendors."
              slug="rfp-template"
            />
            <ResourceCard
              title="LMS Administrator Job Description"
              type="Template"
              description="Ready-to-use role definition for your hiring team."
              slug="admin-job-desc"
            />
            <ResourceCard
              title="LMS Glossary of Terms"
              type="Glossary"
              description="Definitions for LXP, LRS, SCORM, and other acronyms."
              slug="glossary"
            />
            <ResourceCard
              title="Migration Checklist"
              type="Checklist"
              description="ensure no data is lost during your platform switch."
              slug="migration-checklist"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
