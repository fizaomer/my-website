import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import image1 from '../assets/image1.JPG';
import image2 from '../assets/image2.JPG';
import image3 from '../assets/image3.JPG';
import AMPL from '../assets/AMPL.JPG';
import MTC from '../assets/MTC.JPG';


import { FiMapPin, FiExternalLink } from 'react-icons/fi';

function Home() {
  return (
    <div className="page-wrapper">
      {/* HERO SECTION */}
      <div className="landing-container">
        <motion.h1
          className="landing-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          FIZA OMER
        </motion.h1>

        <motion.p
          className="landing-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          Machine Learning Engineer & Creative Technologist
        </motion.p>

        <motion.div
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          onClick={() => {
            const target = document.getElementById('about');
            target?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          ↓ Scroll to explore
        </motion.div>
      </div>

      {/* ABOUT SECTION */}
      <motion.section className="about-section" id="about">
        <motion.img
          src={image2}
          alt="About"
          className="about-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.4 }}
        />

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a senior at UC San Diego studying Cognitive Science with an emphasis in Machine Learning & Neural Computation —
            passionate about building meaningful, impactful tools.
          </p>
          <p>
            My work lives at the intersection of AI and human-centered design — from healthcare to activism — where technology becomes
            a tool for impact, not just automation. I’m most excited by projects that challenge the norms, elevate voices, or solve
            real-world problems through intelligent systems and intuitive design.
          </p>
        </motion.div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        className="experience-section"
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="experience-title">Professional Experience</h2>

        {/* Experience 1 */}
        <details className="experience-item">
          <summary>
            <span className="job-title">Machine Learning Engineer @ UC San Diego School of Medicine</span>
            <span className="date-range">Nov 2024 – Present</span>
          </summary>
          <div className="experience-content">
            <div className="experience-meta">
              <FiMapPin className="meta-icon" /> San Diego, CA
              <span className="meta-separator">|</span>
              <FiExternalLink className="meta-icon" />
              <a href="https://medschool.ucsd.edu" target="_blank" rel="noopener noreferrer">
                medschool.ucsd.edu
              </a>
            </div>
            <p>
              Built a CNN-based model for classifying nasal cavity tumors using TensorFlow. Collaborated with medical professionals to
              optimize a diagnostic tool using 1,000+ image samples and contributed to data curation and pipeline deployment.
            </p>
            <div className="tech-tags">
              <span>TensorFlow</span>
              <span>Python</span>
              <span>Medical AI</span>
              <span>Data Curation</span>
            </div>
          </div>
        </details>

        {/* Experience 2 */}
        <details className="experience-item">
          <summary>
            <span className="job-title">Machine Learning Engineering Intern @ GoSaaS Inc.</span>
            <span className="date-range">July 2024 - Sept 2024</span>
          </summary>
          <div className="experience-content">
            <div className="experience-meta">
              <FiMapPin className="meta-icon" /> Irvine, CA
              <span className="meta-separator">|</span>
              <FiExternalLink className="meta-icon" />
              <a href="https://gosaas.io" target="_blank" rel="noopener noreferrer">
                gosaas.io
              </a>
            </div>
            <p>
              Built a Retrieval-Augmented Generation (RAG) system using Langchain and vector databases to improve search
              across internal documentation. Reduced manual lookup time by 35%.
            </p>
            <div className="tech-tags">
              <span>Langchain</span>
              <span>Python</span>
              <span>RAG</span>
              <span>Vector DB</span>
            </div>
          </div>
        </details>

        {/* Experience 3 */}
        <details className="experience-item">
          <summary>
            <span className="job-title">Software Engineering Intern @ GoSaaS Inc.</span>
            <span className="date-range">Jan 2022 - March 2022</span>
          </summary>
          <div className="experience-content">
            <div className="experience-meta">
              <FiMapPin className="meta-icon" /> Irvine, CA
              <span className="meta-separator">|</span>
              <FiExternalLink className="meta-icon" />
              <a href="https://gosaas.io" target="_blank" rel="noopener noreferrer">
                gosaas.io
              </a>
            </div>
            <p>
              Contributed to the development and optimization of GoSaaS’s Archiver product, focused on secure storage and efficient access to historical data.
              Collaborated with the engineering team to identify and resolve backend bugs, implement feature enhancements, and support cloud data migration strategies — improving performance and reducing system load.
            </p>
            <div className="tech-tags">
              <span>Java</span>
              <span>Spring</span>
              <span>Cloud Migration</span>
              <span>System Optimization</span>
            </div>
          </div>
        </details>

        {/* Experience 4 */}
        <details className="experience-item">
          <summary>
            <span className="job-title">Product Management Intern @ Iradah</span>
            <span className="date-range">Nov 2023 - Jan 2024</span>
          </summary>
          <div className="experience-content">
            <div className="experience-meta">
              <FiMapPin className="meta-icon" /> Remote
              <span className="meta-separator">|</span>
              <FiExternalLink className="meta-icon" />
              <a href="https://iradah.co" target="_blank" rel="noopener noreferrer">
                iradah.co
              </a>
            </div>
            <p>
              Orchestrated product lifecycle of two new apparel items, from design to launch, including
              marketing and coordinating logistics between distributors and sellers.
              Generated $40,000 in sales within two weeks of launch through collaborations with local
              organizations at UC San Diego; profits supported humanitarian aid.
            </p>
            <div className="tech-tags">
              <span>Product</span>
              <span>Logistics</span>
              <span>Design</span>
              <span>Marketing</span>
            </div>
          </div>
        </details>
      </motion.section>
      {/* LEADERSHIP SECTION */}
      <section className="leadership-section">
        <h2 className="leadership-title">Leadership Experience</h2>
        <div className="leadership-grid">
          <div className="leadership-card">
            <img src={image1} alt="Senator" />
            <div className="leadership-info">
              <h3>Associated Students at UC San Diego</h3>
              <p>Ellected senator representing over 40,000 undergraduate students at UC San Diego.</p>
            </div>
          </div>

          <div className="leadership-card">
            <img src={MTC} alt="MTC" />
            <div className="leadership-info">
              <h3>Muslim Tech Collaborative</h3>
              <p>Co-Founder & Vice President of MTC, an organization at UC San Diego for Muslims in Tech.</p>
            </div>
          </div>

          <div className="leadership-card">
            <img src={AMPL} alt="AMPL" />
            <div className="leadership-info">
              <h3>Association of Muslims in Politics & Law</h3>
              <p>Co-Founder & President of AMPL; a pre-law society for Muslims at UC San Diego.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
