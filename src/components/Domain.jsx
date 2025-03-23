import { useNavigate } from "react-router-dom";
import "../App.css";
import PropTypes from "prop-types";

const Domain = ({ domains }) => {
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
    <main id="domain" className="px-4 py-12 bg-gray-100/95 ">
      <h1 className="text-5xl font-normal text-center my-14 text-[#535bf2] font-[Fraunces]">
        Domains
      </h1>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {domains.map((domain, index) => (
            <div
              key={`${domain.name}-${index}`}
              className="w-80 h-96 p-6 rounded-xl shadow-lg transition-transform duration-300 ease-in-out flex flex-col items-center bg-[#f7f4e3] border border-red-400 cursor-pointer hover:scale-105 hover:shadow-2xl"
              onClick={() => handleCardClick(domain)}
            >
              <img
                src={domain.image}
                alt={domain.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium text-sky-600 mb-2 font-[Fraunces]">
                {domain.name}
              </h3>
              <p className="text-gray-700 text-center text-md">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Domain;

Domain.propTypes = {
  domains: PropTypes.array.isRequired,
};
