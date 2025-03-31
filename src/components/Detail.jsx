// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Detail = ({domains}) => {
//   // const [selectedDomain, setSelectedDomain] = useState("full-stack");
//   const { domain } = useParams();

//   // useEffect(() => {
//   //   if (domain) {
//   //     setSelectedDomain(domain);
//   //   }
//   // }, [domain]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

  // const domainInfo = {
  //   "full-stack": {
  //     title: "Full-Stack Development",
  //     description: "Build both frontend and backend for applications",
  //     detailedInfo:
  //       "Full-stack development covers the complete web application development process, connecting the front-end user interfaces with back-end server systems. Our full-stack developers work across the entire technology stack, delivering cohesive solutions from database design to user interfaces.",
  //     technologies: [
  //       "JavaScript",
  //       "React",
  //       "Node.js",
  //       "Express",
  //       "MongoDB",
  //       "Git",
  //       "REST APIs",
  //     ],
  //     skills: [
  //       "Problem-solving",
  //       "Full application lifecycle",
  //       "Database design",
  //       "API integration",
  //     ],
  //     projects: [
  //       "E-commerce platforms",
  //       "Content management systems",
  //       "Social networking applications",
  //       "Enterprise dashboards",
  //     ],
  //     learningPath: [
  //       "JavaScript fundamentals",
  //       "Frontend frameworks",
  //       "Backend & API development",
  //       "Database management",
  //       "Deployment & DevOps",
  //     ],
  //     duration: "3-6 months",
  //   },
  //   "frontend": {
  //     title: "Frontend Development",
  //     description: "Create visually stunning and user-friendly interfaces",
  //     detailedInfo:
  //       "Frontend development focuses on creating the visual elements and interactive experiences that users directly engage with. Our frontend specialists create responsive, accessible, and performant interfaces that work across all devices and provide seamless user experiences.",
  //     technologies: [
  //       "HTML5",
  //       "CSS3",
  //       "JavaScript",
  //       "React",
  //       "Angular",
  //       "Vue.js",
  //       "Tailwind CSS",
  //     ],
  //     skills: [
  //       "UI/UX implementation",
  //       "Responsive design",
  //       "State management",
  //       "Component architecture",
  //     ],
  //     projects: [
  //       "Interactive web applications",
  //       "E-commerce storefronts",
  //       "Data visualization dashboards",
  //       "Progressive web apps",
  //     ],
  //     learningPath: [
  //       "HTML/CSS fundamentals",
  //       "JavaScript & DOM manipulation",
  //       "Modern frameworks",
  //       "State management",
  //       "Performance optimization",
  //     ],
  //     duration: "3 months",
  //   },
  //   "backend": {
  //     title: "Backend Development",
  //     description: "Build the server-side and APIs that power applications",
  //     detailedInfo:
  //       "Backend development powers the server-side logic, databases, and APIs that make applications function. Our backend engineers create robust, scalable systems that handle data processing, business logic, and security while ensuring optimal performance under high load.",
  //     technologies: [
  //       "Node.js",
  //       "Python",
  //       "Java",
  //       "PHP",
  //       "SQL/NoSQL databases",
  //       "RESTful APIs",
  //       "GraphQL",
  //     ],
  //     skills: [
  //       "Server architecture",
  //       "Database management",
  //       "Authentication systems",
  //       "API design",
  //     ],
  //     projects: [
  //       "API development",
  //       "Database design",
  //       "Payment processing systems",
  //       "Content delivery networks",
  //     ],
  //     learningPath: [
  //       "Server-side programming",
  //       "Database fundamentals",
  //       "API development",
  //       "Authentication & security",
  //       "Scaling & optimization",
  //     ],
  //     duration: "3-4 months",
  //   },
  //   "software": {
  //     title: "Software Development",
  //     description: "Create desktop and mobile applications",
  //     detailedInfo:
  //       "Software development focuses on creating standalone applications for desktop, mobile, and other platforms. Our software developers build reliable, efficient, and user-friendly applications that solve complex problems across different operating systems and devices.",
  //     technologies: ["C++", "Java", "C#", "Python", "Swift", "Kotlin", ".NET"],
  //     skills: [
  //       "Object-oriented programming",
  //       "Software architecture",
  //       "Testing & debugging",
  //       "Cross-platform development",
  //     ],
  //     projects: [
  //       "Desktop productivity tools",
  //       "Mobile applications",
  //       "Enterprise software",
  //       "System utilities",
  //     ],
  //     learningPath: [
  //       "Programming fundamentals",
  //       "Data structures & algorithms",
  //       "Design patterns",
  //       "GUI development",
  //       "Testing & deployment",
  //     ],
  //     duration: "4-6 months",
  //   },
  //   "cloud": {
  //     title: "Cloud Computing",
  //     description: "Deploy and manage applications in the cloud",
  //     detailedInfo:
  //       "Cloud computing leverages remote servers hosted on the internet to store, manage, and process data. Our cloud specialists architect scalable, cost-effective solutions using leading platforms like AWS, Azure, and Google Cloud to ensure reliability, security, and performance.",
  //     technologies: [
  //       "AWS",
  //       "Azure",
  //       "Google Cloud",
  //       "Docker",
  //       "Kubernetes",
  //       "Terraform",
  //       "Serverless",
  //     ],
  //     skills: [
  //       "Cloud architecture",
  //       "Infrastructure as Code",
  //       "Scalability planning",
  //       "Cost optimization",
  //     ],
  //     projects: [
  //       "Cloud migration",
  //       "Serverless applications",
  //       "Auto-scaling infrastructures",
  //       "Disaster recovery systems",
  //     ],
  //     learningPath: [
  //       "Cloud fundamentals",
  //       "Core services",
  //       "Security & compliance",
  //       "Architecture design",
  //       "DevOps integration",
  //     ],
  //     duration: "3-5 months",
  //   },
  //   "ui-ux": {
  //     title: "UI/UX Design",
  //     description: "Design intuitive and engaging user experiences",
  //     detailedInfo:
  //       "UI/UX design focuses on creating intuitive, accessible, and delightful user experiences. Our designers combine aesthetic sensibility with user research to create interfaces that are both beautiful and functional, ensuring users can accomplish their goals efficiently.",
  //     technologies: [
  //       "Figma",
  //       "Adobe XD",
  //       "Sketch",
  //       "InVision",
  //       "Prototyping tools",
  //       "Design systems",
  //       "Accessibility standards",
  //     ],
  //     skills: [
  //       "User research",
  //       "Wireframing",
  //       "Visual design",
  //       "Usability testing",
  //     ],
  //     projects: [
  //       "Mobile app redesigns",
  //       "Website UX improvements",
  //       "Design systems",
  //       "Interactive prototypes",
  //     ],
  //     learningPath: [
  //       "Design principles",
  //       "User research",
  //       "Wireframing & prototyping",
  //       "Visual design",
  //       "Usability testing",
  //     ],
  //     duration: "3 months",
  //   },
  //   "devops": {
  //     title: "DevOps & Automation",
  //     description: "Streamline development processes and deployment",
  //     detailedInfo:
  //       "DevOps combines development and operations practices to shorten the development lifecycle while delivering features, fixes, and updates frequently and reliably. Our DevOps engineers build automated pipelines that improve collaboration, quality, and delivery speed.",
  //     technologies: [
  //       "Git",
  //       "Jenkins",
  //       "Docker",
  //       "Kubernetes",
  //       "Ansible",
  //       "Terraform",
  //       "GitHub Actions",
  //     ],
  //     skills: [
  //       "CI/CD pipeline creation",
  //       "Infrastructure as Code",
  //       "Monitoring & logging",
  //       "Security integration",
  //     ],
  //     projects: [
  //       "Automated deployment pipelines",
  //       "Infrastructure automation",
  //       "Monitoring solutions",
  //       "Container orchestration",
  //     ],
  //     learningPath: [
  //       "Version control",
  //       "CI/CD fundamentals",
  //       "Container technologies",
  //       "Infrastructure as Code",
  //       "Monitoring & observability",
  //     ],
  //     duration: "3-5 months",
  //   },
  //   "network": {
  //     title: "Networking & IT Support",
  //     description:
  //       "Manage network infrastructure and provide technical support",
  //     detailedInfo:
  //       "Networking and IT support focuses on designing, implementing, and maintaining computer networks and providing technical assistance to users. Our network specialists ensure system reliability, performance, and security while resolving technical issues efficiently.",
  //     technologies: [
  //       "TCP/IP",
  //       "Routing protocols",
  //       "Firewalls",
  //       "VPNs",
  //       "Active Directory",
  //       "ITIL",
  //       "Support ticketing systems",
  //     ],
  //     skills: [
  //       "Network configuration",
  //       "Troubleshooting",
  //       "Security implementation",
  //       "User support",
  //     ],
  //     projects: [
  //       "Network design & implementation",
  //       "Security audits",
  //       "Technical documentation",
  //       "Support process improvements",
  //     ],
  //     learningPath: [
  //       "Networking fundamentals",
  //       "Support methodologies",
  //       "Security principles",
  //       "Troubleshooting techniques",
  //       "Documentation standards",
  //     ],
  //     duration: "2-4 months",
  //   },
  //   "database": {
  //     title: "Database Management & SQL",
  //     description: "Design and optimize databases for applications",
  //     detailedInfo:
  //       "Database management involves designing, implementing, and maintaining database systems that store and organize data efficiently. Our database specialists create optimized schemas, write performant queries, and ensure data integrity, security, and availability.",
  //     technologies: [
  //       "SQL",
  //       "MySQL",
  //       "PostgreSQL",
  //       "MongoDB",
  //       "Redis",
  //       "Database design tools",
  //       "Backup & recovery systems",
  //     ],
  //     skills: [
  //       "Data modeling",
  //       "Query optimization",
  //       "Database administration",
  //       "Performance tuning",
  //     ],
  //     projects: [
  //       "Database schema design",
  //       "Migration projects",
  //       "Reporting systems",
  //       "Data warehousing",
  //     ],
  //     learningPath: [
  //       "SQL fundamentals",
  //       "Database design",
  //       "Performance optimization",
  //       "Administration basics",
  //       "Data security",
  //     ],
  //     duration: "2-4 months",
  //   },
  // };

