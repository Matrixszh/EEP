"use client";
import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react"; // You can install lucide-react or use another icon library

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust the scroll position to when the button should appear
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen for the scroll event
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-[#9E0CCA] text-white rounded-full shadow-lg ${
        isVisible ? "block" : "hidden"
      } transition-opacity duration-300 z-50`}
      aria-label="Back to top"
    >
      <ArrowUpCircle size={24} />
    </button>
  );
};

export default BackToTopButton;
