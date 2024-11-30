import React from "react";
import styles from "./Dentists.module.css";

const dentists = [
  {
    name: "Jim Carry",
    specialty: "Orthodontist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Wade Warren",
    specialty: "Endodontist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Jenny Wilson",
    specialty: "Periodontist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Jacob Jones",
    specialty: "Pediatric Dentist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Dentists = () => {
  return (
    <div className={styles.container}>
      {dentists.map((dentist, index) => (
        <div key={index} className={styles.card}>
          <img src={dentist.image} alt={dentist.name} className={styles.image} />
          <div className={styles.info}>
            <h3>{dentist.name}</h3>
            <p>{dentist.specialty}</p>
            <div className={styles.linkedinIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png" // LinkedIn logo
                alt="LinkedIn"
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dentists;
