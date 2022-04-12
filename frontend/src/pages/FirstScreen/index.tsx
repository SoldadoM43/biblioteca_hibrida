import { Link } from "react-router-dom";

import "./home.scss";

import Logo from "../../assets/Logo.png";

export default function FirtScreen() {
    return (
        <div className="div1">
            <h1>Início</h1>
            <img alt="Logo" src={Logo} />
            <div className="btns">
                <button>
                    <Link to="/login_screen" className="text">
                        Login
                    </Link>
                </button>
                <button>
                    <Link to="/registration_screen" className="text">
                        Cadastrar
                    </Link>
                </button>
            </div>
        </div>
    );
}