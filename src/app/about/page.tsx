"use client";

import { motion } from 'framer-motion';
import { Award, Target, BookOpen, Users, Globe, Lightbulb, Activity, Waves, Trophy, Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div>
      {/* 2.1 Page Hero */}
      <section className="section" style={{ 
        textAlign: 'center', padding: '10rem 0 6rem', 
        background: 'linear-gradient(rgba(26,26,26,0.75), rgba(26,26,26,0.8)), url("/images/campus-aerial.png") no-repeat center/cover',
        color: 'white'
      }}>
        <motion.h1 className="heading-lg" initial="hidden" animate="visible" variants={fadeUp}>Our Legacy. Our Vision. Our Promise.</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} style={{ color: '#ccc', marginTop: '1rem' }}>
          <Link href="/" style={{ color: '#ccc' }}>Home</Link> &rsaquo; About Us
        </motion.p>
      </section>

      {/* 2.2 Our Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 className="heading-md" initial="hidden" whileInView="visible" variants={fadeUp}>Three Decades of Educational Excellence</motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={fadeUp} style={{ color: '#555', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Founded in 1990 as Sri Bhagawan Mahaveer Jain College, our journey from a single institution to a globally recognized Deemed-to-be University reflects an unwavering commitment to academic excellence and student success. Today, JAIN University stands as a beacon of innovation, nurturing thinkers, leaders, and changemakers across India and beyond.
          </motion.p>
        </div>
      </section>

      {/* 2.3 Vision & Mission */}
      <section className="section section-bg-ivory">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div style={{ background: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} initial="hidden" whileInView="visible" variants={fadeUp}>
            <div style={{ color: 'var(--primary-red)', marginBottom: '1rem' }}><Target size={40} /></div>
            <h3 className="heading-md" style={{ color: 'var(--charcoal-black)' }}>Our Vision</h3>
            <p style={{ marginTop: '1rem', color: '#555', lineHeight: 1.6 }}>To be a globally renowned university committed to academic excellence, research, innovation, and the holistic development of students who contribute meaningfully to society.</p>
          </motion.div>
          <motion.div style={{ background: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: 0.2 }}>
            <div style={{ color: 'var(--primary-red)', marginBottom: '1rem' }}><Award size={40} /></div>
            <h3 className="heading-md" style={{ color: 'var(--charcoal-black)' }}>Our Mission</h3>
            <p style={{ marginTop: '1rem', color: '#555', lineHeight: 1.6 }}>To deliver transformative education through interdisciplinary learning, world-class faculty, cutting-edge research, and strong industry-academia partnerships that empower every learner to achieve their highest potential.</p>
          </motion.div>
        </div>
      </section>

      {/* 2.4 Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Our Core Values</h2>
          </div>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {[
              { icon: Award, title: 'Excellence', desc: 'Pursuing the highest standards in all we do.' },
              { icon: BookOpen, title: 'Integrity', desc: 'Acting with honesty, transparency, and ethics.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Encouraging curiosity, creativity, and disruptive thinking.' },
              { icon: Users, title: 'Inclusivity', desc: 'Celebrating diversity and equal opportunity.' },
              { icon: Target, title: 'Impact', desc: 'Creating measurable change in society.' },
              { icon: Globe, title: 'Lifelong Learning', desc: 'Inspiring a passion for continuous growth.' }
            ].map((val, i) => (
              <motion.div key={i} variants={item} style={{ textAlign: 'center', padding: '2rem', background: 'var(--ivory)', borderRadius: '8px' }}>
                <val.icon size={32} style={{ color: 'var(--primary-red)', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{val.title}</h4>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2.5 Accreditations & Rankings */}
      <section className="section" style={{ background: 'var(--charcoal-black)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'white', marginBottom: '3rem' }}>Accreditations & Recognitions</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {['NAAC A++ Accredited', 'UGC Recognized', 'NIRF Ranked Top Univ', 'ISO 9001:2015 Certified', 'Member of AIU', 'Approved by AICTE'].map((acc, i) => (
              <div key={i} style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '40px', fontWeight: 600 }}>
                {acc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 Leadership Message */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <img src="/images/campus-walkway.png" alt="JAIN University campus" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: 0.2 }}>
            <h2 className="heading-md">A Message from Leadership</h2>
            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#555', margin: '2rem 0', borderLeft: '4px solid var(--primary-red)', paddingLeft: '1.5rem' }}>
              &quot;At JAIN University, we believe that education is not merely about acquiring degrees — it is about shaping character, building confidence, and creating contributors to society. Every student who walks through our gates becomes part of a family committed to excellence and purpose.&quot;
            </blockquote>
            <div>
              <h4 style={{ color: 'var(--charcoal-black)' }}>Dr. Chenraj Roychand</h4>
              <p style={{ color: 'var(--primary-red)' }}>Chancellor, JAIN (Deemed-to-be University)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.7 Campus Infrastructure */}
      <section className="section section-bg-ivory">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">World-Class Infrastructure</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { img: '/images/computer-lab.png', title: 'Smart Computer Labs', desc: 'Tech-enabled labs for AI, coding, and research.' },
              { img: '/images/library.png', title: 'Central Library', desc: 'Over 1.5 lakh books and 30,000+ e-journals.' },
              { img: '/images/cafeteria.png', title: 'Spacious Food Court', desc: 'Hygienic, multi-cuisine dining for students.' },
              { img: '/images/building-courtyard.png', title: 'Modern Campus & Hostels', desc: 'Comfortable residential and academic blocks.' }
            ].map((infra, i) => (
              <motion.div key={i} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <img src={infra.img} alt={infra.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{infra.title}</h4>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>{infra.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 2.7b Sports & Wellness */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop" alt="JAIN University sports facilities" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
            <h2 className="heading-md">Sports &amp; Wellness</h2>
            <p style={{ color: '#555', lineHeight: 1.7, margin: '1rem 0 1.5rem' }}>
              A vibrant sporting culture with world-class facilities and dedicated coaches helps every student
              stay active, compete, and excel beyond the classroom — from inter-collegiate tournaments to daily fitness.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem' }}>
              {[
                { icon: Activity, label: 'Olympic-grade Athletics Track' },
                { icon: Waves, label: 'Swimming Pool' },
                { icon: Trophy, label: 'Indoor & Outdoor Courts' },
                { icon: Dumbbell, label: 'Fully-equipped Gym' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--ivory)', padding: '1rem 1.25rem', borderRadius: '8px' }}>
                  <s.icon size={22} style={{ color: 'var(--primary-red)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.8 Global Collaborations */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="heading-md">Global Collaborations</h2>
          <p style={{ color: '#555', lineHeight: 1.6, marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            JAIN University has academic and research partnerships with 80+ universities across the USA, UK, Canada, Australia, Germany, Singapore, France, and Malaysia — enabling student exchanges, dual degrees, and joint research initiatives.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', opacity: 0.6 }}>
            {/* Logos placeholder text */}
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>MIT</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Stanford</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Oxford</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>NUS</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Univ. of Toronto</span>
          </div>
        </div>
      </section>
    </div>
  );
}
