import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ExpandableCard({ title, date, location, link, website, children, tags }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`experience-item ${isOpen ? 'open' : ''}`}>
      <div className="experience-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="job-title">{title}</span>
        <span className="date-range">{date}</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="experience-content"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="experience-meta">
              {location}
              <span className="meta-separator">|</span>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {website}
                </a>
              )}
            </div>
            <div>{children}</div>
            <div className="tech-tags">
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExpandableCard;
