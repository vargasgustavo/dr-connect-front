import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Doc from '../images/doctor-home.png'
import '../css/homestyle.css'
import useDebounce from '../useDebounce';

const HomeMain = ({ value, onChange }) => {

    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    return (
        <>

            <div className="body">
                <div className="header-body">
                    <div className="left-header-body">
                        <h1>CONECTANDO<br />
                            MÉDICOS E <br />
                            PACIENTES</h1>
                    </div>
                    <div className="right-header-body">
                        <img alt='Doutora sorrindo' src={Doc} className="doctor-image" />
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h1>O que gostaria de agendar?</h1>
                    </div>
                    <div className="textfield">
                        <input type="search" name="convenio" placeholder="Escolha um convênio" value={displayValue} onChange={handleChange} />
                    </div>
                    <div className="textfield">
                        <input type="search" name="especialidade" placeholder="Escolha uma especialidade" value={displayValue} onChange={handleChange} />
                    </div>
                    <div className="card-button">
                        <Link to="/busca"><button className="btn-login trasitionButton" onClick={() => { }}>Buscar</button></Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="copy">
                <p>Dr. Connect serviços em saúde LTDA / CNPJ 67.465.390/0001-46 /
                    Endereço: Avenida Pequeri, 383, Jardim América,São Paulo-SP CEP 13222-200
                </p>
                <span>COPYRIGHT © 2022 TODOS OS DIREITOS RESERVADOS</span>
            </div>
        </>
    )
}

export default HomeMain