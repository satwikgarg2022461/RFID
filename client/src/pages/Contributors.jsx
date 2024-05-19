import React from "react";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";

const Contributors = () => {
  const contributors = [
    {
      name: "Satwik garg",
      photo: "/images/Satwik.jpg",
      email: "satwikgarg2003@gmail.com",
      github: "https://github.com/satwikgarg2022461?tab=repositories",
      linkedin: "https://www.linkedin.com/in/satwik-garg-67a926247/"
    },
    {
      name: "Sarthak Shrivastav",
      photo: "/images/Sarthak.jpeg",
      email: "jane.smith@example.com",
      github: "https://github.com/janesmith",
      linkedin: " "
    },
    {
      name: "Saarthak Saxena",
      photo: "/images/Saarthak.jpeg",
      email: "saarthak22421@iiitd.ac.in",
      github: "https://github.com/Saarthakkj",
      linkedin: " https://www.linkedin.com/in/saarthaksaxena17/"
    },
    {
      name: "Shreyansh Shrivastav",
      photo: "/images/shreyansh.jpeg",
      email: "shreyansh22485@iiitd.ac.in",
      github: "https://github.com/Shreyansh22485",
      linkedin: "https://www.linkedin.com/in/emilydavis/"
    },
    {
      name: "Saurav Haldar",
      photo: "/images/saurav.jpg",
      email: "saurav22464@iiitd.ac.in",
      github: "https://github.com/Clever-Anomaly",
      linkedin: "https://www.linkedin.com/in/saurav-haldar-555004276/", 
    },
  ];

  return (
    <div>
      <Header></Header>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Contributors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full h-[58.7vh]">
            {contributors.map((contributor, index) => (
            <div key={index} className="text-center">
              <img
                src={contributor.photo}
                alt={contributor.name}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold">{contributor.name}</h2>
              <p className="text-gray-600">{contributor.email}</p>
              <a
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                GitHub
              </a>
              <a
                href={contributor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              ></a>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Contributors;
