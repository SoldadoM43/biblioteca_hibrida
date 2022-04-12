import { Link } from "react-router-dom";

import "./_loginscreen.scss";

import Logo from "../../assets/Logo.png";

export default function LoginScreen() {
    return (
        <>
            <div className="div1">
                <h1>Login</h1>
                <img alt="Logo" src={Logo} />
                <form>
                    <input type="email" id="email" name="email" placeholder="E-mail" required/>
                    <input type="password" id="password" name="password" placeholder="Senha" required/>
                </form>
                <div className="btns">
                    <button type="submit">
                        <Link to="/home_screen" className="text">
                            Acessar
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}