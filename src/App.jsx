import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Routes, Route } from 'react-router-dom';
import CadastroMain from './Telas/CadastroMain';
import Header from './Telas/Header';
import HomeMain from './Telas/HomeMain';
import SobreNos from './Telas/SobreNos';
import Login from './Telas/Login';
import Agendamento from './Telas/Agendamento';
import Filtro from './Telas/Filtro'
import Agenda from './Telas/Agenda';
import HomeMedico from './Telas/HomeMedico';
import HomePaciente from './Telas/HomePaciente';
import PerfilPaciente from './Telas/PerfilPaciente';
import PerfilMedico from './Telas/PerfilMedico';
import Escolha from './Telas/Escolha';

const App = () => {

  const loggedIn = useSelector(state => state.loggedIn);
  const role = useSelector(state => state.role);

  return (
    <>
      <Header role={role} loggedIn={loggedIn} />
      <Routes>
        {loggedIn ?
          <>


            {role == "ROLE_PATIENT" ?
              <>
                <Route path='/agenda' element={<><Agendamento /></>} />
                <Route path='/busca' element={<><Filtro /></>} />
                <Route path='/edit-profile' element={<><PerfilPaciente /></>} />
                <Route path='*' element={<><HomePaciente /></>} />
              </> :
              <>
                <Route path='/agenda' element={<><Agenda /></>} />
                <Route path='/edit-profile' element={<><PerfilMedico /></>} />
                <Route path='*' element={<><HomeMedico /></>} />
              </>
            }
          </> :
          <>

            <Route path='/nossos-servicos' element={<><SobreNos /></>} />
            <Route path='/login' element={<><Login /></>} />
            <Route path='*' element={<><HomeMain /></>} />
          </>
        }
      </Routes>
      {role}
      <Outlet />
    </>
  )
}

export default App