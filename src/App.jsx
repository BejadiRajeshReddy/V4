import "./App.css";
import { useState, useRef } from "react";
import Img from "../src/assets/image.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/About.jsx";
import Domain from "./components/Domain.jsx";
import PropTypes from "prop-types";
import Detail from "./components/Detail.jsx";

function Main({
  domains,
  name,
  handleNameChange,
  fileName,
  fileInputRef,
  handleFileChange,
  subject,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitting(true); // Start loading
  };

  const navigate = useNavigate();

  const handleCardClick = (domain) => {
    const domainMap = {
      "Full-Stack Development": "full-stack",
      "Frontend Development": "frontend",
      "Backend Development": "backend",
      "Software Development": "software",
      "Cloud Computing": "cloud",
      "UI/UX Design": "ui-ux",
      "DevOps & Automation": "devops",
      "Networking & IT Support": "network",
      "Database Management & SQL": "database",
    };

    const formattedName = domainMap[domain.name];
    navigate(`/domains/${formattedName}`);
  };

  return (
    <div>
      <div className="hero">
        <span className="tag-label animate-bounce">WELCOME TO TECHSPIRA</span>
        <h1>
          We help interns to work <br />
          their way to the stars
        </h1>
        <p>Join TechSpira and launch your career in technology</p>
        <button className="btn" id="about">
          <a href="#apply">Start Your Journey →</a>
        </button>
      </div>
      <section className="about">
        <h2 className="heading">About Us</h2>
        <p>
          TechSpira is a leading technology company focused on innovative
          solutions in software development, machine learning, and data
          analytics. We&apos;ve helped countless interns grow into successful
          tech professionals. At TechSpira, we believe in nurturing future
          talent. Our internship programs are designed to provide hands-on
          experience, bridging academic learning with real-world challenges.
          Under the leadership of our visionary directors, we strive to create
          an environment where creativity meets technology, empowering both
          organizations and aspiring professionals to excel. With a robust
          foundation, a team of 50-100 dedicated professionals, and an
          unwavering commitment to quality, TechSpira Technologies is not just a
          company—it&apos;s a launchpad for technological innovation and
          professional growth.
        </p>
      </section>

      <main id="domain">
        <h1>Domains</h1>
        <div className="carousel-container">
          <div className="carousel">
            <div className="domain-grid">
              {domains.map((domain, index) => (
                <div
                  key={`${domain.name}-${index}`}
                  className="card"
                  onClick={() => handleCardClick(domain)} // Handle card click
                >
                  <img src={domain.image} alt={domain.name} />
                  <h3>{domain.name}</h3>
                  <p>{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="form-container">
        <div id="apply" className="form-card">
          <div className="form-header">
            <h2>Apply For Internship</h2>
            <p>Join our team and kickstart your career</p>
          </div>

          <form
            className="form-content"
            action="https://formsubmit.co/enasup@techspira.co.in"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={subject} />

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="techspira@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+91 9201 000-000"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">College</label>
                <input
                  type="text"
                  name="college"
                  className="form-input"
                  placeholder="College"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  placeholder="Bangalore"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Domain</label>
                <select name="domain" className="form-select" required>
                  <option value="">Select a domain</option>
                  {domains.map((domain) => (
                    <option key={domain.name} value={domain.name}>
                      {domain.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="file-upload">
              <label className="form-label">Resume</label>
              <div
                className="upload-zone"
                onClick={() =>
                  fileInputRef.current && fileInputRef.current.click()
                }
              >
                <div className="upload-icon">📄</div>
                <div className="upload-text">
                  {fileName || "Drop your resume here, or click to select"}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="Resume"
                  className="file-input"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  style={{ display: "none" }}
                />
                <p className="upload-help">PDF, DOC, or DOCX up to 10MB</p>
              </div>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  fileName: PropTypes.string.isRequired,
  fileInputRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  handleFileChange: PropTypes.func.isRequired,
  subject: PropTypes.string.isRequired,
};

function App() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("TechSpira Internship Application");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const domains = [
    {
      name: "Full-Stack Development",
      description: "Build both frontend and backend for applications",
      image: Img.full,
    },
    {
      name: "Frontend Development",
      description:
        "Create visually stunning and user-friendly interfaces (React, Angular, Vue.js)",
      image: Img.front,
    },
    {
      name: "Backend Development",
      description:
        "Build the server-side and APIs that power applications (Node.js, Python, Java, PHP)",
      image: Img.back,
    },
    {
      name: "Software Development",
      description: "Build next-gen applications and services",
      image: Img.software,
    },
    {
      name: "Cloud Computing",
      description:
        "Leverage cloud platforms for scalable and reliable solutions (AWS, Azure, Google Cloud)",
      image: Img.cloud,
    },
    {
      name: "UI/UX Design",
      description:
        "Design engaging user interfaces and optimize user experiences",
      image: Img.UX,
    },
    {
      name: "DevOps & Automation",
      description: "Automate workflows and improve software delivery processes",
      image: Img.devops,
    },
    {
      name: "Networking & IT Support",
      description: "Ensure seamless IT infrastructure and troubleshooting",
      image: Img.network,
    },
    {
      name: "Database Management & SQL",
      description: "Manage and query databases for data-driven applications",
      image: Img.sql,
    },
  ];

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setSubject(`TechSpira Internship Application from ${newName}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        e.target.value = null;
        setFileName("");
        return;
      }
      setFileName(file.name);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              domains={domains}
              name={name}
              handleNameChange={handleNameChange}
              fileName={fileName}
              fileInputRef={fileInputRef}
              handleFileChange={handleFileChange}
              subject={subject}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/domains/:domainName" element={<Detail />} />
        <Route path="/domains" element={<Domain domains={domains} />} />
      </Routes>
    </>
  );
}

export default App;
