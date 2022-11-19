import React from 'react'
import '../css/filtro.css'
import Logo from '../images/logo.svg'
import DocOne from '../images/doctor_one.svg'
import DocTwo from '../images/doctor_two.svg'

const Filtro = () => {



    return (
        <div>
            <div className="body-body">
                <div className="doctor-one">
                    <div className="img-one">
                        <img src={DocOne} alt="Primeiro médico(a)" />
                    </div>
                    <div className="text-one">
                        <div className="sub">
                            <h2>Dr. Augusto de Moraes</h2>
                        </div>
                        <div className="sub-i">
                            <h3>Otorrinolaringologista</h3>
                        </div>
                        <div className="sub-e">
                            <p>Endereço: Rua das Cámelias, 321, Jardim Flora<br />Indaiatuba-SP</p>
                        </div>
                    </div>
                    <div className="btn-agenda">
                        <button className="btn">
                            Ver Agenda
                        </button>
                    </div>
                </div>
                <div className="doctor-two">
                    <div className="img-two">
                        <img src={DocTwo} alt="Segundo médico(a)" />
                    </div>
                    <div className="text-two">
                        <div className="sub">
                            <h2>Dra. Maria Luisa Silva</h2>
                        </div>
                        <div className="sub-i">
                            <h3>Ginecologista</h3>
                        </div>
                        <div className="sub-e">
                            <p>Endereço: Rua XX de Julho, 654, Centro<br />Indaiatuba-SP</p>
                        </div>
                    </div>
                    <div className="btn-agenda">
                        <button className="btn">
                            Ver Agenda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtro