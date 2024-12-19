import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

// Import your own images
import image1 from '../assets/image1.JPG';
import image2 from '../assets/image2.JPG';
import image3 from '../assets/image3.JPG';

const images = [image1, image2, image3];

function Home() {
  const [isAboutMeOpen, setAboutMeOpen] = useState(false);
  const [isExperienceOpen, setExperienceOpen] = useState(false);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Hero Text */}
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        FIZA OMER
      </motion.h1>

      {/* Image Row */}
      <div className="gallery-row">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* About Me Dropdown */}
      <motion.div className="about-me-section">
        <div
          className="about-me-title"
          onClick={() => setAboutMeOpen(!isAboutMeOpen)}
          style={{ cursor: 'pointer' }}
        >
          About Me
        </div>
        <AnimatePresence>
          {isAboutMeOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <div className="about-me-description">
                Welcome to my personal website made with React, JS, and CSS! I am a current senior at UC San Diego studying 
                Cognitive Science ML and Computer Science. During my time at UCSD I've been fortunate enough to learn different 
                niches in AI and have found a special interest in leveraging AI to solve complex challenges that make real impact 
                on people's lifestyles. I’ve developed software for healthcare diagnostics and apps that optimize tech workflows.
                Assides from tech, I love exploring new places and sitting by the ocean!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Work Experience Dropdown */}
      <motion.div className="experience-section">
        <div
          className="experience-title"
          onClick={() => setExperienceOpen(!isExperienceOpen)}
          style={{ cursor: 'pointer' }}
        >
          Work Experience
        </div>
        <AnimatePresence>
          {isExperienceOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <div className="experience-item">
                <h3 className="experience-role">
                  UCSD School of Medicine - Machine Learning Engineer
                  <br />
                  <span className="experience-dates">June 2024 - Present</span>
                </h3>
                <p className="experience-description">
                  - Developing a Python based AI solution using Convolutional Neural Networks (CNNs) in TensorFlow to classify nasal cavity 
                  tumors as benign or cancerous, reducing need for invasive procedures and accelerating non-invasive diagnostics. 
                  Applied statistical methods for data preprocessing, augmentation, and hyperparameter tuning to optimize model performance <br />
                  - Collaborating with medical professionals to curate a robust dataset of 1,000+ tumor images; performing exploratory data 
                  analysis and deploying insights for improved medical diagnostics
                </p>
              </div>

              <div className="experience-item">
                <h3 className="experience-role">GoSaaS Inc. <br /> ML Engineering Intern</h3>
                <p className="experience-description">
                  - Designed a Python based Retrieval-Augmented Generation (RAG) system using Langchain, SpaCy and vector databases to 
                  streamline access to client and product specifications, history, and configuration data, regardless of query specificity– 
                  improving search relevance by 35% <br />
                  - Implemented Natural Language Processing (NLP) techniques to develop ML applications, with scikit-learn and PyTorch for 
                  integration into client software, reducing manual effort by 30%
                </p>
              </div>

              <div className="experience-item">
                <h3 className="experience-role">Iradah <br /> Product Management Intern</h3>
                <p className="experience-description">
                  - Orchestrated product lifecycle of two new apparel items, from design to launch, including marketing and coordinating 
                  logistics between distributors and sellers <br />
                  - Generated $40,000 in sales within two weeks of launch through collaborations with local organizations at UC San Diego; 
                  profits supported humanitarian aid

                </p>
              </div>

              <div className="experience-item">
                <h3 className="experience-role">GoSaaS Inc. <br /> Software Engineering Intern</h3>
                <p className="experience-description">
                  - Contributed to the design and development of GoSaaS’s product Archiver, specializing in storage and accessibility of historical 
                  data, by identifying and resolving software bugs and issues. <br />
                  - Assisted in executing test plans to ensure the functionality and performance of the software, specifically in optimizing efficiency 
                  of only migrating relevant data to the cloud.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Home;
