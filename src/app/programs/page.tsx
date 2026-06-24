"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Cpu, BarChart3, FlaskConical, BookOpen, Palette, Scale, Music, HeartPulse } from 'lucide-react';

type School = {
  icon: typeof Cpu;
  title: string;
  levels: ('UG' | 'PG' | 'Doctoral')[];
  ug?: string;
  pg?: string;
  doctoral?: string;
  highlights?: string;
};

export default function Programs() {
  const [filter, setFilter] = useState<string>('All');
  const [open, setOpen] = useState<number | null>(0);

  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const filters = ['All', 'UG', 'PG', 'Doctoral'];

  const schools: School[] = [
    {
      icon: Cpu, title: 'School of Engineering & Technology', levels: ['UG', 'PG', 'Doctoral'],
      ug: 'B.Tech in CSE, AI & ML, Data Science, Cybersecurity, IoT, Mechanical, Civil, Aerospace, Electronics & Communication, Robotics',
      pg: 'M.Tech in CSE, AI, Structural Engineering, VLSI Design',
      doctoral: 'Ph.D across Engineering disciplines',
      highlights: 'Industry-aligned curriculum, internships with global tech firms, hackathons, and capstone projects.',
    },
    {
      icon: BarChart3, title: 'School of Commerce & Management', levels: ['UG', 'PG', 'Doctoral'],
      ug: 'BBA, BBA (Hons), B.Com, B.Com (Hons), Integrated MBA',
      pg: 'MBA (General, Finance, Marketing, HR, Analytics, International Business), M.Com, Executive MBA',
      doctoral: 'Ph.D in Management and Commerce',
      highlights: 'Case-based learning, global immersion programs, and live consulting projects.',
    },
    {
      icon: FlaskConical, title: 'School of Sciences', levels: ['UG', 'PG', 'Doctoral'],
      ug: 'B.Sc in Physics, Chemistry, Mathematics, Biotechnology, Microbiology, Forensic Science, Environmental Science, Computer Science',
      pg: 'M.Sc in Chemistry, Physics, Biochemistry, Biotechnology, Mathematics',
      doctoral: 'Ph.D programs across all science disciplines',
      highlights: 'Research-intensive labs, funded projects, and publications in top-tier journals.',
    },
    {
      icon: BookOpen, title: 'School of Humanities & Social Sciences', levels: ['UG', 'PG', 'Doctoral'],
      ug: 'BA in Psychology, English, Economics, Journalism, Political Science, Sociology',
      pg: 'MA in Psychology, English, Economics, Journalism',
      doctoral: 'Ph.D in Humanities & Social Sciences',
      highlights: 'Interdisciplinary learning, field research, and community engagement.',
    },
    {
      icon: Palette, title: 'School of Design', levels: ['UG', 'PG'],
      ug: 'B.Des in Fashion Design, Interior Design, Communication Design, Product Design, UX/UI',
      pg: 'M.Des in Design Innovation, Strategic Design',
      highlights: 'Studio-based pedagogy, design thinking, and industry-sponsored projects.',
    },
    {
      icon: Music, title: 'School of Performing Arts', levels: ['UG', 'PG'],
      ug: 'BA in Music (Vocal & Instrumental), Dance, Theatre, Film Studies',
      pg: 'MA in Music, Dance, Theatre, Film Studies',
      highlights: 'Performance opportunities, master classes, and production labs.',
    },
    {
      icon: Scale, title: 'School of Law', levels: ['UG', 'PG', 'Doctoral'],
      ug: 'BBA LLB (Hons), BA LLB (Hons), B.Com LLB (Hons), 3-year LLB',
      pg: 'LLM with specializations',
      doctoral: 'Ph.D in Law',
      highlights: 'Moot courts, legal aid clinics, and internships with leading firms.',
    },
    {
      icon: HeartPulse, title: 'School of Allied Healthcare & Sciences', levels: ['UG'],
      ug: 'B.Optometry, B.Sc Nursing, BPT (Physiotherapy), B.Sc in Medical Imaging, Anesthesia, Operation Theatre Technology',
      highlights: 'Clinical training, hospital tie-ups, and hands-on practical exposure.',
    },
  ];

  const visible = schools
    .map((s, idx) => ({ s, idx }))
    .filter(({ s }) => filter === 'All' || s.levels.includes(filter as 'UG' | 'PG' | 'Doctoral'));

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{
        textAlign: 'center', padding: '10rem 0 6rem',
        background: 'linear-gradient(rgba(26,26,26,0.72), rgba(26,26,26,0.82)), url("/images/computer-lab.png") no-repeat center/cover',
        color: 'white',
      }}>
        <motion.h1 className="heading-lg" initial="hidden" animate="visible" variants={fadeUp}>Discover Your Future. Choose Your Path.</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} style={{ color: '#ccc', marginTop: '1rem', maxWidth: '680px', margin: '1rem auto 0' }}>
          100+ programs across 8 schools — designed to ignite curiosity, build expertise, and prepare you for global careers.
        </motion.p>
      </section>

      {/* Filters + Schools */}
      <section className="section">
        <div className="container">
          {/* Filter chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            {filters.map((f) => (
              <button key={f} onClick={() => { setFilter(f); setOpen(null); }}
                style={{
                  padding: '0.6rem 1.5rem', borderRadius: '30px', fontWeight: 600, transition: 'all 0.2s',
                  background: filter === f ? 'var(--primary-red)' : 'white',
                  color: filter === f ? 'white' : 'var(--charcoal-black)',
                  border: filter === f ? 'none' : '1px solid #ddd',
                }}>
                {f === 'All' ? 'All Programs' : f}
              </button>
            ))}
          </div>

          {/* Expandable school cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {visible.map(({ s, idx }) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ border: '1px solid #eaeaea', borderRadius: '10px', overflow: 'hidden', background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
                <button onClick={() => setOpen(open === idx ? null : idx)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', textAlign: 'left' }}>
                  <span style={{ color: 'var(--primary-red)', display: 'flex' }}><s.icon size={28} /></span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal-black)' }}>{s.title}</span>
                    <span style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {s.levels.map((l) => (
                        <span key={l} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-red)', background: 'var(--ivory)', padding: '0.15rem 0.6rem', borderRadius: '20px' }}>{l}</span>
                      ))}
                    </span>
                  </span>
                  {open === idx ? <ChevronUp size={22} style={{ color: 'var(--primary-red)' }} /> : <ChevronDown size={22} style={{ color: '#999' }} />}
                </button>
                <AnimatePresence>
                  {open === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '0 1.5rem 1.75rem', borderTop: '1px solid #f0f0f0' }}>
                        {s.ug && <p style={{ color: '#555', lineHeight: 1.6, marginTop: '1rem' }}><strong style={{ color: 'var(--charcoal-black)' }}>UG: </strong>{s.ug}</p>}
                        {s.pg && <p style={{ color: '#555', lineHeight: 1.6, marginTop: '0.75rem' }}><strong style={{ color: 'var(--charcoal-black)' }}>PG: </strong>{s.pg}</p>}
                        {s.doctoral && <p style={{ color: '#555', lineHeight: 1.6, marginTop: '0.75rem' }}><strong style={{ color: 'var(--charcoal-black)' }}>Doctoral: </strong>{s.doctoral}</p>}
                        {s.highlights && <p style={{ color: '#777', fontStyle: 'italic', lineHeight: 1.6, marginTop: '1rem' }}>★ {s.highlights}</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online & Hybrid Programs */}
      <section className="section section-bg-ivory">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <h2 className="heading-md">Online & Hybrid Programs</h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginTop: '1.5rem', marginBottom: '2rem' }}>
            Through JAIN Online, learners can pursue UGC-entitled, NAAC A++ accredited degrees from anywhere —
            including Online MBA, BBA, BCA, MCA, B.Com, and M.Com with AI-powered learning tools and placement support.
          </p>
          <Link href="/admissions" className="btn-primary">Explore Online Programs</Link>
        </div>
      </section>

      {/* Program CTA Band */}
      <section className="section" style={{ background: 'var(--charcoal-black)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'white', marginBottom: '1rem' }}>Not sure which program suits you best?</h2>
          <p style={{ color: '#bbb', marginBottom: '2rem' }}>Our counsellors will help you find the right path for your goals.</p>
          <Link href="/contact" className="btn-primary">Talk to a Counsellor</Link>
        </div>
      </section>
    </div>
  );
}
