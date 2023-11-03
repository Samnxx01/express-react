import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Optiontwo from './Productos/Optiontwo';
import Optionone from './Optionone';
import Optionthree from './Comentarios/Optionthree';
import Optionfour from './Categorias/Optionfour';
import NavbarPal from '../Navbar/NabvarPal';


function Admin() {

    // useEffect(() => {
    let menuicn = document.querySelector(".menuicn");
    let nav = document.querySelector(".navcontainer");

    if (menuicn !== null && nav !== null) {
        menuicn.addEventListener("click", () => {
            nav.classList.toggle("navclose");
        });
    }
    // Selección de cada item
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    // Cambia de color al seleccionar un item
    const tabs = document.querySelectorAll(".nav-option");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(o => o.classList.remove("active")
            );
            tab.classList.add("active");
        });
    });
    // Función para cerrar sesión del administrador
    const handleAdminLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('nickname');
        window.location = '/';
    };
    // })

    return (
        <div>
            <NavbarPal />
            <body className='c'>
                <header className='header-dash'>
                    <div className="logosec">
                        <div className="logo">Pasteleria</div>
                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                            className="icn menuicn"
                            id="menuicn"
                            alt="menu-icon" />
                    </div>

                    <div className="message">
                        <div className="circle"></div>
                        <div className="dp">
                            <Link to="Iniciar_Sesion" className="link005">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                                    className="dpicn"
                                    alt="dp" />
                                <ul className='dp-ul'>
                                    <li className='dp-li'>Cerrar Sesión</li>
                                </ul>
                            </Link>
                        </div>
                    </div>

                </header>

                <div className="main-container001">
                    <div className="navcontainer">
                        <nav className="nav-dash">
                            <div className="nav-upper-options">
                                <div className={`nav-option optionselect1 ${activeTab === 1 ? "active" : ""}`}
                                    onClick={() => handleTabClick(1)}>
                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                        className="nav-img"
                                        alt="dashboard" />
                                    <h3> Dashboard</h3>
                                </div>

                                <div className={`nav-option optionselect1 ${activeTab === 2 ? "active" : ""}`}
                                    onClick={() => handleTabClick(2)}>
                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                        className="nav-img"
                                        alt="articles" />
                                    <h3> Productos</h3>
                                </div>

                                <div className={`nav-option optionselect1 ${activeTab === 3 ? "active" : ""}`}
                                    onClick={() => handleTabClick(3)}>
                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                        className="nav-img"
                                        alt="blog" />
                                    <h3> Comentarios</h3>
                                </div>
                                <div className={`nav-option optionselect1 ${activeTab === 4 ? "active" : ""}`}
                                    onClick={() => handleTabClick(4)}>
                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                        className="nav-img"
                                        alt="blog" />
                                    <h3> Categorias</h3>
                                </div>

                                <div className="nav-option logout" onClick={handleAdminLogout}>
                                    <Link to="/" className="link005">
                                        <img
                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                            className="nav-img"
                                            alt="logout"
                                        />
                                        <h3>Cerrar Sesión</h3>
                                    </Link>
                                </div>

                            </div>
                        </nav>
                    </div>
                    <div className="main-dash">


                        {/* Aqui va el box-container y report-container*/}
                        {activeTab === 1 && (
                            <Optionone />
                        )}
                        {activeTab === 2 && (
                            <div>
                                <Optiontwo />
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div>
                                <Optionthree />
                            </div>
                        )}
                        {activeTab === 4 && (
                            <div>
                                <Optionfour />
                            </div>
                        )}
                    </div>
                </div>
            </body>

        </div>
    )
}

export default Admin