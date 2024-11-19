import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Welcome.css";

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [lastParagraphContent, setLastParagraphContent] = useState(
    "Click the button below."
  );
  const navigate = useNavigate(); // Initialize navigate

  const paragraphs = [
    "Welcome!",
    "I am Ron.",
    "A software Engineer",
    "If you want to know more about me",
    lastParagraphContent,
  ];

  useEffect(() => {
    if (currentIndex < paragraphs.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (currentIndex >= paragraphs.length - 1) {
      setIsButtonVisible(true);
    }
  }, [currentIndex, paragraphs.length]);

  useEffect(() => {
    if (isHovered) {
      document.body.style.backgroundColor = "var(--peach)";
      setLastParagraphContent("Click that shit mah boi.");
    } else {
      document.body.style.backgroundColor = "var(--olive)";
      setLastParagraphContent("Click the button below.");
    }
  }, [isHovered]);

  const handleButtonClick = () => {
    navigate("/FirstPage"); // Navigate to the main page
  };

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
          disabled={!isButtonVisible}
          onClick={handleButtonClick}
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default Welcome;
