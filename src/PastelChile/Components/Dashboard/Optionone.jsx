import Modal_Optionone from './Modal_Optionone';

function Optionone() {
    return (
        <div>
            <div>
                <div className="report-container">
                    <div className="report-header">
                        <h1 className="recent-Articles">Perfil del Contacto</h1>
                        <Modal_Optionone />
                    </div>
                    <div className="report-body-v2">
                        <div className="items">
                            <div className="item2">
                                <h3 className="t-op">Nombre de la empresa: </h3>                                
                                <h3 className="t-op">Pasteleria Chilena</h3>                                
                            </div>
                            <div className="item2">
                                <h3 className="t-op">Nombre de la persona: </h3>                                
                                <h3 className="t-op">Juan Diego Sanchez Riveros</h3>                                
                            </div>
                            <div className="item2">
                                <h3 className="t-op">N° Telefónico: </h3>                                
                                <h3 className="t-op">+57 317 570 3832</h3>                                
                            </div>
                            <div className="item2">
                                <h3 className="t-op">Correo Electronico: </h3>                                
                                <h3 className="t-op">juan_sanchezri@fet.edu.co</h3>                                
                            </div>
                            <div className="item2">
                                <h3 className="t-op">Lugar: </h3>                                
                                <h3 className="t-op">Cra 49 # 69 - 69</h3>                                
                            </div>
                            <div className="item2">
                                <h3 className="t-op">Dirección: </h3>                                
                                <h3 className="t-op">Neiva-Huila</h3>                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Optionone