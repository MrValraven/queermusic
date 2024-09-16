import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/music-svgrepo-com.svg';
import './styles.css'; // Import your CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo-image" /> {/* Replace with the path to your logo image */}
                </Link>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Agenda</Link></li>
                    <li><Link to="/artists">Artistas</Link></li>
                    <li className="dropdown">
                        <p className="dropdown-toggle">
                            Categorias
                        </p>
                        <ul className="dropdown-menu">
                            <li><Link to="/categorias/agenciamento">Agenciamento / Booking</Link></li>
                            <li><Link to="/categorias/audiovisuais">Audiovisuais</Link></li>
                            <li><Link to="/categorias/composicao">Composição</Link></li>
                            <li><Link to="/categorias/danca">Dança</Link></li>
                            <li><Link to="/categorias/interpretacao">Interpretação / Execução</Link></li>
                            <li><Link to="/categorias/gravacao">Gravação / Edição</Link></li>
                            <li><Link to="/categorias/promocao">Promoção / Distribuição</Link></li>
                            <li><Link to="/categorias/teatro">Teatro</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/noticias">Notícias</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
