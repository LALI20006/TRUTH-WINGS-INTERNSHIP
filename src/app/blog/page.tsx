"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogNews() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const blogPosts = [
    {
      id: 1,
      title: "JAIN University Hosts Global Tech Summit 2026",
      category: "Campus Events",
      date: "Mar 15, 2026",
      author: "Admin",
      img: "/images/alumni-meet.png",
      excerpt: "Leaders from top technology companies gathered at JAIN University to discuss the future of AI and Machine Learning in education."
    },
    {
      id: 2,
      title: "New AI Research Center Inaugurated",
      category: "Academic Publications",
      date: "Feb 28, 2026",
      author: "Dr. Sharma",
      img: "/images/computer-lab.png",
      excerpt: "A state-of-the-art AI Research Center was inaugurated today, aiming to foster innovation and cross-disciplinary research."
    },
    {
      id: 3,
      title: "Record Placements for the Batch of 2026",
      category: "Student Achievements",
      date: "Jan 10, 2026",
      author: "Placement Cell",
      img: "/images/campus-aerial.png",
      excerpt: "With over 500 recruiters on campus, the 2026 batch achieved a 95% placement rate, with the highest package reaching ₹52 LPA."
    },
    {
      id: 4,
      title: "International Cultural Fest Highlights",
      category: "Campus Life",
      date: "Dec 05, 2025",
      author: "Student Council",
      img: "/images/cafeteria.png",
      excerpt: "Students from over 35 countries showcased their heritage at the annual International Cultural Fest held at the Main Campus."
    },
    {
      id: 5,
      title: "Breakthrough in Nanotech by Science Faculty",
      category: "Academic Publications",
      date: "Nov 20, 2025",
      author: "Research Dept",
      img: "/images/library.png",
      excerpt: "Our Science faculty published a groundbreaking paper on Nanotechnology applications in renewable energy."
    },
    {
      id: 6,
      title: "JAIN Alumni Recognized in Forbes 30 Under 30",
      category: "Student Achievements",
      date: "Oct 12, 2025",
      author: "Alumni Relations",
      img: "/images/building-courtyard.png",
      excerpt: "Three JAIN University alumni were recently featured in the Forbes 30 Under 30 list for their innovative tech startups."
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{ 
        textAlign: 'center', padding: '10rem 0 6rem', 
        background: 'linear-gradient(rgba(26,26,26,0.75), rgba(26,26,26,0.8)), url("/images/campus-sunset.png") no-repeat center/cover',
        color: 'white'
      }}>
        <motion.h1 className="heading-lg" initial="hidden" animate="visible" variants={fadeUp}>Blog & News</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} style={{ color: '#ccc', marginTop: '1rem' }}>
          <Link href="/" style={{ color: '#ccc' }}>Home</Link> &rsaquo; Blog
        </motion.p>
      </section>

      {/* Blog Grid Section */}
      <section className="section section-bg-ivory">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Latest from JAIN University</h2>
            <p style={{ color: '#555', marginTop: '1rem' }}>Discover the latest university news, student achievements, campus events, and academic publications.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', height: '240px' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--primary-red)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                    {post.category}
                  </span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '1rem', color: '#777', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={14} /> {post.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><User size={14} /> {post.author}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4, color: 'var(--charcoal-black)' }}>{post.title}</h3>
                  <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} style={{ color: 'var(--primary-red)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button className="btn-secondary">Load More Posts</button>
          </div>
        </div>
      </section>
    </div>
  );
}
