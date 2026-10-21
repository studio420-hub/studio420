import React, { useEffect } from 'react';

/**
 * PROJECT SPECIMEN MODAL / DRAWER
 * In-depth case study inspection drawer for Studio 420 concept works.
 */
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
    >
      <div
        className="project-modal-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Project Modal"
        >
          Close [Esc]
        </button>

        <div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span className="concept-pill">{project.badge || 'Concept Project'}</span>
            <span style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span className="tag-label">{project.category}</span>
            <span style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
              {project.year}
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#ffffff',
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--color-crimson)',
              marginTop: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Specimen Visual */}
        <div
          style={{
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            aspectRatio: '16/9',
            backgroundColor: '#000000',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Project Description */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}
          >
            Strategic Concept & Execution
          </h4>
          <p
            style={{
              fontSize: '0.98rem',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Specifications Grid */}
        <div
          style={{
            background: 'var(--color-canvas)',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            padding: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
          }}
        >
          <div
            style={{
              color: 'var(--color-crimson)',
              fontWeight: 600,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            // Project Specifications & Deliverables
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            {Object.entries(project.specs).map(([key, value]) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #1a1a1a',
                  paddingBottom: '0.5rem',
                  gap: '1rem',
                }}
              >
                <span style={{ color: 'var(--color-text-secondary)', textTransform: 'capitalize', flexShrink: 0 }}>
                  {key}
                </span>
                <span style={{ color: '#ffffff', textAlign: 'right' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action CTA */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
          <a
            href={`mailto:contact@studio420.design?subject=Commission%20Inquiry:%20Inspired%20by%20${encodeURIComponent(project.title)}`}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Commission a Similar Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}
