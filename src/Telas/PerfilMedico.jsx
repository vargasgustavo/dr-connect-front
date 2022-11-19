import React, { useState, useEffect } from 'react'
import '../css/medico.css'
import logoCard from '../images/logo-card-login.svg'
import axiosInstance from '../axios'

const CadastroMedico = () => {
    const [form, setForm] = useState({ name: '', crm: '', speciality: '', phoneNumber: '', cep: '', numberStreet: '', complement: '', medicalInsurance: '' })
    const updateForm = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {

            const res = await axiosInstance.put(`/doctors`, form);

            const data = await res.data;


        } catch (ex) {
            console.log(ex);

        }
    }

    const loadUser = async () => {
        try {
            const res = await axiosInstance.get(`/doctors/me`);
            const doctor = await res.data;
            setForm({
                name: doctor.name,
                cep: doctor.cep,
                phoneNumber: doctor.phoneNumber,
                numberStreet: doctor.numberStreet,
                crm: doctor.crm,
                speciality: doctor.speciality,
                medicalInsurance: doctor.medicalInsurance,
                complement: doctor.complement
            })
            // setUser(user);
        } catch (ex) {

        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <div>
            <div className="main-login">
                <div className="left-login">
                    <h1>Cadastre-se e tenha<br />o melhor atendimento</h1>
                </div>
                <div className="right-login">
                    <div className="card-login">
                        <div className="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div className="title">
                            <img src={logoCard} className="title-image" />
                        </div>
                        <div className="textfield">
                            <label for="nome">Nome</label>
                            <input type="text" name="name" placeholder="Nome" required onChange={updateForm} value={form.name} />
                        </div>
                        <div className="textfield">
                            <label for="crm">CRM</label>
                            <input id="crm" type="text" name="crm" placeholder="CRM" required onChange={updateForm} value={form.crm} />
                        </div>
                        <div className="textfield">
                            <label for="speciality">Especialidade</label>
                            <input id="speciality" type="text" name="speciality" placeholder="Especialidade" required onChange={updateForm} value={form.speciality} />
                        </div>
                        <div className="textfield">
                            <label for="medicalInsurance">Plano de Saúde</label>
                            <input id="medicalInsurance" type="text" name="medicalInsurance" placeholder="Plano de Saúde" required onChange={updateForm} value={form.medicalInsurance} />
                        </div>
                        <div className="textfield">
                            <label for="phoneNumber">Telefone</label>
                            <input id="phoneNumber" type="number" name="phoneNumber" placeholder="Telefone" required onChange={updateForm} value={form.phoneNumber} />
                        </div>

                        <div className="textfield">
                            <label for="cep">CEP</label>
                            <input id="cep" type="text" name="cep" placeholder="CEP" required onChange={updateForm} value={form.cep} />
                        </div>
                        <div className="textfield">
                            <label for="numberStreet">Número</label>
                            <input id="numberStreet" type="text" name="numberStreet" placeholder="Número" required onChange={updateForm} value={form.numberStreet} />
                        </div>
                        <div className="textfield">
                            <label for="complemento">Complemento</label>
                            <input id="complemento" type="text" name="complement" placeholder="Complemento (Opcional)" onChange={updateForm} value={form.complement} />
                        </div>
                        <p>Ao criar uma conta, você aceita os termos e condições de uso da Dr. Connect e reconhece que leu e entendeu nossa política de privacidade.
                        </p>
                    </div>
                    <button onClick={submitForm} className="btn-login trasitionButton">Prosseguir</button>
                </div>
            </div>
        </div>
    )
}

export default CadastroMedico