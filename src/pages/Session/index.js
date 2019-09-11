import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';


import * as SessionActions from '../../store/modules/session/sessionAction';


import './Session.css';


export default function Session({match}) {
  let { id } = match.params



  const [selectedRow, setSelectedRow] = useState([]);
  let sessions = useSelector(state => {
    return state.session;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if(id === undefined) id = 1;
      dispatch(SessionActions.getSession(id));
    };
    fetchData();
  }, []);


  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      console.log(e.target.value)
    }
  }

  function handleExport() {
    console.log('Export click');
  }


  function handleSelected(session) {
    setSelectedRow(session.sessionId);
    console.log(session)
  }

  return (
    <div>

      {sessions.loading === true &&
        <div className="loading">
          <img src="https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif"/>
        </div>
      }

<img className="logo" src="https://s3.us-east-2.amazonaws.com/startse-comunidade/uploads/croppedImg_321452937.png"/>


      <div className="div-table">
        <div className="container">

        <div className="row">
  <div className="col-sm-4">
  <button type="button" className="btn btn-success" onClick={() => handleExport()}>
            Exportar
            <i className="icon fas fa-angle-down"></i>
          </button>

  </div>
  <div className="col-sm-8">
  <div className="input-group mb-3">
  <input type="text" className="form-control inputSearch" placeholder="Pesquisar &#xF002;" onKeyDown={(e) => handleKeyDown(e)}  aria-label="Amount (to the nearest dollar)"/>
  <div className="input-group-append">
    <span className="input-group-text iconSearch">
      <i className="fas fa-angle-down"/>
    </span>
  </div>
</div>
</div>
</div>




          <table className="tblSession">
            <thead>
              <tr>
                <th className="max-150">Operador</th>
                <th scope="call">Abertura de Sessão</th>
                <th scope="call">Fechamento de Sessão</th>
              </tr>
            </thead>
            <tbody>
            {sessions.data.content && sessions.data.content.map(session => (
              <tr key={session.sessionId} onClick={() => handleSelected(session)} className={selectedRow === session.sessionId ? "tableSelected" : "" }>
                <td>{session.userName}</td>
                <td>{(new Date(session.startDateTime)).toLocaleDateString('pt-BR', {year: "numeric", month:"2-digit", day:"2-digit", hour: "numeric", minute: "numeric"})}</td>
                <td>{(new Date(session.endDateTime)).toLocaleDateString('pt-BR', {year: "numeric", month:"2-digit", day:"2-digit", hour: "numeric", minute: "numeric"})}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>


      <label className="direitos">Todos os direitos são reservados a Jump Tecnologia | 2019 ©</label>

    </div>
  );
}
