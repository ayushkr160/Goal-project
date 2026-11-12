const logo = new URL(
    '../../BhojanwaLogo.png',
    import.meta.url
).href;
import{ useState,useEffect } from "react";

export const Header=()=>{

    let btnName="Login";

    const [btnNameState,setBtnNameState]=useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Bhojanwa logo"  width="200"/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" 
                onClick={()=>{btnNameState === "Login" ? setBtnNameState("Logout"): setBtnNameState("Login");
                    console.log(btnNameState);
                }
                }>{btnNameState}</button> 
            </ul>
            </div>  
        </div>
    );
};

export default Header;
