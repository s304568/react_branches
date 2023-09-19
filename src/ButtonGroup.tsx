function ButtonGroup() {
  const buttons = ["Red", "Green", "Blue"];

  const buttonTags = buttons.map((button) => (
    <button type="button" key={button} onClick={() => console.log(button)}>
      {button}
    </button>
  ));

  return (
    <>
      <div className="flex-container">{buttonTags}</div>
    </>
  );
}

export default ButtonGroup;
