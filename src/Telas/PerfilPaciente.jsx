import React, { useState, useEffect } from 'react'
import '../css/paciente.css'
import axiosInstance from '../axios'
import logoCard from '../images/logo-card-login.svg'

const CadastroPaciente = () => {
    const [form, setForm] = useState({ name: '', cpf: '', phoneNumber: '', cep: '', numberStreet: '', complement: '', birthDate: '' })
    const updateForm = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {

            const res = await axiosInstance.put(`/patients`, form);

            const data = await res.data;


        } catch (ex) {
            console.log(ex);

        }
    }

    const loadUser = async () => {
        try {
            const res = await axiosInstance.get(`/patients/me`);
            const patient = await res.data;
            setForm({
                name: patient.name,
                cep: patient.cep,
                phoneNumber: patient.phoneNumber,
                numberStreet: patient.numberStreet,
                cpf: patient.cpf,
                birthDate: patient.birthDate,
                complement: patient.complement
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
            <div class="main-login">
                <div class="left-login">
                    <h1>Cadastre-se e tenha<br />o melhor atendimento</h1>
                </div>
                <div class="right-login">
                    <div class="card-login-patient">
                        <div class="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div class="title">
                            <img src={logoCard} class="title-image" />
                        </div>
                        <div class="textfield">
                            <label for="name">Nome</label>
                            <input type="text" name="name" required onChange={updateForm} value={form.name} />
                        </div>
                        <div class="textfield">
                            <label for="date">Data de Nascimento</label>
                            <input type="date" name="date" required onChange={updateForm} value={form.birthDate} />
                        </div>
                        <div class="textfield">
                            <label for="telefone">Telefone</label>
                            <input type="tel" name="telefone" placeholder="Telefone" pattern="/^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$/" required onChange={updateForm} value={form.phoneNumber} />
                        </div>
                        <div class="textfield">
                            <label for="CEP">CEP</label>
                            <input type="text" name="CEP" id="CEP" required pattern="\d{5}-\d{3}" placeholder="CEP" onChange={updateForm} value={form.cep} />
                        </div>
                        <div class="textfield">
                            <label for="CPF">CPF</label>
                            <input type="text" name="CPF" id="CPF" required pattern="\d{3}.\d{3}.\d{3}-\d{2}" placeholder="CEP" onChange={updateForm} value={form.cpf} />
                        </div>
                        <div class="textfield">
                            <label for="numero">Número</label>
                            <input type="number" name="numero" placeholder="Número" required onChange={updateForm} value={form.numberStreet} />
                        </div>
                        <div class="textfield">
                            <label for="complemento">Complemento</label>
                            <input type="text" name="complemento" placeholder="Complemento" required onChange={updateForm} value={form.complement} />
                            <p>Ao criar uma conta, você aceita os termos e condições de uso da Dr. Connect e reconhece que leu e entendeu nossa política de privacidade.
                            </p>
                        </div>
                        <button onClick={submitForm} class="btn-login trasitionButton">Prosseguir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastroPaciente