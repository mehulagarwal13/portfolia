import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Navikenz · Noida</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              ML & Backend Development — Mar 2026 to Present. Developed
              ML-integrated backend services improving data processing efficiency
              by 25%. Built scalable REST APIs using Node.js and Python handling
              high-volume requests. Implemented API testing and validation using
              Postman ensuring reliability and performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Pristine Business Solutions · Noida</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Enterprise Systems & Data Validation — May 2025 to July 2025.
              Developed automated data validation pipelines improving workflow
              reliability by 30%. Optimized complex SQL queries reducing
              execution time by 40%. Built monitoring tools to detect anomalies
              and ensure system stability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science</h4>
                <h5>JIIT, Noida</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Jaypee Institute of Information Technology, Noida. CGPA: 8.2.
              Strong foundation in Data Structures, Algorithms, System Design,
              OOPs, and Database Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
