import React from 'react';
import styles from '../styles/Spinner.module.css';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'medium',
  color = '#007bff'
}) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>
      <div 
        className={styles.spinnerInner}
        style={{ borderColor: color }}
      />
    </div>
  );
};

export default Spinner;
