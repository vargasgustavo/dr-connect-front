import React, { useState, useEffect } from 'react'
import '../css/pacientestyle.css'
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
import FeedBack from '../Layouts/FeedBack';
import logoCard from "../images/logo-card-login.svg"

const CadastroMain = (props) => {

    const [feedBack, setfeedBack] = useState(false)
    const [isOk, setIsOk] = useState(false);

    const pathParam = useParams("id");
    const [user, setUser] = useState(null);

    const [form, setForm] = useState({ nome: '', email: '', senha: '', confsenha: '' })    const updateForm = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }
    // ... spread operation --> copia de uma lista ou dicionario

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            if (!pathParam.id) {
                const res = await axiosInstance.post("/paciente", form);

                const data = await res.data;
                setfeedBack(true);
                setIsOk(true);

            } else {
                const res = await axiosInstance.put(`/paciente/${pathParam.id}`, form);

                const data = await res.data;
                setfeedBack(true);
                setIsOk(true);
                setTimeout(() => setfeedBack(false), 1000);
            }
        } catch (ex) {
            console.log(ex);
            setfeedBack(true);
            setIsOk(false);
        }
    }

    return (
        <div>
            <div class="main-login">
                <div class="left-login">
                    <h1>Edite seu perfil</h1>
                </div>
                <div class="right-login">
                    <div class="card-login">
                        <div class="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div class="title">
                            <img alt='' src={logoCard} class="title-image" />
                        </div>
                        <div class="textfield">
                            <label for="usuario">Nome completo</label>
                            <input type="text" name="nome" placeholder="Digite seu nome..." required onChange={updateForm} value={form.nome} />
                        </div>
                        <div class="textfield">
                            <label for="senha">E-mail</label>
                            <input type="text" name="email" placeholder="Coloque seu e-mail" required onChange={updateForm} value={form.email} />
                        </div>
                        <div class="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" required onChange={updateForm} value={form.senha} />
                        </div>
                        <div class="textfield">
                            <label for="senha">Confirmar Senha</label>
                            <input type="password" name="confsenha" placeholder="Confirmar Senha" required onChange={updateForm} value={form.confsenha} />
                            <p>Ao criar uma conta, você aceita os termos e condições de uso da Dr. Connect e reconhece que leu e entendeu nossa política de privacidade.
                            </p>
                        </div>
                        <button class="button-login trasitionButton" onClick={submitForm}>Salvar Alterações</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastroMain