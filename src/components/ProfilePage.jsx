
import React, { useState } from 'react';
import FloatingMenu from './FloatingMenu';
import HeroSection from './HeroSection';
import ShowreelSection from './ShowreelSection';
import WorksSection from './WorksSection';
import ServicesSection from './ServicesSection';
import StudioSection from './StudioSection';
import GlitchSection from './GlitchSection';
import FooterSection from './FooterSection';
import ProjectModal from './ProjectModal';
import InquiryForm from './InquiryForm';

/**
 * PROFILE PAGE — STUDIO 420
 */
export default function ProfilePage({ isActive, onReturnToOpening }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  return (
    <main
      id="main-content"
      className={`profile-page ${isActive ? '' : 'is-inactive'}`}
      aria-label="Studio 420 Profile"
    >
      {/* Floating Pill Menu */}
      <FloatingMenu
        onReturnToOpening={onReturnToOpening}
        onBookDiscoveryCall={openInquiry}
      />

      {/* 01: Hero Section */}
      <HeroSection />

      {/* 02: Showreel / Statement Section */}
      <ShowreelSection />

      {/* 03: Selected Works Section */}
      <WorksSection onSelectProject={setSelectedProject} />

      {/* 04: Six Core Services Section */}
      <ServicesSection />

      {/* 05: Studio Installation & Editorial Manifesto */}
      <StudioSection />

      {/* 06: Glitch Typographic Engine & Capabilities */}
      <div id="about-us">
        <GlitchSection />
      </div>

      {/* 07: Inquiry Form Modal — hidden until requested */}
      {isInquiryOpen && (
        <div
          className="inquiry-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeInquiry();
            }
          }}
        >
          <div
            className="inquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-heading"
          >
            <button
              type="button"
              className="inquiry-close"
              onClick={closeInquiry}
              aria-label="Close inquiry form"
            >
              ×
            </button>

            <InquiryForm onClose={closeInquiry} />
          </div>
        </div>
      )}

      {/* 08: Footer & Colophon */}
      <FooterSection onBookDiscoveryCall={openInquiry} />

      {/* In-depth Project Case Study Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
