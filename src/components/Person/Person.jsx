export const Person = ({ person }) => {
  const partnerInfo = person.isMarried
    ? person.sex === "m"
      ? <p className="Person__partner">{person.partnerName} is my wife</p>
      : <p className="Person__partner">{person.partnerName} is my husband</p>
    : <p className="Person__partner">I am not married</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {"age" in person
        ? <p className="Person__age">I am {person.age}</p>
        : null
      }

      {partnerInfo}
    </section>
  );
};
