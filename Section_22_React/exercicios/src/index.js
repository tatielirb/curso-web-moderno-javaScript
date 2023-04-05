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

// import React from 'react';
// import ReactDOM from 'react-dom';

// import Saudacao from './componentes/Saudacao';


// ReactDOM.render(
// <div>
//   <Saudacao tipo="Bom dia" nome="joão" />
// </div>

// , document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho'


ReactDOM.render(
<div>
  <Pai nome="Paulo" sobrenome="Silva" >
      {/* <Filho nome="pedro"/> */}
      {/* <Filho nome="pedro" sobrenome="silva" />
      <Filho nome="Paulo" sobrenome="Silva" />
      <Filho nome="Carla" sobrenome="Silva" /> */}
      <Filho nome="pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
  </Pai>
</div>

, document.getElementById('root'));