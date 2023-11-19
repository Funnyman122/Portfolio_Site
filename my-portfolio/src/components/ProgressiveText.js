import React, { useState, useEffect } from 'react';

const phrases = [
  'Decentralised stonks',
  'Centralised Systems r flawed',
  'Long Live The Revolution',
  // ...add more phrases as needed
];

const ProgressiveText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (isAdding) {
      if (displayedText.length < phrases[phraseIndex].length) {
        setTimeout(() => {
          setDisplayedText(phrases[phraseIndex].substr(0, displayedText.length + 1));
        }, 100); // Speed of adding characters
      } else {
        setTimeout(() => setIsAdding(false), 2000); // Wait time before removing text
      }
    } else {
      if (displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText(phrases[phraseIndex].substr(0, displayedText.length - 1));
        }, 100); // Speed of removing characters
      } else {
        // Move to the next phrase, looping back to start if at the end of the array
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAdding(true);
      }
    }
  }, [displayedText, isAdding, phraseIndex]);

  return (
    <div className="progressive-text">
      {displayedText}
    </div>
  );
};

export default ProgressiveText;
