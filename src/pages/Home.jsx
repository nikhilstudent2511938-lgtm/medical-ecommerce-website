import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new");
  };

  return (
    <div className="center-with-button">
      <button onClick={handleClick} className="nav-button-left">
        GO TO HOME PAGE
      </button>
      <div className="card-container">
        <div className="property-card">
          <a href="#">
            <div className="property-image">
              <div className="property-image-title">
                <h5>ARUNAII MEDICALS</h5>
              </div>
            </div>
          </a>
          <div className="property-description">
            <h5 className="para">ARUNAII MEDICALS</h5>
            <p className="para">ARUNAII MEDICALS is a leading healthcare provider in the region, offering comprehensive medical services to patients of all ages. With over two decades of experience in the medical field, we have established ourselves as a trusted name in healthcare excellence and patient care. Our state-of-the-art facilities are equipped with the latest medical technology and equipment to ensure accurate diagnoses and effective treatments. We have a team of highly qualified and experienced doctors, nurses, and healthcare professionals who are dedicated to providing compassionate care to every patient. At ARUNAII MEDICALS, we believe that healthcare should be accessible and affordable for everyone. We offer a wide range of services including emergency care, inpatient and outpatient services, diagnostic imaging, laboratory tests, and specialized departments for various medical conditions. Our commitment to quality healthcare, patient safety, and customer satisfaction has made us the preferred choice for thousands of patients across the region. We continuously invest in training our staff and upgrading our infrastructure to meet international healthcare standards.</p>
          </div>
          <a href="#">
            <div className="property-social-icons"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
