import PlaceholderBlock from '@/components/structure/PlaceholderBlock';

export default async function ResourceDetail({ params }: { params: Promise<{ slug: string }> }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { slug } = await params;

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '3rem 1rem' }}>
            <span style={{
                background: '#F0F0F0',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                Template
            </span>
            <h1 style={{ fontSize: '2rem', margin: '1rem 0 2rem' }}>Request for Proposal (RFP) Template</h1>

            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555' }}>
                This document provides a comprehensive list of questions to ask potential LMS vendors, covering security, features, and support.
            </p>

            <h3 style={{ marginBottom: '1rem' }}>About this resource</h3>
            <PlaceholderBlock type="Support" height="short" />

            <h3 style={{ marginBottom: '1rem' }}>Preview</h3>
            <PlaceholderBlock type="Support" height="medium" />

            <button style={{
                background: 'var(--color-accent)',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '4px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                marginTop: '1rem'
            }}>
                Download Template (.docx)
            </button>
        </div>
    );
}
