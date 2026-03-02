import React from "react";
import { Link } from "react-router-dom";
import "../Newpage.css";


export default function NewPage() {
    return (
        <>
        <div className="header">
            <button className="Brand-but">
                <i class="bi bi-capsule"></i>
                <span>Brands</span>
            </button>
            <h1 className="main-name">ARUNAII MEDICAL</h1>
            <Link to="/login">
                <button className="Login-but">
                <i className="bi bi-person-circle" aria-hidden="true"></i>
                <span className="login-text">Login</span>
            </button>
            </Link>
            <button className="cart-but"><i class="bi bi-cart-check-fill"></i>Cart</button>
        </div>
        <input type="text" placeholder="Search for medicines and health products" className="search-bar"/>
        <div>
            <div className="L-pro">
            <h3>Leading products</h3>
            <div className="firstL-pro">
                <img src="./images/dolo.webp" alt="dolo 650"  className="dolo-650" />
                <h3 className="pr-name"> PRODUCT NAME:dolo 650</h3>
                <h3 className="pr-price">Price: ₹36.73(per strip)</h3>
                <button className="pr-button">Add products</button>

            </div>
            <div className="firstL-pro">
                <img src="./images/glyco-2.webp" alt="dolo 650"  className="dolo-650" />
                <h3 className="pr-name"> PRODUCT NAME:dolo 650</h3>
                <h3 className="pr-price">Price: ₹36.73(per strip)</h3>
                <button className="pr-button">Add products</button>

            </div>
            <div className="firstL-pro">
                <img src="./images/eldoper.webp" alt="dolo 650"  className="dolo-650" />
                <h3 className="pr-name"> PRODUCT NAME:dolo 650</h3>
                <h3 className="pr-price">Price: ₹36.73(per strip)</h3>
                <button className="pr-button">Add products</button>

            </div>
            <div className="firstL-pro">
                <img src="./images/dulco.jpg" alt="dolo 650"  className="dolo-650" />
                <h3 className="pr-name"> PRODUCT NAME:dolo 650</h3>
                <h3 className="pr-price">Price: ₹36.73(per strip)</h3>
                <button className="pr-button">Add products</button>

            </div>

        </div>
        
            

        </div>
        <div className="footer">
            <hr className="hr"></hr>
            <ul>
                <li className="lil"><a href="#">Contact us</a></li>
                <li className="lil"><a href="#">About us</a></li>
                <li className="lil"><a href="#">Terms and conditions</a></li>
                <li className="lil"><a href="#">Privacy policy</a></li>

            </ul>
            <img src="./images/sun-pharma-2.png" alt="BRAND" className="brand-img" />
            <img src="./images/cipla_logo.svg" alt="BRAND" className="brand-img" />
            <img src="./images/reddy.png" alt="BRAND" className="brand-img3" />
        </div>
        </>



    );
}
