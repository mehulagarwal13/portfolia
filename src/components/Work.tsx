import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Sovaria",
    category: "Unified Backend Platform",
    tools: "NoSQL, Distributed Systems, Backend Architecture, API Design",
    image: "/images/callhq.png",
    link: "https://www.sovarias.in/",
  },
  {
    title: "ShopEase",
    category: "Inventory Management System",
    tools: "React.js, Node.js, Express.js, MongoDB",
    image: "/images/whatsapp.png",
    link: "https://shope-ease-lj5k.onrender.com/login",
  },
  {
    title: "Loving Krishna",
    category: "Client Website — ISKCON Project",
    tools: "Full-Stack Web Development, Client Delivery",
    image: "/images/broki.png",
    link: "https://www.lovingkrishnaservants.com/",
  },
  {
    title: "Code Similarity & Plagiarism Detector",
    category: "Academic Integrity Tool",
    tools: "Python, Flask, SQL, AST Parsing, Algorithms",
    image: "/images/orrdr.png",
    link: "https://cup-ifek.onrender.com/",
  },
  {
    title: "Rent-a-Style",
    category: "E-commerce Clothing Platform",
    tools: "HTML, CSS, JavaScript, TypeScript",
    image: "/images/callhq.png",
    link: "https://mehulagarwal1313.github.io/Ecommerce-webs/",
  },
  {
    title: "Spell Checker (C++)",
    category: "Algorithm-based Correction System",
    tools: "C++, STL, Levenshtein Distance Algorithm",
    image: "/images/whatsapp.png",
    link: "https://github.com/mehulagarwal1313/APS-PROJECT",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
