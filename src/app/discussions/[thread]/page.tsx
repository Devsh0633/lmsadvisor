import styles from './page.module.css';
import PlaceholderBlock from '@/components/structure/PlaceholderBlock';

export default async function DiscussionThread({ params }: { params: Promise<{ thread: string }> }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { thread } = await params;

    return (
        <div className="container">
            <div className={styles.threadContainer}>
                <div className={styles.threadHeader}>
                    <span className={styles.categoryBadge}>Choosing an LMS</span>
                    <h1 className={styles.threadTitle}>Anyone migrated from Moodle to Canvas recently?</h1>
                    <div className={styles.meta}>
                        <div className={styles.avatar}>JS</div>
                        <span>Posted by John_Smith82</span>
                        <span>•</span>
                        <span>2 hours ago</span>
                    </div>
                </div>

                <div className={styles.originalPost}>
                    <PlaceholderBlock type="Discussion" height="medium" />
                </div>

                <h3 className={styles.repliesHeader}>34 Replies</h3>

                {/* Mock Replies */}
                <div className={styles.reply}>
                    <div className={styles.avatar}>MK</div>
                    <div className={styles.replyContent}>
                        <div className={styles.replyMeta}>Mary_Keys • 1 hour ago</div>
                        <PlaceholderBlock type="Discussion" height="short" />
                    </div>
                </div>

                <div className={styles.reply} style={{ marginLeft: '3rem' }}>
                    <div className={styles.avatar}>OP</div>
                    <div className={styles.replyContent}>
                        <div className={styles.replyMeta}>Official_Rep • 45 mins ago</div>
                        <PlaceholderBlock type="Discussion" height="short" />
                    </div>
                </div>

                <div className={styles.reply}>
                    <div className={styles.avatar}>AL</div>
                    <div className={styles.replyContent}>
                        <div className={styles.replyMeta}>Alex_LMS_Admin • 30 mins ago</div>
                        <PlaceholderBlock type="Discussion" height="short" />
                    </div>
                </div>

            </div>
        </div>
    );
}
