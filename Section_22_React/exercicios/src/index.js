// import React from 'react';
// import ReactDOM from 'react-dom';

// import Primeiro from './componentes/Primeiro';
// import { BoaTarde, BoaNoite } from './componentes/Multiplos';

// ReactDOM.render(
// <div>
//   <Primeiro  nome="tati" idade="10"/>
//   <BoaTarde nome="Ana"></BoaTarde>
//   <BoaNoite nome="Bia"></BoaNoite>
// </div>

// , document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import Saudacao from './componentes/Saudacao';


ReactDOM.render(
<div>
  <Saudacao tipo="Bom dia" nome="joão" />
</div>

, document.getElementById('root'));