//   return (
//     <div className="min-h-screen bg-custom py-8 px-4 pt-20">
//       <div className="max-w-6xl mx-auto">
//         {/* <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
//           Domains Details
//         </h1> */}

//         {/* Domain Selection */}
//         {/* <div className="flex flex-wrap justify-center gap-3 mb-8">
//           {Object.keys(domainInfo).map((domain) => (
//             <button
//               key={domain}
//               onClick={() => setSelectedDomain(domain)}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 selectedDomain === domain
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {domainInfo[domain].title}
//             </button>
//           ))}
//         </div> */}

//         {/* Selected Domain Info */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           {/* Header */}
//           <div className="bg-indigo-600 p-6">
//             <h2 className="text-2xl font-bold text-white">
//               {domains}
//             </h2>
//             <p className="text-indigo-100 mt-2">
//               {/* {domainInfo[selectedDomain].description} */}
//             </p>
//           </div>

//           {/* Content */}
//           <div className="p-6">
//             <div className="prose max-w-none mb-6">
//               <p className="text-gray-700">
//                 {domainInfo[selectedDomain].detailedInfo}
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 mb-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   Technologies
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {domainInfo[selectedDomain].technologies.map(
//                     (tech, index) => (
//                       <span
//                         key={index}
//                         className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   Key Skills
//                 </h3>
//                 <ul className="list-disc pl-5 text-gray-700 space-y-1">
//                   {domainInfo[selectedDomain].skills.map((skill, index) => (
//                     <li key={index}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 mb-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   Example Projects
//                 </h3>
//                 <ul className="list-disc pl-5 text-gray-700 space-y-1">
//                   {domainInfo[selectedDomain].projects.map((project, index) => (
//                     <li key={index}>{project}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   Learning Path
//                 </h3>
//                 <ol className="list-decimal pl-5 text-gray-700 space-y-1">
//                   {domainInfo[selectedDomain].learningPath.map(
//                     (step, index) => (
//                       <li key={index}>{step}</li>
//                     )
//                   )}
//                 </ol>
//               </div>
//             </div>

//             {/* Internship Info */}
//             <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
//               <h3 className="text-lg font-semibold text-indigo-800 mb-2">
//                 Internship Opportunity
//               </h3>
//               <p className="text-indigo-700">
//                 <span className="font-medium">Duration:</span>{" "}
//                 {domainInfo[selectedDomain].duration}
//               </p>
//               <p className="text-indigo-700 mt-2">
//                 Gain hands-on experience working with real-world projects under
//                 the guidance of experienced mentors.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;




import { useParams } from "react-router-dom";

import PropTypes from 'prop-types';

const Detail = ({ domains }) => {
  const { domain } = useParams(); // Get domain from URL params
  const selectedDomain = domains.find((d) => d.route === domain); // Find matching domain

  if (!selectedDomain) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-bold text-lg">
        Domain not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-custom py-8 px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Selected Domain Info */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 p-6">
            <h2 className="text-2xl font-bold text-white">{selectedDomain.title}</h2>
            <p className="text-indigo-100 mt-2">{selectedDomain.description}</p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="prose max-w-none mb-6">
              <p className="text-gray-700">{selectedDomain.detailedInfo}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Skills</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {selectedDomain.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Example Projects</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {selectedDomain.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Learning Path</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  {selectedDomain.learningPath.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Internship Info */}
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Internship Opportunity</h3>
              <p className="text-indigo-700">
                <span className="font-medium">Duration:</span> {selectedDomain.duration}
              </p>
              <p className="text-indigo-700 mt-2">
                Gain hands-on experience working with real-world projects under the guidance of experienced mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


Detail.propTypes = {
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      detailedInfo: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      projects: PropTypes.arrayOf(PropTypes.string).isRequired,
      learningPath: PropTypes.arrayOf(PropTypes.string).isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Detail;
