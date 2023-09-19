import React, { useEffect, useState } from 'react';
import CrudProduc from '../Cards/CrudProduc';
import Option1Dash from './Option1Dash';

function DashBoard() {

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
	// })

	return (
		<div>
			<body className='c'>
				<header className='header-dash'>
					<div className="logosec">
						<div className="logo">CompuFet</div>
						<img src=
							"https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
							className="icn menuicn"
							id="menuicn"
							alt="menu-icon" />
					</div>

					<div className="searchbar">
						<input type="text"
							placeholder="Search" />
						<div className="searchbtn">
							<img src=
								"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
								className="icn srchicn"
								alt="search-icon" />
						</div>
					</div>

					<div className="message">
						<div className="circle"></div>
						<img src=
							"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
							className="icn"
							alt="" />
						<div className="dp">
							<img src=
								"https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
								className="dpicn"
								alt="dp" />
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
										"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
										className="nav-img"
										alt="report" />
									<h3> Reportes</h3>
								</div>

								<div className={`nav-option optionselect1 ${activeTab === 4 ? "active" : ""}`}
									onClick={() => handleTabClick(4)}>
									<img src=
										"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
										className="nav-img"
										alt="institution" />
									<h3> Comentarios</h3>
								</div>

								<div className={`nav-option optionselect1 ${activeTab === 5 ? "active" : ""}`}
									onClick={() => handleTabClick(5)}>
									<img src=
										"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
										className="nav-img"
										alt="blog" />
									<h3> Perfiles</h3>
								</div>

								<div className={`nav-option optionselect1 ${activeTab === 6 ? "active" : ""}`}
									onClick={() => handleTabClick(6)}>
									<img src=
										"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
										className="nav-img"
										alt="settings" />
									<h3> Configuraciones</h3>
								</div>

								<div className="nav-option logout">
									<img src=
										"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
										className="nav-img"
										alt="logout" />
									<h3>Cerrar Sesión</h3>
								</div>

							</div>
						</nav>
					</div>
					<div className="main-dash">

						<div className="searchbar2">
							<input type="text"
								name=""
								id=""
								placeholder="Search" />
							<div className="searchbtn">
								<img src=
									"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
									className="icn srchicn"
									alt="search-button" />
							</div>
						</div>
						{/* Aqui va el box-container y report-container*/}
						{activeTab === 1 && (
							<Option1Dash />
						)}
						{activeTab === 2 && (
							<div>
								<CrudProduc />
							</div>
						)}
						{activeTab === 3 && (
							<div><h2>Contenido del primer 3</h2></div>
						)}
						{activeTab === 4 && (
							<div><h2>Contenido del primer 4</h2></div>
						)}
						{activeTab === 5 && (
							<div><h2>Contenido del primer 5</h2></div>
						)}
						{activeTab === 6 && (
							<div><h2>Contenido del primer 6</h2></div>
						)}


					</div>
				</div>
			</body>

		</div>
	)
}

export default DashBoard

// https://www.geeksforgeeks.org/how-to-create-responsive-admin-dashboard-using-html-css-javascript/