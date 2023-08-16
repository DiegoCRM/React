const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("ativou meu evento");
  };

  const renderSomething = (x) =>{
    if(x){
      return <h1>Renderizando isso</h1>
    } else {
      return <h1>tb posso renderizar isso!</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>Clique aqui tb</button>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria existir");
            }
          }}
        >
          Clique aqui pf
        </button>
      </div>

          {renderSomething(true)}
          {renderSomething(false)}

    </div>
  );
};

export default Events;
