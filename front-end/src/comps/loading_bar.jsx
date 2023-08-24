import React from 'react';

function CircularProgressBar({ progress }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="circular-progress" width="70" height="70">
      <circle
        className="progress-bar"
        cx="35"
        cy="35"
        r={radius}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
      />
      <circle className="completion-marker" cx="35" cy="35" r="5" />
    </svg>

  );
}

export default CircularProgressBar;