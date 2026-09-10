import { useEffect, useState } from 'react';
import './LoadingScreen.css';
import logo from '../../assets/logo.png';

const MIN_DISPLAY_MS = 900; // keep it visible at least this long so it doesn't just flash

function LoadingScreen({ onFinish }) {
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);

      setTimeout(() => {
        setFadingOut(true);
        setTimeout(() => {
          setHidden(true);
          onFinish?.();
        }, 400); // matches CSS fade-out duration
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
      return () => window.removeEventListener('load', finish);
    }
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div className={`loading-screen${fadingOut ? ' loading-screen--fade-out' : ''}`}>
      <div className="loading-screen__badge">
        <img src={logo} alt="" className="loading-screen__logo" />
        <svg className="loading-screen__ring" viewBox="0 0 100 100">
          <circle
            className="loading-screen__ring-track"
            cx="50"
            cy="50"
            r="46"
          />
          <circle
            className="loading-screen__ring-progress"
            cx="50"
            cy="50"
            r="46"
          />
        </svg>
      </div>
    </div>
  );
}

export default LoadingScreen;