"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ChevronUp, GraduationCap, Building, BookOpen, Briefcase } from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Admissions');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const categories = [
    { id: 'Admissions', icon: GraduationCap },
    { id: 'Programs', icon: BookOpen },
    { id: 'Campus Life', icon: Building },
    { id: 'Placements', icon: Briefcase }
  ];

  const faqs = {
    'Admissions': [
      { q: "What is the admission process at JAIN University?", a: "Admissions are based on JET (JAIN Entrance Test), national-level exam scores (CUET, JEE, CAT, LSAT, etc.), and academic merit, depending on the program." },
      { q: "When do admissions open?", a: "Applications for the 2026–27 academic year are now open. Visit our Admissions page for important dates and deadlines." },
      { q: "Can I apply for multiple programs?", a: "Yes, you can choose up to three programs in your application form and indicate your preference." },
      { q: "Are scholarships available?", a: "Yes — merit-based, sports, and need-based scholarships are offered to deserving students based on their performance in the entrance exams and past academic records." }
    ],
    'Programs': [
      { q: "How many programs does JAIN University offer?", a: "We offer over 100 programs across 8 schools at UG, PG, and Doctoral levels, plus 40+ online programs through JAIN Online." },
      { q: "Are the programs UGC-recognized?", a: "Yes, all programs are recognized by UGC and relevant statutory bodies including AICTE, BCI, PCI, and COA." },
      { q: "Are there interdisciplinary programs?", a: "Yes — we offer integrated, dual-degree, and interdisciplinary programs combining domains like Business + Technology, Design + Engineering, and Law + Management." },
      { q: "What is the duration of the undergraduate programs?", a: "Most undergraduate programs are 3 to 4 years long, depending on the specific course and whether it is an Honors program." }
    ],
    'Campus Life': [
      { q: "Does JAIN provide hostel facilities?", a: "Yes — we have separate AC and Non-AC hostels for boys and girls with modern amenities, mess facilities, Wi-Fi, and 24/7 security." },
      { q: "What clubs and activities are available?", a: "There are over 60 student clubs covering technology, arts, sports, entrepreneurship, music, dance, theatre, and social impact." },
      { q: "Are sports facilities available?", a: "Absolutely. We have Olympic-grade tracks, a swimming pool, indoor courts, a fully-equipped gym, cricket grounds, and dedicated sports coaches." },
      { q: "Is there a student grievance redressal mechanism?", a: "Yes, we have a dedicated grievance redressal cell and counseling services to ensure student well-being and a safe campus environment." }
    ],
    'Placements': [
      { q: "What is the placement rate?", a: "We maintain a 95%+ placement rate across most of our programs." },
      { q: "Who are the top recruiters?", a: "Our top recruiters include Microsoft, Amazon, Deloitte, KPMG, EY, Infosys, TCS, Wipro, Accenture, Goldman Sachs, and over 500 other leading companies." },
      { q: "What is the average and highest package?", a: "The average package is ₹8.5 LPA, with the highest package reaching ₹52 LPA in recent years." },
      { q: "Does the university provide internship support?", a: "Yes, our Career Development Cell provides comprehensive support for mandatory and voluntary internships with stipend-paying companies." }
    ]
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setOpenFaq(null);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{ 
        textAlign: 'center', padding: '10rem 0 6rem', 
        background: 'linear-gradient(rgba(26,26,26,0.72), rgba(26,26,26,0.82)), url("/images/alumni-meet.png") no-repeat center/cover',
        color: 'white'
      }}>
        <motion.h1 className="heading-lg" initial="hidden" animate="visible" variants={fadeUp}>Frequently Asked Questions</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} style={{ color: '#ccc', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
          Everything you need to know about studying at JAIN University.
        </motion.p>
      </section>

      <section className="section section-bg-ivory" style={{ minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Categories Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  background: activeCategory === cat.id ? 'var(--primary-red)' : 'white',
                  color: activeCategory === cat.id ? 'white' : 'var(--charcoal-black)',
                  border: activeCategory === cat.id ? 'none' : '1px solid #ddd',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  boxShadow: activeCategory === cat.id ? '0 4px 10px rgba(184, 35, 47, 0.3)' : 'none'
                }}
              >
                <cat.icon size={18} />
                {cat.id}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--charcoal-black)', borderBottom: '2px solid var(--ivory)', paddingBottom: '1rem' }}>
              {activeCategory} FAQs
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs[activeCategory as keyof typeof faqs].map((faq, i) => (
                <div key={i} style={{ border: '1px solid #eee', borderRadius: '6px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ 
                      width: '100%', 
                      padding: '1.25rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      background: openFaq === i ? 'var(--ivory)' : 'white',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: 'var(--charcoal-black)'
                    }}
                  >
                    {faq.q}
                    {openFaq === i ? <ChevronUp size={20} style={{ color: 'var(--primary-red)' }} /> : <ChevronDown size={20} style={{ color: '#999' }} />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '1.25rem', borderTop: '1px solid #eee', color: '#555', lineHeight: 1.6, background: 'white' }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Still Have Questions CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Can&apos;t find what you&apos;re looking for?</h3>
            <p style={{ color: '#555', marginBottom: '2rem' }}>Our admissions team is here to help you with any queries you might have.</p>
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
