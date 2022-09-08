import React from 'react';
import { motion } from 'framer-motion';
import { StyledLoaderDiv, StyledLoader } from './Loader.style.jsx';

const Loader = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.6,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const circleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };
  const circleTransition = {
    repeat: Infinity,
    repeatType: 'reverse',
    duration: 0.6,
    ease: 'easeInOut',
  };

  return (
    <StyledLoaderDiv>
      <StyledLoader>
        <motion.div
          className='loader-container'
          variants={containerVariants}
          initial='start'
          animate='end'
        >
          <motion.span
            variants={circleVariants}
            transition={circleTransition}
          ></motion.span>
          <motion.span
            variants={circleVariants}
            transition={circleTransition}
          ></motion.span>
          <motion.span
            variants={circleVariants}
            transition={circleTransition}
          ></motion.span>
        </motion.div>
      </StyledLoader>
    </StyledLoaderDiv>
  );
};

export default Loader;
