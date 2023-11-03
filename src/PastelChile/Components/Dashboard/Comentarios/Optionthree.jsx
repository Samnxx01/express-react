import React, { Fragment } from 'react'
import Modal_Optionthree from './Modal_Optionthree'

function Optionthree() {
    return (
        <Fragment>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Diagnosticar Comentarios</h1>
                    
                </div>

                <div className="report-body">
                    <div className="report-topic-heading">
                        <h3 className="t-op">ID</h3>
                        <h3 className="t-op">Nombre</h3>
                        <h3 className="t-op">Comentario</h3>
                        <h3 className="t-op">Puntuación</h3>
                        <h3 className="t-op">Configuración</h3>
                    </div>

                    <div className="items">
                        <div className="item1">
                            <h3 className="t-op-nextlvl">1 </h3>
                            <h3 className="t-op-nextlvl">Juandi</h3>
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quasi? Temporibus ullam, asperiores odit optio magnam quod totam soluta perferendis, commodi ipsum inventore fugiat iste voluptatum ducimus blanditiis consectetur pariatur.</h3>
                            <h3 className="t-op-nextlvl">2</h3>
                            <Modal_Optionthree />
                        </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">2 </h3>
                            <h3 className="t-op-nextlvl">pepito</h3>
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quasi? Temporibus ullam, asperiores odit optio magnam quod totam soluta perferendis, commodi ipsum inventore fugiat iste voluptatum ducimus blanditiis consectetur pariatur.</h3>
                            <h3 className="t-op-nextlvl">3</h3>
                            <Modal_Optionthree />
                        </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">3 </h3>
                            <h3 className="t-op-nextlvl">riveros</h3>
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quasi? Temporibus ullam, asperiores odit optio magnam quod totam soluta perferendis, commodi ipsum inventore fugiat iste voluptatum ducimus blanditiis consectetur pariatur.</h3>
                            <h3 className="t-op-nextlvl">2</h3>
                            <Modal_Optionthree />
                        </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">4 </h3>
                            <h3 className="t-op-nextlvl">juan</h3>
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quasi? Temporibus ullam, asperiores odit optio magnam quod totam soluta perferendis, commodi ipsum inventore fugiat iste voluptatum ducimus blanditiis consectetur pariatur.</h3>
                            <h3 className="t-op-nextlvl">4</h3>
                            <Modal_Optionthree />
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Optionthree