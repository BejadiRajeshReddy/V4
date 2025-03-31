import "./App.css";
import { useState, useRef } from "react";
import Img from "../src/assets/image.js";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/About.jsx";
import PropTypes from "prop-types";
import Detail from "./components/Detail.jsx";
import Domain from "./components/Domain.jsx";
import Hero from "./components/Hero.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

  const handleSubmit = () => {
    setIsSubmitting(true); // Start loading
  };

  const location = useLocation();
  
  // Handle hash navigation when route changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <div>
        <Hero />
      </div>
      <section>
        <About />
      </section>

      <section id="domain">
        <Domain domains={domains} />
      </section>

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
      route:"full-stack",
      description: "Build both frontend and backend for applications",
      image: Img.full,
      title: "Full-Stack Development",
      detailedInfo:
        "Full-stack development covers the complete web application development process, connecting the front-end user interfaces with back-end server systems. Our full-stack developers work across the entire technology stack, delivering cohesive solutions from database design to user interfaces.",
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Git",
        "REST APIs",
      ],
      skills: [
        "Problem-solving",
        "Full application lifecycle",
        "Database design",
        "API integration",
      ],
      projects: [
        "E-commerce platforms",
        "Content management systems",
        "Social networking applications",
        "Enterprise dashboards",
      ],
      learningPath: [
        "JavaScript fundamentals",
        "Frontend frameworks",
        "Backend & API development",
        "Database management",
        "Deployment & DevOps",
      ],
      duration: "3-6 months",
    },
    {
      route:"frontend",
      description:
        "Create visually stunning and user-friendly interfaces (React, Angular, Vue.js)",
      image: Img.front,
      title: "Frontend Development",
      detailedInfo:
        "Frontend development focuses on creating the visual elements and interactive experiences that users directly engage with. Our frontend specialists create responsive, accessible, and performant interfaces that work across all devices and provide seamless user experiences.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Angular",
        "Vue.js",
        "Tailwind CSS",
      ],
      skills: [
        "UI/UX implementation",
        "Responsive design",
        "State management",
        "Component architecture",
      ],
      projects: [
        "Interactive web applications",
        "E-commerce storefronts",
        "Data visualization dashboards",
        "Progressive web apps",
      ],
      learningPath: [
        "HTML/CSS fundamentals",
        "JavaScript & DOM manipulation",
        "Modern frameworks",
        "State management",
        "Performance optimization",
      ],
      duration: "3 months",
    },
    {
      route:"BackEnd",
      description:
        "Build the server-side and APIs that power applications (Node.js, Python, Java, PHP)",
      image: Img.back,
      title: "Backend Development",
      detailedInfo:
        "Backend development powers the server-side logic, databases, and APIs that make applications function. Our backend engineers create robust, scalable systems that handle data processing, business logic, and security while ensuring optimal performance under high load.",
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "PHP",
        "SQL/NoSQL databases",
        "RESTful APIs",
        "GraphQL",
      ],
      skills: [
        "Server architecture",
        "Database management",
        "Authentication systems",
        "API design",
      ],
      projects: [
        "API development",
        "Database design",
        "Payment processing systems",
        "Content delivery networks",
      ],
      learningPath: [
        "Server-side programming",
        "Database fundamentals",
        "API development",
        "Authentication & security",
        "Scaling & optimization",
      ],
      duration: "3-4 months",
    },
    {
      route:"Software",
      description: "Build next-gen applications and services",
      image: Img.software,
      title: "Software Development",
      detailedInfo:
        "Software development focuses on creating standalone applications for desktop, mobile, and other platforms. Our software developers build reliable, efficient, and user-friendly applications that solve complex problems across different operating systems and devices.",
      technologies: ["C++", "Java", "C#", "Python", "Swift", "Kotlin", ".NET"],
      skills: [
        "Object-oriented programming",
        "Software architecture",
        "Testing & debugging",
        "Cross-platform development",
      ],
      projects: [
        "Desktop productivity tools",
        "Mobile applications",
        "Enterprise software",
        "System utilities",
      ],
      learningPath: [
        "Programming fundamentals",
        "Data structures & algorithms",
        "Design patterns",
        "GUI development",
        "Testing & deployment",
      ],
      duration: "4-6 months",
    },
    {
      route:"Cloud",
      description:
        "Leverage cloud platforms for scalable and reliable solutions (AWS, Azure, Google Cloud)",
      image: Img.cloud,
      title: "Cloud Computing",
      detailedInfo:
        "Cloud computing leverages remote servers hosted on the internet to store, manage, and process data. Our cloud specialists architect scalable, cost-effective solutions using leading platforms like AWS, Azure, and Google Cloud to ensure reliability, security, and performance.",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Serverless",
      ],
      skills: [
        "Cloud architecture",
        "Infrastructure as Code",
        "Scalability planning",
        "Cost optimization",
      ],
      projects: [
        "Cloud migration",
        "Serverless applications",
        "Auto-scaling infrastructures",
        "Disaster recovery systems",
      ],
      learningPath: [
        "Cloud fundamentals",
        "Core services",
        "Security & compliance",
        "Architecture design",
        "DevOps integration",
      ],
      duration: "3-5 months",
    },
    {
      route:"Ui-Ux",
      description:
        "Design engaging user interfaces and optimize user experiences",
      image: Img.UX,
      title: "UI/UX Design",
      detailedInfo:
        "UI/UX design focuses on creating intuitive, accessible, and delightful user experiences. Our designers combine aesthetic sensibility with user research to create interfaces that are both beautiful and functional, ensuring users can accomplish their goals efficiently.",
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Prototyping tools",
        "Design systems",
        "Accessibility standards",
      ],
      skills: [
        "User research",
        "Wireframing",
        "Visual design",
        "Usability testing",
      ],
      projects: [
        "Mobile app redesigns",
        "Website UX improvements",
        "Design systems",
        "Interactive prototypes",
      ],
      learningPath: [
        "Design principles",
        "User research",
        "Wireframing & prototyping",
        "Visual design",
        "Usability testing",
      ],
      duration: "3 months",
    },
    {
      route:"DevOps",
      description: "Automate workflows and improve software delivery processes",
      image: Img.devops,
      title: "DevOps & Automation",
      detailedInfo:
        "DevOps combines development and operations practices to shorten the development lifecycle while delivering features, fixes, and updates frequently and reliably. Our DevOps engineers build automated pipelines that improve collaboration, quality, and delivery speed.",
      technologies: [
        "Git",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Ansible",
        "Terraform",
        "GitHub Actions",
      ],
      skills: [
        "CI/CD pipeline creation",
        "Infrastructure as Code",
        "Monitoring & logging",
        "Security integration",
      ],
      projects: [
        "Automated deployment pipelines",
        "Infrastructure automation",
        "Monitoring solutions",
        "Container orchestration",
      ],
      learningPath: [
        "Version control",
        "CI/CD fundamentals",
        "Container technologies",
        "Infrastructure as Code",
        "Monitoring & observability",
      ],
      duration: "3-5 months",
    },
    {
      route:"Network",
      description: "Ensure seamless IT infrastructure and troubleshooting",
      image: Img.network,
      title: "Networking & IT Support",
      detailedInfo:
        "Networking and IT support focuses on designing, implementing, and maintaining computer networks and providing technical assistance to users. Our network specialists ensure system reliability, performance, and security while resolving technical issues efficiently.",
      technologies: [
        "TCP/IP",
        "Routing protocols",
        "Firewalls",
        "VPNs",
        "Active Directory",
        "ITIL",
        "Support ticketing systems",
      ],
      skills: [
        "Network configuration",
        "Troubleshooting",
        "Security implementation",
        "User support",
      ],
      projects: [
        "Network design & implementation",
        "Security audits",
        "Technical documentation",
        "Support process improvements",
      ],
      learningPath: [
        "Networking fundamentals",
        "Support methodologies",
        "Security principles",
        "Troubleshooting techniques",
        "Documentation standards",
      ],
      duration: "2-4 months",
    },
    {
      route:"Database",
      description: "Manage and query databases for data-driven applications",
      image: Img.sql,
      title: "Database Management & SQL",
      detailedInfo:
        "Database management involves designing, implementing, and maintaining database systems that store and organize data efficiently. Our database specialists create optimized schemas, write performant queries, and ensure data integrity, security, and availability.",
      technologies: [
        "SQL",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Database design tools",
        "Backup & recovery systems",
      ],
      skills: [
        "Data modeling",
        "Query optimization",
        "Database administration",
        "Performance tuning",
      ],
      projects: [
        "Database schema design",
        "Migration projects",
        "Reporting systems",
        "Data warehousing",
      ],
      learningPath: [
        "SQL fundamentals",
        "Database design",
        "Performance optimization",
        "Administration basics",
        "Data security",
      ],
      duration: "2-4 months",
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
        <Route path="/domains/:domain" element={<Detail domains={domains}/>} />
        <Route path="/domains" element={<Domain domains={domains} />} />
      </Routes>
    </>
  );
}

export default App;
