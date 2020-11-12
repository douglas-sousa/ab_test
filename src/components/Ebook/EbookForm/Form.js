import React, { useCallback } from 'react';
import axios from 'axios';
import * as EmailValidator from 'email-validator';

const instance = axios.create({
  baseURL: process.env.API,
  crossDomain: true
});

const dataEbook = {
  mainTitle: 'Receber e-book',
  secondaryTitle: `Preencha os dados abaixo e receba em seu e-mail nosso o E-book.`,
  mainButtonText: 'QUERO MEU E-BOOK',
  secondaryButtonText: 'E-BOOK ENVIADO',
  type: 'EBOOK',
}

const dataCourse = {
  mainTitle: 'RECEBER ACESSO gratuito AO CURSO',
  secondaryTitle: 'Preencha os dados abaixo e receba em seu e-mail o link para o curso.',
  mainButtonText: 'QUERO TER ACESSO AO CURSO',
  secondaryButtonText: 'CURSO ENVIADO',
  type: 'COURSE',
}

function Form({logConversion, type, target}) {
  const formData = target === 'course' ? dataCourse : dataEbook;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [buttonState, setButtonState] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState('');

  async function validate() {
    console.log(window._LTracker);
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
          type: formData.type,
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
        return <div id="button-Form" onClick={addLead} style={{fontSize: '2.5vh'}}>{formData.secondaryButtonText}</div>;
      default:
        return <div id="button-Form" onClick={addLead}><button style={{fontSize: '2.5vh', padding: '10px'}} id="buttonRemove-Form">{formData.mainButtonText}</button></div>;
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

  return <div id="Ebook-Card-Form">
      <h1 className='ubuntu-title' id='main-title-ebook' style={{textAlign: 'center', fontSize: '4.3vh'}}>{formData.mainTitle}</h1>
      <p className='secondaryTextEbook'>{formData.secondaryTitle}</p>
      <div className="ubuntuText" style={{width: '100%'}} >
        <div id="labelEbookText">Nome Completo</div>
        <input id="input-Form" style={{borderColor: '#828282'}} type="text" placeholder='Nome Completo' value={name} onChange={onChangeName} />
      </div>
      <div className="ubuntuText" style={{width: '100%'}} >
        <div id="labelEbookText">(DDD) Celular</div>
        <input id="input-Form" style={{borderColor: '#828282'}} type="text" placeholder='(DDD) Telefone' value={formatPhone(phone)} onChange={onChangePhone} />
      </div>
      <div className="ubuntuText" style={{width: '100%'}} >
        <div id="labelEbookText">E-mail</div>
        <input id="input-Form" style={{borderColor: '#828282'}} type="text" placeholder='E-mail' value={email} onChange={onChangeEmail} />
      </div>
      {errorMessage !== '' ? <div className="ubuntuText" style={{width: '100%'}} >
        <div id="labelEbookText" style={{color: '#EB5757'}}>{errorMessage}</div>
      </div> : undefined}
      {renderButton()}
    </div>
}

export default Form