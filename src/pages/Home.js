import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

// Import your own images
import image1 from '../assets/image1.JPG';
import image2 from '../assets/image2.JPG';
import image3 from '../assets/image3.JPG';

const images = [image1, image2, image3];

function Home() {
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

      {/* About Me Section */}
      <motion.div
        className="about-me-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="about-me-title">About Me</div>
        <div className="about-me-description">
          Welcome to my personal website made with React, JS, and CSS! I am a current senior at UC San Diego studying 
          Cognitive Science ML and Computer Science. During my time at UCSD I've been fortunate enough to learn different 
          niches in AI and have found a special interest in leveraging AI to solve complex challenges that make real impact 
          on people's lifestyles. I’ve developed software for healthcare diagnostics and apps that optimize tech workflows.
          Assides from tech, I love exploring new places and sitting by the ocean!
        </div>
      </motion.div>

      {/* Experience Section with Subheadings */}
      <motion.div
        className="experience-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="experience-title">Experiences</div>

        <div className="experience-item">
          <h3 className="experience-role">UCSD School of Medicine<br />Machine Learning Engineer</h3>
          <p className="experience-description">
          - Developed an AI software using Convolutional Neural Networks (CNNs) to classify nasal cavity tumors as benign or cancerous, 
          achieving high accuracy through data preprocessing, augmentation, and hyperparameter tuning <br />
          - Collaborated with medical professionals to curate and annotate a robust dataset of tumor images; optimized model performance 
          using techniques like transfer learning

          </p>
          <p>            
          </p>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">GoSaaS Inc. <br /> ML Engineering Intern</h3>
          <p className="experience-description">
          - Developed and deployed ML applications integrated into client software, implementing algorithms that optimized processes, 
          reduced manual work, and significantly improved software efficiency and processing times <br />
          - Implemented Retrieval-Augmented Generation (RAG) to enhance AI-driven applications, enabling more accurate and context-aware 
          results by integrating information retrieval with generative models
          </p>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Iradah <br />Product Management Intern</h3>
          <p className="experience-description">
          - Orchestrated the entire product lifecycle, from designing clothing products to formulating a comprehensive product launch plan, 
          overseeing marketing initiatives, and efficiently coordinating logistics between distributors and sellers<br />
          - Generated a remarkable $40,000 in sales within two weeks of launching through collaborations with local organizations within 
          UC San Diego to promote the product and increase sales


          </p>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">GoSaaS Inc. <br />Software Engineeting Intern</h3>
          <p className="experience-description">
          - Contributed to the design and development of GoSaas’s product Archiver, specializing in storage and accessibility of historical 
          data, by identifying and resolving software bugs and issues<br />
          - Assisted in executing test plans to ensure the functionality and performance of the software specifically in optimizing efficiency 
          of only migrating relevant data to the cloud

          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
