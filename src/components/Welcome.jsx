import { useState, useEffect } from "react";
import "./Welcome.css";

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(-1); // Tracks the currently visible <p>
  const [isHovered, setIsHovered] = useState(false); // State for button hover
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Track button visibility
  const [lastParagraphContent, setLastParagraphContent] = useState(
    "Click the button below."
  ); // State for the last paragraph content
  const paragraphs = [
    "Welcome!",
    "I am Ron.",
    "A software Engineer",
    "If you want to know more about me",
    lastParagraphContent, // Use the state variable for the last paragraph content
  ];

  useEffect(() => {
    if (currentIndex < paragraphs.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    // Set the button visible when the last paragraph is shown
    if (currentIndex >= paragraphs.length - 1) {
      setIsButtonVisible(true);
    }
  }, [currentIndex, paragraphs.length]);

  const handleButtonClick = () => {
    // Reload the page when the button is clicked
    window.location.reload();
  };

  // Effect to change body background color on hover
  useEffect(() => {
    if (isHovered) {
      document.body.style.backgroundColor = "var(--peach)"; // Change background color on hover
      setLastParagraphContent("Click that shit mah boi."); // Change the content of the last paragraph on hover
    } else {
      document.body.style.backgroundColor = "var(--olive)"; // Reset background color when hover ends
      setLastParagraphContent("Click the button below."); // Reset the content of the last paragraph
    }
  }, [isHovered]);

  return (
    <div className="wrapper">
      <div className={`message ${isHovered ? "hovered" : ""}`}>
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className={`message-text ${
              index === currentIndex ||
              (index === paragraphs.length - 1 &&
                currentIndex >= paragraphs.length - 1)
                ? "visible"
                : ""
            }`}
          >
            {text}
          </p>
        ))}
      </div>

      <div
        className={`buttonWrapper ${
          currentIndex >= paragraphs.length - 1 ? "visible" : ""
        }`}
      >
        <button
          className="welcomeButton"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={!isButtonVisible} // Disable the button when not visible
          onClick={handleButtonClick} // Add onClick handler
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default Welcome;
