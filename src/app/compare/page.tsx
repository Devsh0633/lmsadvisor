import styles from './page.module.css';
import CompareCard from '@/components/cards/CompareCard';

export default function CompareHub() {
    return (
        <div className="container">
            <div className={styles.intro}>
                <h1 className={styles.title}>Compare Learning Management Systems</h1>
                <p className={styles.subtitle}>
                    Unbiased, side-by-side comparisons of the top platforms in the market. We break down features, pricing, and hidden limitations.
                </p>
                <div className={styles.disclaimer}>
                    Disclosure: We may receive compensation when you click on links to reviewed products. This does not influence our editorial rankings.
                </div>
            </div>

            <div className={styles.grid}>
                <CompareCard
                    title="Enterprise Contenders"
                    items={["Docebo", "Cornerstone"]}
                    slug="docebo-vs-cornerstone"
                />
                <CompareCard
                    title="Mid-Market Favorites"
                    items={["Absorb LMS", "TalentLMS"]}
                    slug="absorb-vs-talentlms"
                />
                <CompareCard
                    title="Academic vs Corporate"
                    items={["Canvas", "Workday Learning"]}
                    slug="canvas-vs-workday"
                />
                <CompareCard
                    title="Best for External Training"
                    items={["Thinkific", "LearnWorlds"]}
                    slug="thinkific-vs-learnworlds"
                />
                <CompareCard
                    title="Employee Experience (LXP)"
                    items={["Degreed", "EdCast"]}
                    slug="degreed-vs-edcast"
                />
                <CompareCard
                    title="Open Source Showdown"
                    items={["Moodle", "Totara"]}
                    slug="moodle-vs-totara"
                />
            </div>
        </div>
    );
}
