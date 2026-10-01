import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TitleRevealProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  delay?: number;
}

export const TitleReveal: React.FC<TitleRevealProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  delay = 0,
}) => {
  const alignmentClass =
    align === 'center'
      ? 'text-center items-center mx-auto'
      : align === 'right'
      ? 'text-right items-end ml-auto'
      : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignmentClass} ${className}`}>
      {/* Eyebrow with smooth fade and upward drift */}
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          {eyebrow}
        </motion.div>
      )}

      {/* Main Title with Masked Reveal */}
      <div className="overflow-hidden py-1 w-full">
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.85,
            delay: delay + 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {title}
        </motion.div>
      </div>

      {/* Subtitle / Description */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.7,
            delay: delay + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-2 w-full"
        >
          {subtitle}
        </motion.div>
      )}
    </div>
  );
};

export const TextReveal: React.FC<{
  children: ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <div className="overflow-hidden inline-block w-full py-0.5">
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      whileInView={{ y: '0%', opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  </div>
);
