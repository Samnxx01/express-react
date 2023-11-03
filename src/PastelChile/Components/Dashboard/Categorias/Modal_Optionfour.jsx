import React, { Fragment, useState, useEffect } from 'react';

function Modal_Optionfour() {
  const [formData, setFormData] = useState({
    nombre: '',
    referencia: '',
    estado: true,
    regisUsu: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura/cierre del modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleAgregar = async (e) => {
    e.preventDefault();
    // Obtener el token del usuario registrado del almacenamiento local
    const token = localStorage.getItem('token'); 

    try {
      const response = await fetch('http://localhost:8000/api/categorias/guardarcategoria/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'metasploit': `${token}`, 
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Categoría agregada con éxito.');
        setIsModalOpen(false); // Cerrar el modal después de agregar la categoría con éxito
      } else {
        console.error('Error al agregar la categoría.');
      }
    } catch (error) {
      console.error('Error al agregar la categoría:', error);
    }
  }

  return (
    <Fragment>
      <div className="wrapper-modal">
        <a href="#demo-modal" className="btn-modal"
          style={{
            textDecoration: "none", padding: "15px", backgroundColor: "#5500cb", color: "white",
            fontSize: "15px", borderRadius: "8px", cursor: "pointer"
          }}
          onClick={() => setIsModalOpen(true)} // Abrir el modal al hacer clic en "Agregar"
        >
          Agregar
        </a>
      </div>

      {isModalOpen && (
        <div id="demo-modal" className="modal001">
          <div className="modal__content">
            <h1>Añadiendo datos</h1>
            <p>¡Agrega nuevas categorías!</p>
            <form action="" method="" className="form009" onSubmit={handleAgregar}>
              <div className="form0010">
                <div className="input005">
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre" className="input006" value={formData.nombre} onChange={handleInputChange} required />
                  <span className="span007"></span>
                </div>
                <div className="input005">
                  <input type="text" name="referencia" id="referencia" placeholder="Referencia" className="input006" value={formData.referencia} onChange={handleInputChange} required />
                  <span className="span007"></span>
                </div>
                <button type="submit" className="view001">Agregar</button>
              </div>
            </form>
            <a href="#" className="modal__close" onClick={() => setIsModalOpen(false)}>&times;</a>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Modal_Optionfour;



