import React, { useCallback } from 'react';
import axios from 'axios';
import * as EmailValidator from 'email-validator';
import './Form.css';

const instance = axios.create({
  baseURL: process.env.API,
  crossDomain: true
});

const accessToPC = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Sim',
    label: 'Sim',
  },
  {
    value: 'Não',
    label: 'Não',
  },
];

const possibleAges = [
  {value: '',label: '',},
  {value: '1',label: '1',},{value: '2',label: '2',},{value: '3',label: '3',},{value: '4',label: '4',},
  {value: '5',label: '5',},{value: '6',label: '6',},{value: '7',label: '7',},{value: '8',label: '8',},
  {value: '9',label: '9',},{value: '10',label: '10',},{value: '11',label: '11',},{value: '12',label: '12',},
  {value: '13',label: '13',},{value: '14',label: '14',},{value: '15',label: '15',},{value: '16',label: '16',},
  {value: '17',label: '17',},{value: '18',label: '18',},{value: '19',label: '19',},{value: '20',label: '20',},
  {value: '21',label: '21',},
];

function Form({logConversion, type}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [hasPC, setHasPC] = React.useState('');
  const [buttonState, setButtonState] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState('');

  async function validate() {
    console.log(window._LTracker);
    console.log(email);
    window._LTracker.push({
      'title': 'Form submission',
      'email': email,
      'phone': phone,
      'name': name,
    });
    if (!EmailValidator.validate(email)) {
      setErrorMessage('O E-mail preenchido não é válido');
      return false;
    }
    const cleanPhone = clearPhone(phone);
    if (cleanPhone.length < 11) {
      setErrorMessage('É necessário preencher o telefone do responsável');
      return false;
    }
    if (name === '') {
      setErrorMessage('É necessário preencher o nome do responsável');
      return false; 
    }
    const isDomainValid = await axios({
      "method":"GET",
      "url":"https://mailcheck.p.rapidapi.com/",
      "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"mailcheck.p.rapidapi.com",
        "x-rapidapi-key":"26658677dcmsh2720bb92034db4ep153d0ajsn55e077aecb2c",
        "useQueryString":true
      },"params":{
        "domain":email
      }
    });
    if (!isDomainValid.data.valid) {
      setErrorMessage('O e-mail preenchido não é válido');
      return false;
    }
    setErrorMessage('');
    return true;
  }

  const addLead = async () => {
    try {
      console.log(name);
      if (buttonState === 1) {
        return undefined;
      }
      setButtonState(1);
      if(await validate()) {
        logConversion();
        await instance.post('/leads/add', {
          name,
          email,
          phone: `+55${clearPhone(phone)}`,
          url: window.location.href,
          abTestTag: type,
        }, { 
          timeout: 5000 
        });
        console.log('Send GTM');
        window.dataLayer.push({ 'event': 'Formulário enviado' });
        console.log('Send PIXEL');
        window.fbq('track', 'Conversão');
        setButtonState(2);
      } else {
        setButtonState(0);
      }
    } catch (error) {
      console.log(error);
      setButtonState(0);
    }
  };

  function HasPCSelector() {
    const handleChange = (event) => {
      setHasPC(event.target.value);
    };

    return <select defaultValue={hasPC} id="select-Form" name="select" onChange={handleChange}>
      {accessToPC.map((option) => { 
          return (<option key={option.value} value={option.value}>{option.value}</option>);
      })}
    </select>
  }

  function AgeSelector() {
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return <select value={age} id="select-Form" name="select" onChange={handleChange}>
      {possibleAges.map((option) => { 
          return (<option key={option.value} value={option.value}>{option.value}</option>);
      })}
    </select>
  }

  function clearPhone(phoneString) {
    return phoneString.replace('(','').replace(')','').replace('-','');
  }

  function checkInput(phoneString) {
    const cleanPhone = clearPhone(phoneString);
    if (cleanPhone.length < 12) {
      if (cleanPhone.match(/^\d+$/) || cleanPhone === '') {
        setPhone(phoneString);
      }
    }
  }

  function formatPhone(phoneString) {
    const cleanPhone = clearPhone(phoneString);
    if (cleanPhone.length > 7) {
      return `(${cleanPhone.substr(0, 2)})${cleanPhone.substr(2, 5)}-${cleanPhone.substr(7, cleanPhone.length)}`; 
    } else if (cleanPhone.length > 2) {
      return `(${cleanPhone.substr(0, 2)})${cleanPhone.substr(2, cleanPhone.length)}`; 
    } else if (cleanPhone.length > 0) {
      return `(${cleanPhone}`;
    } else {
      return '';
    }
  }

  function renderButton() {
    switch (buttonState) {
      case 1: 
        return <div id="button-Form"><div className="loader" /></div>;
      case 2:
        return <div id="button-Form" onClick={addLead}>CADASTRO ENVIADO</div>;
      default:
        return <div id="button-Form" onClick={addLead}><button id="buttonRemove-Form">AGENDAR AULA EXPERIMENTAL</button></div>;
    }
  } 

  const onChangeEmail = useCallback((event) => {
    setEmail(event.target.value.trim().toLowerCase())
  }, [email]);

  const onChangeName = useCallback((event) => {
    setName(event.target.value)
  }, [name]);

  const onChangePhone = useCallback((event) => {
    checkInput(event.target.value)
  }, [phone]);

  return <div id="card-Form">
      <h2 id="h2-Form">Faça seu cadastro e entraremos<br/> em contato para agendar sua aula <br/>experimental </h2>
      <div className="ubuntuText" style={{width: '100%'}} >
        <div id="label-Form">Nome Completo</div>
        <input id="input-Form" type="text" value={name} onChange={onChangeName} placeholder='Nome Completo' />
      </div>
      <div className="ubuntuText" style={{width: '100%'}} >
        <div id="label-Form">DDD + Telefone</div>
        <input id="input-Form" type="text" value={formatPhone(phone)} onChange={onChangePhone} placeholder='(DDD) Telefone'/>
      </div>
      <div className="ubuntuText" style={{width: '100%'}} >
        <div id="label-Form">E-mail</div>
        <input id="input-Form" type="text" value={email} onChange={onChangeEmail} placeholder='E-mail'/>
      </div>
      <div className="ubuntuText" style={{width: '100%'}} >
        <div id="form-obs">É necessário um computador ou laptop para realização das aulas</div>
      </div>
      {errorMessage !== '' ? <div className="ubuntuText" style={{width: '100%'}} >
        <div id="label-Form" style={{color: '#EB5757'}}>{errorMessage}</div>
      </div> : undefined}
      {renderButton()}
    </div>
}

export default Form