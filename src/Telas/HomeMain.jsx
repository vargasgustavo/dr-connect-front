import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'
import Doc from '../images/doctor-home.png'
import '../css/homestyle.css'

const HomeMain = () => {

    const [form, setForm] = useState({convenio: '', especialidade: ''})
    const updateForm = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleChange = e => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const Filtro = async(e) => {
        
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
                        <input type="text" name="convenio" placeholder="Escolha um convênio" value={form.convenio} onChange={updateForm}/>
                    </div>
                    <div className="textfield">
                        <input type="text" name="especialidade" placeholder="Escolha uma especialidade" value={form.especialidade} onChange={updateForm} />
                    </div>
                    <div className="card-button">
                        <Link to="/busca"><button className="btn-login trasitionButton" onClick={() => {}}>Buscar</button></Link>
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