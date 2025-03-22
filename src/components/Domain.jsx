import "../App.css";
import PropTypes from "prop-types";

const Domain = ({ domains = [] }) => {
  return (
    <main className="mt-10" id="domain">
      <h1>Domains</h1>
      <div className="carousel-container">
        <div className="carousel">
          <div className="domain-grid">
            {domains.map((domain, index) => (
              <div key={`${domain.name}-${index}`} className="card">
                <img src={domain.image} alt={domain.name} />
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Domain;

Domain.propTypes = {
  domains: PropTypes.array.isRequired,
};
