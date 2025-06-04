import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  const [showTimeoutMsg, setShowTimeoutMsg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTimeoutMsg(true), 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      {showTimeoutMsg && (
        <div style={{ marginTop: '1rem', color: '#d9534f', fontWeight: 'bold' }}>
          This is taking longer than expected. Please check your connection or try again.
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;