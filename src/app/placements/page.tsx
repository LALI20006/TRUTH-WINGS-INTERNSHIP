"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Users, Award, Target, Briefcase, GraduationCap, Globe } from 'lucide-react';
import Counter from '@/components/ui/Counter';
import Marquee from '@/components/ui/Marquee';

export default function Placements() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const stats = [
    { icon: TrendingUp, to: 52, prefix: '₹', suffix: ' LPA', decimals: 0, label: 'Highest Package Offered' },
    { icon: Award, to: 8.5, prefix: '₹', suffix: ' LPA', decimals: 1, label: 'Average Package' },
    { icon: Users, to: 500, prefix: '', suffix: '+', decimals: 0, label: 'Recruiters On-Campus' },
    { icon: Target, to: 95, prefix: '', suffix: '%', decimals: 0, label: 'Placement Rate' },
  ];

  const recruiters = [
    'Microsoft', 'Amazon', 'Deloitte', 'KPMG', 'EY', 'Infosys', 'TCS', 'Wipro',
    'Accenture', 'Capgemini', 'IBM', 'Cognizant', 'HCL', 'Goldman Sachs', 'JP Morgan',
    'ICICI Bank', 'HDFC', 'HUL', 'Nestlé', 'Decathlon', 'Flipkart', 'Swiggy', 'Zomato', 'PwC',
  ];

  const cell = [
    { icon: GraduationCap, title: 'Skill Development Workshops', desc: 'Aptitude, GD, coding, communication & domain-specific training from Year 1.' },
    { icon: Users, title: 'Industry Mentorship', desc: 'One-on-one mentorship from senior professionals & accomplished alumni.' },
    { icon: Briefcase, title: 'Internship Support', desc: 'Mandatory internships with stipend-paying companies across sectors.' },
  ];

  const sectors = [
    { name: 'IT & Software', pct: 32, color: '#B8232F' },
    { name: 'Consulting', pct: 18, color: '#D4A437' },
    { name: 'BFSI', pct: 15, color: '#1A1A1A' },
    { name: 'E-commerce', pct: 12, color: '#8C5B6B' },
    { name: 'Manufacturing', pct: 8, color: '#5B8C7E' },
    { name: 'Media & Design', pct: 6, color: '#C97B4A' },
    { name: 'Healthcare', pct: 5, color: '#5B6B8C' },
    { name: 'Others', pct: 4, color: '#999999' },
  ];

  const alumni = [
    {
      name: 'Ananya Rao', batch: 'B.Tech CSE, 2022', role: 'SDE-II at Amazon',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
      quote: 'JAIN gave me the foundation and the confidence to crack one of the toughest interviews in tech.',
    },
    {
      name: 'Rohan Mehta', batch: 'MBA Finance, 2021', role: 'Associate at Goldman Sachs',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      quote: 'The live consulting projects and mentorship shaped how I think about real-world finance.',
    },
    {
      name: 'Sneha Kulkarni', batch: 'B.Des, 2023', role: 'Product Designer at Flipkart',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
      quote: 'The design studios and industry exposure at JAIN made my portfolio stand out instantly.',
    },
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{
        textAlign: 'center', padding: '10rem 0 6rem',
        background: 'linear-gradient(rgba(26,26,26,0.7), rgba(26,26,26,0.8)), url("/images/campus-walkway.png") no-repeat center/cover',
        color: 'white',
      }}>
        <motion.h1 className="heading-lg" initial="hidden" animate="visible" variants={fadeUp}>Launching Careers. Building Futures.</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} style={{ color: '#ccc', marginTop: '1rem', maxWidth: '640px', margin: '1rem auto 0' }}>
          A dedicated Career Development Cell connecting our students with the world&apos;s most coveted employers.
        </motion.p>
      </section>

      {/* Placement Highlights */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '-9rem', position: 'relative', zIndex: 10 }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 + i * 0.1 }}
                style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <s.icon size={32} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '2.25rem', color: 'var(--charcoal-black)', marginBottom: '0.25rem' }}>
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </h3>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="section section-bg-ivory">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Our Top Recruiters</h2>
            <p style={{ color: '#555', marginTop: '1rem' }}>500+ leading companies recruit from JAIN University every year.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Marquee items={recruiters.slice(0, 12)} />
            <Marquee items={recruiters.slice(12)} />
          </div>
        </div>
      </section>

      {/* Career Development Cell */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Your Career Partner From Day One</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {cell.map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--ivory)', padding: '2.5rem', borderRadius: '8px', borderTop: '4px solid var(--primary-red)' }}>
                <c.icon size={36} style={{ color: 'var(--primary-red)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.6 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-wise Distribution */}
      <section className="section section-bg-ivory">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Sector-Wise Placement Distribution</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {sectors.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--charcoal-black)' }}>{s.name}</span>
                  <span style={{ fontWeight: 600, color: '#555' }}>{s.pct}%</span>
                </div>
                <div style={{ background: '#e6e0d8', borderRadius: '20px', height: '12px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct * 2.8}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08 }}
                    style={{ height: '100%', background: s.color, borderRadius: '20px' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Alumni Success Stories</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {alumni.map((a, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <img src={a.img} alt={a.name} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <div style={{ padding: '1.75rem' }}>
                  <p style={{ fontStyle: 'italic', color: '#555', lineHeight: 1.6, marginBottom: '1.25rem' }}>&quot;{a.quote}&quot;</p>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{a.name}</h4>
                  <p style={{ color: 'var(--primary-red)', fontSize: '0.9rem', fontWeight: 600 }}>{a.role}</p>
                  <p style={{ color: '#888', fontSize: '0.85rem' }}>{a.batch}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Higher Education Outcomes */}
      <section className="section section-bg-ivory">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <Globe size={40} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
          <h2 className="heading-md">Higher Education Outcomes</h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Many of our students pursue higher studies at world-renowned universities including Stanford, MIT,
            Oxford, Cambridge, NUS, ETH Zurich, and the University of Toronto — supported by our dedicated
            study-abroad cell.
          </p>
        </div>
      </section>

      {/* Recruiter CTA */}
      <section className="section" style={{ background: 'var(--primary-red)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'white', marginBottom: '1rem' }}>Want to hire from JAIN University?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Partner with our Placement Cell to access a diverse pool of industry-ready talent.
          </p>
          <Link href="/contact" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
            Connect With Our Placement Cell
          </Link>
        </div>
      </section>
    </div>
  );
}
