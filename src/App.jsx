import React from 'react';
import './App.scss';

import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya}/>
    <Person person={alex} />
  </div>
);


/*

Criar um componente Person que renderize os detalhes de uma pessoa.

Usar o componente Person 3 vezes no App, passando os objetos misha, olya e alex.

Passar o objeto inteiro como prop: <Person person={misha} />.

Se não existir age no objeto, não renderizar a idade.

Se a pessoa for casada:

Se for homem → mostrar "wife: {nome da parceira}".

Se for mulher → mostrar "husband: {nome do parceiro}".

Se a pessoa não for casada, mostrar: "I am not married".

Manter os nomes de classes exatamente iguais: Person, Person__name, Person__age, Person__partner.

*/