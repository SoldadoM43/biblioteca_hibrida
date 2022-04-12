import { Link } from "react-router-dom";

import "./_menu.scss";

import Logo from "../../assets/Logo.png"

export default function Menu() {
    return (
        <>
            <div className="sidebar"> 
                <img src={Logo} alt="Logo"/>

            </div>
        </>
    );
}