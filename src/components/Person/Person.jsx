export const Person = ({ person }) => (
    
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {"age" in person ? (
  <p className="Person__age">I am {person.age}</p>
) : null}

      {person.isMarried ? (
  person.sex === "m" ? (
    <p className="Person__partner">{person.partnerName} is my wife</p>
  ) : (
    <p className="Person__partner">{person.partnerName} is my husband</p>
  )
) : (
  <p className="Person__partner">I am not married</p>
)}

    </section>
    
);


/*

Criar um componente Person que renderize os detalhes de uma pessoa.

Usar o componente Person 3 vezes no App, passando os objetos misha, olya e alex.

Passar o objeto inteiro como prop: <Person person={misha} />.

Se não existir age no objeto, não renderizar a idade.

Se a pessoa for casada:

Se for homem → mostrar "wife: {nome da parceira}".

Se for mulher → mostrar "husband: {nome do parceiro}".

Se for homem → mostrar "wife: {nome da parceira}".

Se for mulher → mostrar "husband: {nome do parceiro}".

Se a pessoa não for casada, mostrar: "I am not married".

Manter os nomes de classes exatamente iguais: Person, Person__name, Person__age, Person__partner.

*/
