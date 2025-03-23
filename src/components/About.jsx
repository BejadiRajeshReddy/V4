import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  
  const sectionClasses = isAboutPage 
    ? "min-h-screen bg-gray-100/95 flex flex-col sm:px-[10rem] justify-center items-center py-16" 
    : "py-16 bg-gray-100/95 flex flex-col sm:px-[10rem]";

  return (
    <section className={sectionClasses}>
      <h2 className="font-[Fraunces] text-[#535bf2] text-center text-5xl font-thin leading-[1.1] mb-8">
        About Us
      </h2>
      <p className="text-gray-700 px-12 text-md sm:px-0 text-justify sm:text-xl font-medium  leading-8">
        TechSpira is a leading technology company focused on innovative
        solutions in software development, machine learning, and data analytics.
        We&apos;ve helped countless interns grow into successful tech
        professionals. At TechSpira, we believe in nurturing future talent. Our
        internship programs are designed to provide hands-on experience,
        bridging academic learning with real-world challenges. Under the
        leadership of our visionary directors, we strive to create an
        environment where creativity meets technology, empowering both
        organizations and aspiring professionals to excel. With a robust
        foundation, a team of 50-100 dedicated professionals, and an unwavering
        commitment to quality, TechSpira Technologies is not just a
        company—it&apos;s a launchpad for technological innovation and
        professional growth.
      </p>
    </section>
  );
};
export default About;
