import React from 'react'
import Logo from '../images/logo.svg'
import '../css/homemedic.css'

const HomeMedico = () => {
    return (
        <div>
            <div className="main">
                <h2 className="sub">Suas Estatísticas</h2>
                <div className="body-body">
                    <div className="main-body">
                        <div className="card-details">
                            <div className="agend">
                                <p className="agg">Agendamentos</p>
                            </div>
                            <div className="patients">
                                <p className="pat">Pacientes</p>
                            </div>
                            <div className="trat">
                                <p className="ment">Tratamentos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="header-body">
                        <div className="left-header-body">

                        </div>
                        <div className="right-header-body">
                            <h2 className="sub-sub">Próximas Consultas</h2>
                            <div className="main-mini-card">
                                <div className="mini-card">
                                    <button>Agendamentos para Hoje</button>
                                </div>
                                <div className="mini-card">
                                    <button>Agendamentos para Amanhã</button>
                                </div>
                                <div className="mini-card">
                                    <button>Todos os Agendamentos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMedico