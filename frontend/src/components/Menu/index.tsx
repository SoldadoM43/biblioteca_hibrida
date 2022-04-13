import { Link } from "react-router-dom";

import { BiLogOut } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { RiBookmarkFill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineFavorite } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdHome, IoMdNotifications } from "react-icons/io";

import "./_menu.scss";

import Logo from "../../assets/Logo.png"
import Perfil from "../../assets/Perfil.jpg";

export default function Menu() {
    return (
        <>
            <div className="sidebar">
                <Link to="/home_screen" style={{ textDecoration: 'none' }}>
                    <div className="nome_logo">
                        <img src={Logo} alt="Logo" />
                        <span>Arte da Leitura</span>
                    </div>
                </Link>
                <div className="navigation">
                    <ul>
                        <li>
                            <div className="card">
                                <Link to="/home_screen" style={{ textDecoration: 'none' }}>
                                    <IoMdHome className="icon" />
                                    <span> Home </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <Link to="/libraries_screen" style={{ textDecoration: 'none' }}>
                                    <GiBookshelf className="icon" />
                                    <span> Bibliotecas </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <Link to="/favorite_screen" style={{ textDecoration: 'none' }}>
                                    <MdOutlineFavorite className="icon" />
                                    <span> Favoritos </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <Link to="/saved_screen" style={{ textDecoration: 'none' }}>
                                    <RiBookmarkFill className="icon" />
                                    <span> Salvos </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <Link to="/information_help_screen" style={{ textDecoration: 'none' }}>
                                    <AiOutlineInfoCircle className="icon" />
                                    <span> Informações e Ajuda </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <Link to="/messages_screen" style={{ textDecoration: 'none' }}>
                                    <FiMessageSquare className="icon" />
                                    <span> Mensagens </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <Link to="/notifications_screen" style={{ textDecoration: 'none' }}>
                                    <IoMdNotifications className="icon" />
                                    <span> Notificações </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card2">
                                <div className="profile">
                                    <Link to="/profile_screen" style={{ textDecoration: 'none' }}>
                                        <div className="profile_details">
                                            <img src={Perfil} alt="perfil" />
                                            <div className="name_rm">
                                                <div className="name">Diego Novaes</div>
                                                <div className="rm">#06240</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}