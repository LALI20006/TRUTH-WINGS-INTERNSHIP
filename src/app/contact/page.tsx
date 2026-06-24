"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactUs() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{ 
        textAlign: 'center', padding: '10rem 0 6rem', 
        background: 'linear-gradient(rgba(26,26,26,0.72), rgba(26,26,26,0.82)), url("/images/buses.png") no-repeat center/cover',
        color: 'white'
      }}>
        <motion.h1 className="heading-lg" initial="hidden" animate="visible" variants={fadeUp}>We&apos;re Here to Help</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} style={{ color: '#ccc', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
          Reach out — our team will get back to you within 24 hours.
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '-10rem', position: 'relative', zIndex: 10 }}>
            
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} style={{ background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', background: 'var(--ivory)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-red)' }}>
                <MapPin size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Visit Us</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>Main Campus</strong><br/>
                #44/4, District Fund Road,<br/>
                Jayanagar 9th Block,<br/>
                Bengaluru, Karnataka 560069
              </p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }} style={{ background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', background: 'var(--ivory)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-red)' }}>
                <Phone size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Call Us</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                <strong>Admissions Helpline:</strong><br/>
                <a href="tel:+919000070888" style={{ color: 'var(--primary-red)', fontWeight: 600 }}>+91 90000 70888</a>
              </p>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>General Enquiries:</strong><br/>
                +91-80-43226666
              </p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }} style={{ background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', background: 'var(--ivory)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-red)' }}>
                <Mail size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Email Us</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                <strong>Admissions:</strong><br/>
                admissions@jainuniversity.ac.in
              </p>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>General Enquiries:</strong><br/>
                info@jainuniversity.ac.in
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Campus Locations & Departments */}
      <section className="section section-bg-ivory">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Other Campuses</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', borderLeft: '4px solid var(--primary-red)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Global Campus</h4>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Jakkasandra Post, Kanakapura Taluk,<br/>
                  Ramanagara District, Karnataka 562112
                </p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', borderLeft: '4px solid var(--primary-red)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>City Campus</h4>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  #34, 1st Cross, JC Road,<br/>
                  Bengaluru 560027<br/>
                  Phone: +91-80-43430100
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
            <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Department Emails</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden' }}>
              <tbody>
                {[
                  { dept: 'International Admissions', email: 'international@jainuniversity.ac.in' },
                  { dept: 'Placements & Careers', email: 'placements@jainuniversity.ac.in' },
                  { dept: 'Research & Innovation', email: 'research@jainuniversity.ac.in' },
                  { dept: 'Alumni Relations', email: 'alumni@jainuniversity.ac.in' },
                  { dept: 'Media & PR', email: 'media@jainuniversity.ac.in' }
                ].map((item, i) => (
                  <tr key={i} style={{ borderBottom: i === 4 ? 'none' : '1px solid #eee' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--charcoal-black)' }}>{item.dept}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#555' }}><a href={`mailto:${item.email}`} style={{ color: 'var(--primary-red)' }}>{item.email}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </div>
      </section>

      {/* Form and Map Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Send Us a Message</h2>
              <p style={{ color: '#555', marginBottom: '2rem' }}>Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit' }} />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
                    <input type="tel" id="phone" placeholder="+91 9876543210" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit' }} />
                  </div>
                </div>
                <div>
                  <label htmlFor="program" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Program of Interest</label>
                  <select id="program" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit', background: 'white' }}>
                    <option value="">Select a Program</option>
                    <option value="engineering">Engineering & Technology</option>
                    <option value="management">Commerce & Management</option>
                    <option value="sciences">Sciences</option>
                    <option value="humanities">Humanities & Social Sciences</option>
                    <option value="design">Design</option>
                    <option value="law">Law</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>
                <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Our Location</h2>
              <p style={{ color: '#555', marginBottom: '2rem' }}>Find us at our Main Campus in the heart of Bengaluru.</p>
              
              <div style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                {/* Embedded Google Map - Placeholder coords for Jayanagar, Bangalore */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6186419515983!2d77.5843463148216!3d12.93220499088225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1bc88cb37%3A0x2899478f4b1fa0!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689255866164!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
