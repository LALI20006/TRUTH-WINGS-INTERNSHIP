"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { UserPlus, FileText, ClipboardCheck, GraduationCap, ChevronDown, ChevronUp, Award, Trophy, HeartHandshake, Check, Globe } from 'lucide-react';

export default function Admissions() {
  const [openElig, setOpenElig] = useState<number | null>(0);
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const steps = [
    { icon: UserPlus, title: 'Register Online', desc: 'Fill out the application form on the official admissions portal.' },
    { icon: FileText, title: 'Submit Documents', desc: 'Upload academic transcripts, ID, and supporting documents.' },
    { icon: ClipboardCheck, title: 'Entrance Test / Interview', desc: 'Appear for JET or submit a national score (CUET/JEE/CAT/LSAT).' },
    { icon: GraduationCap, title: 'Offer & Enrollment', desc: 'Receive your offer letter, pay fees, and join the JAIN family.' },
  ];

  const eligibility = [
    { cat: 'UG Programs', req: '10+2 from a recognized board with a minimum of 50% (program-specific requirements may apply).' },
    { cat: 'PG Programs', req: "Bachelor's degree with a minimum of 50% in the relevant discipline." },
    { cat: 'Doctoral Programs', req: "Master's degree with a minimum of 55% plus a Ph.D entrance test and interview." },
    { cat: 'Law Programs', req: 'As per BCI guidelines — LSAT-India / CLAT / JET-Law.' },
    { cat: 'Design Programs', req: '10+2 plus JET-Design (Portfolio review and Interview).' },
  ];

  const dates = [
    { event: 'Application Opens', date: 'November 2025' },
    { event: 'JET Phase 1', date: 'February 2026' },
    { event: 'JET Phase 2', date: 'April 2026' },
    { event: 'Final Merit List', date: 'June 2026' },
    { event: 'Classes Begin', date: 'August 2026' },
  ];

  const scholarships = [
    { icon: Award, title: 'Merit Scholarship', desc: 'Up to 100% tuition waiver for top scorers.' },
    { icon: Trophy, title: 'Sports Scholarship', desc: 'For national and state-level athletes.' },
    { icon: HeartHandshake, title: 'Need-based Aid', desc: 'Financial support for deserving students.' },
  ];

  const documents = [
    '10th & 12th mark sheets',
    "Bachelor's degree (for PG applicants)",
    'Transfer & Migration certificates',
    'Government-issued ID proof',
    'Passport-size photographs',
    'Entrance test scorecard (if applicable)',
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{
        textAlign: 'center', padding: '10rem 0 6rem',
        background: 'linear-gradient(rgba(26,26,26,0.72), rgba(26,26,26,0.82)), url("/images/building-courtyard.png") no-repeat center/cover',
        color: 'white',
      }}>
        <motion.h1 className="heading-lg" initial="hidden" animate="visible" variants={fadeUp}>Begin Your Journey at JAIN University</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} style={{ color: '#ccc', marginTop: '1rem' }}>
          Admissions 2026–27 are now open across all programs.
        </motion.p>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} style={{ marginTop: '2rem' }}>
          <Link href="/contact" className="btn-primary">Apply Online Now</Link>
        </motion.div>
      </section>

      {/* Admission Process */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">A Simple 4-Step Admission Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {steps.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                style={{ position: 'relative', textAlign: 'center', padding: '2.5rem 1.5rem', background: 'var(--ivory)', borderRadius: '10px' }}>
                <span style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(184,35,47,0.12)' }}>{i + 1}</span>
                <s.icon size={40} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.5 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Important Dates */}
      <section className="section section-bg-ivory">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          {/* Eligibility accordion */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Eligibility Criteria</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {eligibility.map((e, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <button onClick={() => setOpenElig(openElig === i ? null : i)}
                    style={{ width: '100%', padding: '1.1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', fontWeight: 600, color: 'var(--charcoal-black)' }}>
                    {e.cat}
                    {openElig === i ? <ChevronUp size={20} style={{ color: 'var(--primary-red)' }} /> : <ChevronDown size={20} style={{ color: '#999' }} />}
                  </button>
                  <AnimatePresence>
                    {openElig === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                        <p style={{ padding: '0 1.25rem 1.25rem', color: '#555', lineHeight: 1.6 }}>{e.req}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Important dates table */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Important Dates</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <thead>
                <tr style={{ background: 'var(--primary-red)', color: 'white' }}>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Event</th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {dates.map((d, i) => (
                  <tr key={i} style={{ borderBottom: i === dates.length - 1 ? 'none' : '1px solid #eee' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: 'var(--charcoal-black)' }}>{d.event}</td>
                    <td style={{ padding: '1rem 1.25rem', color: '#555' }}>{d.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fees & Scholarships */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <h2 className="heading-md">Fees & Financial Aid</h2>
            <p style={{ color: '#555', lineHeight: 1.7, marginTop: '1rem' }}>
              Our fee structure is designed to be transparent and competitive. Detailed program-wise fees are shared in
              the offer letter. JAIN University offers merit-based, sports, and need-based scholarships, along with easy
              EMI options through partner banks.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {scholarships.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '2.5rem', background: 'var(--ivory)', borderRadius: '10px', borderBottom: '4px solid var(--warm-gold)' }}>
                <s.icon size={36} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="section section-bg-ivory">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="heading-md">Documents Required</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {documents.map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '1rem 1.25rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <span style={{ display: 'flex', flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(184,35,47,0.1)', color: 'var(--primary-red)', alignItems: 'center', justifyContent: 'center' }}><Check size={16} /></span>
                <span style={{ color: 'var(--charcoal-black)', fontSize: '0.95rem' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Students */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <Globe size={40} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
          <h2 className="heading-md">International Admissions</h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginTop: '1.5rem', marginBottom: '2rem' }}>
            Students from over 35 countries study at JAIN University. We offer dedicated support for visa assistance,
            hostel accommodation, orientation, and cultural integration.
          </p>
          <Link href="/contact" className="btn-secondary">International Admissions Office</Link>
        </div>
      </section>

      {/* Apply Now CTA Band */}
      <section className="section" style={{ background: 'var(--primary-red)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'white', marginBottom: '1rem' }}>Ready to take the first step?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>Start your application today and join the JAIN family.</p>
          <Link href="/contact" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Start Your Application</Link>
        </div>
      </section>
    </div>
  );
}
