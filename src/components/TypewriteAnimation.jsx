import React, { useState, useEffect } from 'react';

// The TypewriterAnimation component handles the typing and deleting effect.
const TypewriterAnimation = ({ words, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // Initial speed

  const currentWord = words[wordIndex % words.length];

  useEffect(() => {
    // This function manages the core logic of the animation loop
    const handleType = () => {
      // 1. Determine the text to display: either adding a character or removing one
      const fullText = currentWord;
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      // 2. Adjust speed for the animation effect
      if (isDeleting) {
        // Faster speed when deleting
        setTypingSpeed(50);
      } else if (!isDeleting && updatedText.length === fullText.length) {
        // Long pause at the end of a typed word before deleting starts
        setTypingSpeed(1000); 
      } else {
        // Normal typing speed
        setTypingSpeed(150);
      }

      // 3. Handle state transitions
      if (!isDeleting && updatedText === fullText) {
        // If typing is complete, switch to deleting mode
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        // If deleting is complete, switch to the next word and start typing
        setIsDeleting(false);
        setWordIndex((prevIndex) => prevIndex + 1);
      }
    };

    // Set the interval for the animation loop
    const timer = setTimeout(handleType, typingSpeed);

    // Cleanup function to clear the timer when the component unmounts or state changes
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, currentWord, words]);

  return (
    <p className={className}>
      {currentText}
      {/* Blinking cursor effect (optional) */}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypewriterAnimation;