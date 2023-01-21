function PetInfo(props) {
  const { animal, age, hasPet } = props;
  // const conditionalText = hasPet
  //   ? `my ${animal} is ${age} years old.`
  //   : "I don't have an animal";

  return (
    <>
      {/* {hasPet ? <h1>{conditionalText}</h1> : <h3>{conditionalText}</h3>} */}
      {/* {hasPet && <h1>{conditionalText}</h1>} */}
      {hasPet ? (
        <h1>{`my ${animal} is ${age} years old.`}</h1>
      ) : (
        <h3>I don't have a {animal}</h3>
      )}
    </>
  );
}

export default PetInfo;
