import { Link } from "react-router-dom";

import "./_registration_screen.scss";

import Logo from "../../assets/Logo.png";

export default function RegistrationScreen() {
    return (
        <>
            <div className="div2">
                <h1>Cadastre-se</h1>
                <img alt="Logo" src={Logo} />
                <form>
                    <input type="text" id="nickname" name="nickname" placeholder="Nome de Usuário" required />
                    <input type="text" id="name" name="name" placeholder="Nome Completo" required />
                    <input type="text" id="telephone" name="telephone" placeholder="Telefone Celular" required />
                    <input type="email" id="email" name="email" placeholder="E-mail" required />
                    <input type="password" id="password" name="password" placeholder="Senha" required />
                    <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirmar Senha" required />
                </form>
                <div className="btns">
                    <button type="submit">
                        <Link to="/login_screen" className="text">
                            Cadastrar
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}