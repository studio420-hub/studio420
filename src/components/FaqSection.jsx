import React, { useState } from 'react';

const FAQS_DATA = [
  {
    q: 'What is Studio 420’s approach to AI Website Development?',
    a: 'We leverage AI-assisted tools to accelerate code generation, wireframing, and component prototyping, while keeping art direction, creative strategy, performance optimization, and rigorous QA under expert human direction. This gives clients bespoke digital experiences with faster turnarounds without sacrificing design integrity.',
  },
  {
    q: 'How do you develop comprehensive brand identities and packaging?',
    a: 'Our branding process begins with strategic positioning and core identity marks, expanding into custom color palettes, responsive typography systems, and print-ready packaging dielines. We ensure your brand looks as cohesive on a physical luxury retail shelf as it does on a smartphone screen.',
  },
  {
    q: 'What does your social media content system include?',
    a: 'We build modular social media systems designed for organic traction and visual memorability. Deliverables include master Figma template kits, 9:16 vertical motion frameworks, carousel layouts, and branded typographic presets that internal teams can easily produce at scale.',
  },
  {
    q: 'How do you design investor pitch decks that win funding?',
    a: 'We work closely with founders and leadership to distill complex technology, business models, and market data into a compelling visual narrative. Every slide is designed with clear visual hierarchy, custom financial charts, and typography that builds investor conviction.',
  },
  {
    q: 'What are typical project timelines and deliverables?',
    a: 'Dedicated brand identity or pitch deck sprints typically take 2–4 weeks. Complete multi-disciplinary projects (Branding + Packaging + AI Website Development) range from 6–10 weeks depending on scope, physical prototyping requirements, and digital functionality.',
  },
  {
    q: 'Can you integrate custom videos and showreels into this website?',
    a: 'Yes. The website architecture is explicitly engineered with dedicated modular video slots (such as data-video-slot="opening-hero-media" and data-video-slot="primary-showcase") ready for high-definition video files, WebM loops, or streaming embeds without requiring layout alterations.',
  },
];

/**
 * FAQ SECTION (NOTH Reference Recreation)
 * Massive spaced letters F A Q S and interactive typographic accordion.
 */
export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section section-black" aria-label="Frequently Asked Questions">
      <div className="container">
        {/* Giant Spaced Letters */}
        <div className="div-block-12" aria-hidden="true">
          <span className="faq-title-letter">F</span>
          <span className="faq-title-letter">A</span>
          <span className="faq-title-letter">Q</span>
          <span className="faq-title-letter">S</span>
        </div>

        <div className="faq-layout">
          <div>
            <div className="tag-label">( Inquiries & Process )</div>
          </div>

          <div className="faq-list">
            {FAQS_DATA.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="faq-item">
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span
                      className="faq-toggle-icon"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
