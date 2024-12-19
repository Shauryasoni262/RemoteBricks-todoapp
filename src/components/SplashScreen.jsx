import React, { useEffect } from "react";
import '../styles/SplashScreen.css';  

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div id="loader-container">
      <label className="loading-title">Loading ...</label>
      <span className="loading-circle sp1">
        <span className="loading-circle sp2">
          <span className="loading-circle sp3"></span>
        </span>
      </span>
    </div>
  );
}
 