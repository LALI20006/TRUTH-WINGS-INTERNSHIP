"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Globe, Lightbulb, Building, ChevronDown, ChevronUp } from 'lucide-react';
import Counter from '@/components/ui/Counter';
import styles from './Home.module.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const faqs = [
    { q: "What is the admission process at JAIN University?", a: "Admissions are based on JET (JAIN Entrance Test), national-level exam scores (CUET, JEE, CAT, LSAT, etc.), and academic merit, depending on the program." },
    { q: "Are scholarships available?", a: "Yes — merit-based, sports, and need-based scholarships are offered to deserving students." },
    { q: "Does JAIN provide hostel facilities?", a: "Yes — separate AC/Non-AC hostels for boys and girls with modern amenities, mess, Wi-Fi, and 24/7 security." },
    { q: "What is the placement rate?", a: "We maintain a 95%+ placement rate across most programs with over 500+ top recruiters like Microsoft, Amazon, Deloitte, and more." }
  ];

  return (
    <>
      {/* 1.1 Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className="heading-lg" style={{ color: 'white' }}
            initial="hidden" animate="visible" variants={fadeUp}
          >
            Empowering Minds, Shaping the Future
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Located in the heart of Bengaluru, JAIN (Deemed-to-be University) is a NAAC A++ accredited institution offering world-class education.
          </motion.p>
          <motion.div 
            className={styles.heroBtns}
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <Link href="/programs" className="btn-primary">Explore Programs</Link>
            <Link href="/about" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Watch Video</Link>
          </motion.div>
        </div>
      </section>

      {/* 1.2 Who We Are */}
      <section className="section">
        <div className={`container ${styles.aboutGrid}`}>
          <motion.div className={styles.aboutImgWrapper}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <img src="/images/building-courtyard.png" alt="JAIN University campus" className={styles.aboutImg} />
          </motion.div>
          <motion.div className={styles.aboutText}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="heading-md">India&apos;s Trusted Destination for Higher Education</h2>
            <p>
              Promoted by the JAIN Trust, JAIN (Deemed-to-be University) is one of India&apos;s most respected higher-education institutions. With a legacy of over three decades, we are accredited with NAAC A++ and consistently ranked among India&apos;s top universities by NIRF.
            </p>
            <p>
              Our learner-centric approach combines academic rigor with industry exposure, global partnerships, and a thriving culture of innovation.
            </p>
            <Link href="/about" className="btn-secondary">Explore More</Link>
          </motion.div>
        </div>
      </section>

      {/* 1.3 Why Choose Us */}
      <section className="section section-bg-ivory">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Why Choose JAIN University</h2>
          </div>
          <div className={styles.featuresGrid}>
            {[
              { icon: GraduationCap, title: 'World-Class Faculty', desc: 'Distinguished academicians bringing real-world insights into every classroom.' },
              { icon: Lightbulb, title: 'Innovation & Incubation', desc: 'Home to one of India’s most active startup incubators with mentorship.' },
              { icon: Globe, title: 'Global Exposure', desc: 'Partnerships with 80+ international universities ensuring top opportunities.' },
              { icon: Building, title: 'Quality Infrastructure', desc: 'Modern research labs, smart classrooms, and world-class sports facilities.' }
            ].map((feature, i) => (
              <motion.div key={i} className={styles.featureCard}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <feature.icon size={40} className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p style={{ color: '#555' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.4 What We Offer (Programs) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="heading-md">Explore Our Schools</h2>
          </div>
          <div className={styles.programsGrid}>
            {[
              { title: 'Engineering & Technology', desc: 'B.Tech, M.Tech, Ph.D in CSE, AI/ML, Data Science, and more.' },
              { title: 'Commerce & Management', desc: 'BBA, MBA, B.Com, M.Com & Executive programs.' },
              { title: 'Sciences', desc: 'UG/PG in Physics, Chemistry, Biotechnology, and Microbiology.' },
              { title: 'Humanities & Design', desc: 'Psychology, English, Journalism, Fashion & Communication Design.' }
            ].map((program, i) => (
              <motion.div key={i} className={styles.programCard}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              >
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
                <Link href="/programs" style={{ color: 'var(--primary-red)', fontWeight: 600 }}>Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5 Excellence Focus */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <motion.h2 className="heading-md" style={{ color: 'white', marginBottom: '3rem' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            Stellar Placement Records & Academic Excellence
          </motion.h2>
          <motion.div className={styles.statsGrid}
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div className={styles.statItem}>
              <h3><Counter to={52} prefix="₹" suffix=" LPA" /></h3>
              <p>Highest Package</p>
            </div>
            <div className={styles.statItem}>
              <h3><Counter to={500} suffix="+" /></h3>
              <p>Top Recruiters</p>
            </div>
            <div className={styles.statItem}>
              <h3><Counter to={95} suffix="%" /></h3>
              <p>Placement Rate</p>
            </div>
            <div className={styles.statItem}>
              <h3>A++</h3>
              <p>NAAC Accredited</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.6 FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Frequently Asked Questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <div 
                  className={styles.faqQuestion} 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={styles.faqAnswer}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/faq" style={{ color: 'var(--primary-red)', fontWeight: 600 }}>View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* 1.7 News & Insights */}
      <section className="section section-bg-ivory">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">News & Insights</h2>
          </div>
          <div className={styles.newsGrid}>
            {[
              { img: '/images/alumni-meet.png', date: 'Mar 15, 2026', title: 'JAIN University Hosts Global Tech Summit 2026' },
              { img: '/images/computer-lab.png', date: 'Feb 28, 2026', title: 'New AI Research Center Inaugurated' },
              { img: '/images/campus-aerial.png', date: 'Jan 10, 2026', title: 'Record Placements for the Batch of 2026' }
            ].map((news, i) => (
              <motion.div key={i} className={styles.newsCard}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <img src={news.img} alt={news.title} className={styles.newsImg} />
                <div className={styles.newsContent}>
                  <span className={styles.newsDate}>{news.date}</span>
                  <h3 className={styles.newsTitle}>{news.title}</h3>
                  <Link href="/blog" style={{ color: 'var(--charcoal-black)', fontWeight: 600, fontSize: '0.9rem' }}>Read More →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.8 Inquire / Contact Form */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="heading-md" style={{ color: 'white', marginBottom: '1rem' }}>Let&apos;s Get in Touch</h2>
              <p style={{ color: '#ccc', marginBottom: '2rem', lineHeight: 1.6 }}>
                Have questions about admissions, programs, or campus life? Fill out the form, and our counseling team will get back to you within 24 hours.
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary-red)', marginBottom: '0.5rem' }}>Main Campus</h4>
                <p style={{ color: '#ccc', fontSize: '0.9rem' }}>#44/4, District Fund Road, Jayanagar 9th Block, Bengaluru, Karnataka 560069</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-red)', marginBottom: '0.5rem' }}>Admissions Helpline</h4>
                <p style={{ color: '#ccc', fontSize: '0.9rem' }}>+91 90000 70888 | admissions@jainuniversity.ac.in</p>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className={styles.formInput} placeholder="Enter your full name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className={styles.formInput} placeholder="Enter your email" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="program">Program of Interest</label>
                  <select id="program" className={styles.formSelect}>
                    <option value="">Select a Program</option>
                    <option value="engineering">Engineering & Tech</option>
                    <option value="management">Commerce & Management</option>
                    <option value="sciences">Sciences</option>
                    <option value="humanities">Humanities & Design</option>
                  </select>
                </div>
                <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Request a Callback</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
